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
    public class EnglishLevelController : ControllerBase
    {
	    private readonly IGenericRepository<Currency> _englishLevelRepository;

	    public EnglishLevelController(IGenericRepository<Currency> englishLevelRepository)
	    {
			_englishLevelRepository = englishLevelRepository;
	    }

	    [HttpGet, Route("")]
	    public async Task<IActionResult> GetList()
	    {
		    try
		    {
			    var list = await _englishLevelRepository.Get();
			    return Ok(list);
		    }
		    catch (Exception e)
		    {
			    return BadRequest(e.Message);
		    }
	    }
    }
}