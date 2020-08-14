using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using AutoMapper;
using JobPortal.Dto;
using JobPortal.Models;
using JobPortal.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace JobPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SkillsController : ControllerBase
    {
	    private readonly IGenericRepository<Skill> _skillsRepository;
	    private readonly IMapper _mapper;
	    private readonly IGenericRepository<Job> _jobRepository;

	    public SkillsController(IGenericRepository<Skill> skillsRepository, IGenericRepository<Job> jobRepository, IMapper mapper)
	    {
		    _skillsRepository = skillsRepository;
		    _jobRepository = jobRepository;
		    _mapper = mapper;
	    }

	    [HttpGet, Route("top")]
		[ProducesResponseType(typeof(SkillResponseModel), (int)HttpStatusCode.OK)]
	    public async Task<IActionResult> GetTopList([FromQuery] int amountOfItems)
	    {
		    try
		    {
			    var skills = await _skillsRepository.DbSet().OrderByDescending(x => x.JobsWhereRequired.Count())
				    .ToListAsync();
				var result = new SkillResponseModel
				{
					Skills = _mapper.Map<SkillModel[]>(skills.Take(amountOfItems)),
					TotalCount = skills.Count
				};
			    return Ok(result);
		    }
		    catch (Exception e)
		    {
			    return BadRequest(e.Message);
		    }
	    }


		[HttpGet]
		[Route("")]
		[ProducesResponseType(typeof(SkillModel[]), (int)HttpStatusCode.OK)]
		public async Task<IActionResult> GetList()
	    {
		    try
		    {
			    var list = await _skillsRepository.Get();
			    return Ok(_mapper.Map<SkillModel[]>(list));
		    }
		    catch (Exception e)
		    {
				return BadRequest(e.Message);
			}
	    }
    }
}