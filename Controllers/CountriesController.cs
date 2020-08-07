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
	public class CountriesController : ControllerBase
	{
		private readonly IGenericRepository<Country> _countryRepository;

		public CountriesController(IGenericRepository<Country> countryRepository)
		{
			_countryRepository = countryRepository;
		}

		[HttpGet]
		[Route("")]
		[ProducesResponseType(typeof(List<Country>), (int)HttpStatusCode.OK)]
		[ProducesResponseType((int)HttpStatusCode.BadRequest)]
		public async Task<IActionResult> GetCountrysList(int? number )
		{
			try
			{
				if (number == null)
				{
					var countries = await _countryRepository.Get();
					return Ok(countries.ToList());
				}
				else
				{
					var countries = _countryRepository.DbSet().Take(number.Value).ToList();
					return Ok(countries.ToList());
				}
			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
		}

	}
}