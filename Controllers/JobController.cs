using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobPortal.Models;
using JobPortal.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace JobPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobController : ControllerBase
    {
	    private readonly IGenericRepository<Job> _jobRepository;
	    private readonly IGenericRepository<Freelancer> _freelancerRepository;
	    private readonly IGenericRepository<Company> _companyRepository;

	    public JobController(IGenericRepository<Job> jobRepository, IGenericRepository<Freelancer> freelancerRepository, IGenericRepository<Company> companyRepository)
	    {
		    _jobRepository = jobRepository;
		    _freelancerRepository = freelancerRepository;
		    _companyRepository = companyRepository;
	    }

	    [HttpGet]
	    [Route("{jobId}")]
	    public async Task<IActionResult> GetJobById([FromRoute] string jobId)
	    {
		    try
		    {
			    var job = await _jobRepository.FindById(Guid.Parse(jobId));
			    return Ok(job);
		    }
		    catch (Exception e)
		    {
			    return NotFound($"Job not found with id = {jobId}");
		    }
	    }

	    [HttpGet]
	    [Route("/freelancer/{freelancerId}")]
	    public async Task<IActionResult> GetFreelancerJobList([FromRoute] string freelancerId)
	    {
		    try
		    {
			    var jobList = (await _freelancerRepository.FindById(Guid.Parse(freelancerId))).Contracts.Select(x=> x.JobProposal.Job).ToList();
			    return Ok(jobList);
		    }
		    catch (Exception e)
		    {
			    return NotFound(e.Message);
		    }
		}


	    [HttpGet]
	    [Route("/company/{companyId}")]
	    public async Task<IActionResult> GetCompanyOngoingJobList([FromRoute] string companyId)
	    {
		    try
		    {
			    var jobList = (await _companyRepository.FindById(Guid.Parse(companyId))).Jobs
				    .Where(x => x.JobStatus == JobStatus.Open)
				    .Select(x => new
				    {
					    JobId = x.JobId,
					    Title = x.Title,
					    Duration = x.Duration
				    });
				return Ok(jobList);
		    }
		    catch (Exception e)
		    {
			    return NotFound(e.Message);
		    }
		}


    }
}