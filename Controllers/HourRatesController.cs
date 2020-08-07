using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobPortal.Models;
using JobPortal.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HourRatesController : ControllerBase
    {
	    private readonly IGenericRepository<HourRate> _hourRatesRepository;

	    public HourRatesController(IGenericRepository<HourRate> hourRatesRepository)
	    {
			_hourRatesRepository = hourRatesRepository;
	    }

		[HttpGet]
		[Route("")]
	    public async Task<IActionResult> GetList()
	    {
		    try
		    {
			    var list = await _hourRatesRepository.Get();
			    return Ok(list);
		    }
		    catch (Exception e)
		    {
			    Console.WriteLine(e);
			    throw;
		    }
	    }
    }
}