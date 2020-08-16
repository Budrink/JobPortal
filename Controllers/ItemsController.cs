using System;
using System.Linq;
using System.Threading.Tasks;
using JobPortal.Dto;
using JobPortal.Models;
using JobPortal.Repository;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace JobPortal.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ItemsController : ControllerBase
	{
		private readonly IGenericRepository<SavedItem> _itemsRepository;
		private readonly UserManager<User> _userManager;

		public ItemsController(IGenericRepository<SavedItem> itemsRepository, UserManager<User> userManager)
		{
			_itemsRepository = itemsRepository;
			_userManager = userManager;
		}

		[HttpPost, Route("followers")]
		public async Task<IActionResult> GetFollowersList([FromBody] FollowersRequestModel request)
		{
			try
			{
				var followers = await _itemsRepository.Get(x =>
						x.SavedItemId.ToString() == request.ItemId && x.SavedItemType == request.SavedItemType)
					.Select(x => x.User).ToListAsync();
				var count = followers.Count;
				var followersView = followers.Select(x => new
				{
					Id = x.Id,
					UserName = x.NormalizedUserName,
					UserPhoto = x.UserPhoto?.FileLink
				}).Skip((request.PageNumber - 1) * request.AmountOfItemsOnPage).Take(request.AmountOfItemsOnPage).ToList();
				return Ok(new
				{
					request.PageNumber,
					request.AmountOfItemsOnPage,
					TotalCount = count,
					Followers = followersView
				});
			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
		}

		[HttpPost, Route("")]
		public async Task<IActionResult> SaveItem([FromBody] SaveItemRequestModel request)
		{
			try
			{

				var exists = await _itemsRepository
					.Get(x => x.SavedItemId.ToString() == request.ItemId && x.User.Id.ToString() == request.UserId && x.SavedItemType == request.SavedItemType)
					.FirstOrDefaultAsync();
				var user = await _userManager.FindByIdAsync(request.UserId);
				if (request.Save)
				{
					if (exists != null) return Ok(false);
					var item = new SavedItem
					{
						SavedItemId = Guid.Parse(request.ItemId),
						User = user,
						SavedItemType = request.SavedItemType
					};
					await _itemsRepository.Create(item);
					await _itemsRepository.SaveChanges();
					return Ok(true);
				}

				if (exists == null) return Ok(false);
				_itemsRepository.Remove(exists);
				return Ok(true);

			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
		}

	}
}