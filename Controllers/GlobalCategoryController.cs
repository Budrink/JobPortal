using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using JobPortal.Models;
using JobPortal.Repository;
using Microsoft.AspNetCore.Mvc;

namespace JobPortal.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class GlobalCategoryController : ControllerBase
	{
		private readonly IGenericRepository<GlobalCategory> _globalCategoryRepository;

		public GlobalCategoryController(IGenericRepository<GlobalCategory> globalCategoryRepository)
		{
			_globalCategoryRepository = globalCategoryRepository;
		}

		public class RequestDTO
		{
			public int AmountOfCategories { get; set; }
		}
		[HttpPost]
		[Route("")]
		[ProducesResponseType(typeof(List<GlobalCategory>), (int)HttpStatusCode.OK)]
		[ProducesResponseType((int)HttpStatusCode.BadRequest)]
		public async Task<IActionResult> GetGlobalCategoriesList([FromBody] RequestDTO request)
		{
			try
			{
				var categoryList = await _globalCategoryRepository.Get();
				if (request.AmountOfCategories != 0)
				{
					categoryList = categoryList.Take(request.AmountOfCategories);

				}	
				return Ok(categoryList.ToList());
			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
		}

	}
}