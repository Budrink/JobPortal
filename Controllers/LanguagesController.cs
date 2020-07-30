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
	public class LanguagesController : ControllerBase
	{
		private readonly IGenericRepository<Language> _languageRepository;

		public LanguagesController(IGenericRepository<Language> languageRepository)
		{
			_languageRepository = languageRepository;
		}

		[HttpGet]
		[Route("")]
		[ProducesResponseType(typeof(List<Language>), (int)HttpStatusCode.OK)]
		[ProducesResponseType((int)HttpStatusCode.BadRequest)]
		public async Task<IActionResult> GetLanguagesList()
		{
			try
			{
				var languages = await _languageRepository.Get();
				return Ok(languages.ToList());
			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
		}

	}
}