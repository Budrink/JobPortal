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
    public class CurrencyController : ControllerBase
    {
	    private readonly IGenericRepository<Currency> _currencyRepository;

	    public CurrencyController(IGenericRepository<Currency> currencyRepository)
	    {
		    _currencyRepository = currencyRepository;
	    }

	    [HttpGet, Route("")]
	    public async Task<IActionResult> GetList()
	    {
		    try
		    {
			    var list = await _currencyRepository.Get();
			    return Ok(list);
		    }
		    catch (Exception e)
		    {
			    return BadRequest(e.Message);
		    }
	    }
    }
}