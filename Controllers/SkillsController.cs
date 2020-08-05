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
    public class SkillsController : ControllerBase
    {
	    private readonly IGenericRepository<Skill> _skillsRepository;

	    public SkillsController(IGenericRepository<Skill> skillsRepository)
	    {
		    _skillsRepository = skillsRepository;
	    }

		[HttpGet]
		[Route("list")]
	    public async Task<IActionResult> GetList()
	    {
		    try
		    {
			    var list = await _skillsRepository.Get();
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