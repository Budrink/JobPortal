using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobPortal.Models;
using JobPortal.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace JobPortal.Controllers
{
	public class OfferDto
	{
		public string SenderId { get; set; }
		public string FreelancerId { get; set; }
		public string JobId { get; set; }
		public string Description { get; set; }
		public string Deadline { get; set; }
	}

    [Route("api/[controller]")]
    [ApiController]
    public class JobController : ControllerBase
    {
	    private readonly IGenericRepository<Job> _jobRepository;
	    private readonly IGenericRepository<Freelancer> _freelancerRepository;
		private readonly UserManager<User> _userManager;
	    private readonly IGenericRepository<Company> _companyRepository;
		private readonly IGenericRepository<Offer> _offerRepository;

	    public JobController(IGenericRepository<Job> jobRepository, IGenericRepository<Freelancer> freelancerRepository, IGenericRepository<Company> companyRepository, IGenericRepository<Offer> offerRepository, UserManager<User> userManager)
	    {
		    _jobRepository = jobRepository;
			_userManager = userManager;
		    _freelancerRepository = freelancerRepository;
		    _companyRepository = companyRepository;
			_offerRepository = offerRepository;
	    }

		[HttpPost]
		[Route("sendoffer")]
		public async Task<IActionResult> SendOffer([FromBody] OfferDto request)
		{
			try
			{
				var freelancer = await _userManager.FindByIdAsync(request.FreelancerId);
				var company = await _companyRepository.FindById(Guid.Parse(request.SenderId));
				var job = await _jobRepository.FindById(Guid.Parse(request.JobId));
				var offer = new Offer
				{
					Freelancer = freelancer,
					Job = job,
					Description = request.Description,
					Deadline = DateTime.Parse(request.Deadline)
				};
				await _offerRepository.Create(offer);
				await _offerRepository.SaveChanges();
				return Ok(offer);
			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
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