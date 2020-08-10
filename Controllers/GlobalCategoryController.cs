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
		private readonly IGenericRepository<Language> _globalCategoryRepository;

		public GlobalCategoryController(IGenericRepository<Language> globalCategoryRepository)
		{
			_globalCategoryRepository = globalCategoryRepository;
		}

		[HttpGet]
		[Route("")]
		[ProducesResponseType(typeof(List<Language>), (int)HttpStatusCode.OK)]
		[ProducesResponseType((int)HttpStatusCode.BadRequest)]
		public async Task<IActionResult> GetLanguagesList(int? amountOfCategories)
		{
			try
			{
				var categoryList = await _globalCategoryRepository.Get();
				if (amountOfCategories!=null)
				{
					categoryList = categoryList.Take(amountOfCategories.Value);

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