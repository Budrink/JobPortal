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
    public class DurationController : ControllerBase
    {
	    private readonly IGenericRepository<Duration> _durationRepository;

	    public DurationController(IGenericRepository<Duration> durationRepository)
	    {
		    _durationRepository = durationRepository;
	    }

	    [HttpGet, Route("")]
	    public async Task<IActionResult> GetDurationsList()
	    {
		    try
		    {
			    var list = await _durationRepository.Get();
			    return Ok(list);
		    }
		    catch (Exception e)
		    {
			    return BadRequest(e.Message);
		    }
	    }
    }
}