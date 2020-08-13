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
    public class NumberOfEmployeesController : ControllerBase
    {
	    private readonly IGenericRepository<NumberOfEmployees> _numberOfEmployeesRepository;

	    public NumberOfEmployeesController(IGenericRepository<NumberOfEmployees> numberOfEmployeesRepository)
	    {
			_numberOfEmployeesRepository = numberOfEmployeesRepository;
	    }

	    [HttpGet, Route("")]
	    public async Task<IActionResult> GetList()
	    {
		    try
		    {
			    var list = await _numberOfEmployeesRepository.Get();
			    return Ok(list);
		    }
		    catch (Exception e)
		    {
			    return BadRequest(e.Message);
		    }
	    }
    }
}