using System;
using System.Threading.Tasks;
using JobPortal.Models;
using JobPortal.Repository;
using Microsoft.AspNetCore.Mvc;

namespace JobPortal.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class CountryController : ControllerBase
	{
		private readonly IGenericRepository<Country> _countryRepository;

		public CountryController(IGenericRepository<Country> countryRepository)
		{
			_countryRepository = countryRepository;
		}

		[HttpGet, Route("")]
		public async Task<IActionResult> GetList()
		{
			try
			{
				var countries = await _countryRepository.Get();
				return Ok(countries);
			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
		}
	}
}