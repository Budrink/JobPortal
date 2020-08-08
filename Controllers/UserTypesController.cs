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
	public class UserTypesController : ControllerBase
	{
		private readonly IGenericRepository<FreelancerType> _userTypesRepository;

		public UserTypesController(IGenericRepository<FreelancerType> userTypesRepository)
		{
			_userTypesRepository = userTypesRepository;
		}

		[HttpGet]
		[Route("")]
		[ProducesResponseType(typeof(List<FreelancerType>), (int)HttpStatusCode.OK)]
		[ProducesResponseType((int)HttpStatusCode.BadRequest)]
		public async Task<IActionResult> GetUserTypesList()
		{
			try
			{
				var userTypes = await _userTypesRepository.Get();
				return Ok(userTypes.ToList());
			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
		}

	}
}