using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobPortal.Controllers
{
	/// <summary>
	/// TODO: Finish this methods (signature will be change)
	/// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
	    [HttpPost]
	    public IActionResult RegisterPartOne()
	    {
		    throw new NotImplementedException();
	    }

	    [HttpPost]
	    public IActionResult RegisterPartTwo()
	    {
			throw new NotImplementedException();
	    }

	    [HttpPost]
	    public IActionResult RegisterFreelancer()
	    {
		    throw new NotImplementedException();
	    }

	    [HttpPost]
	    public IActionResult RegisterCompany()
	    {
		    throw new NotImplementedException();
	    }
	}
}