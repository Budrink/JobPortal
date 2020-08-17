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
	public class ComplainReasonController : ControllerBase
	{
		private readonly IGenericRepository<ComplainReason> _complainReasonRepository;

		public ComplainReasonController(IGenericRepository<ComplainReason> complainReasonRepository)
		{
			_complainReasonRepository = complainReasonRepository;
		}

		[HttpGet]
		[Route("")]
		[ProducesResponseType(typeof(List<ComplainReason>), (int)HttpStatusCode.OK)]
		[ProducesResponseType((int)HttpStatusCode.BadRequest)]
		public async Task<IActionResult> GetReasonsList( )
		{
			try
			{
			
					var reasons = await _complainReasonRepository.Get();
					return Ok(reasons.ToList());
				}
		
			
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
		}

	}
}