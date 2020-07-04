using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "company,freelancer")]
    public class ContractController : ControllerBase
    {

     //   [HttpGet]
	    //public IActionResult GetContractsList(bool onlyActive = false)
	    //{

	    //}
    }
}