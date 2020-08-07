using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Castle.Core.Internal;
using JobPortal.Dto;
using JobPortal.Models;
using JobPortal.Repository;
using Microsoft.AspNetCore.Authorization;
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

		[HttpPost]
 		[Route("List")]
		[Authorize]
		public async Task<IActionResult> GetJobList(JobListRequestDto dto)
		{
			try
			{
				var user = await _userManager.FindByEmailAsync(HttpContext.User.Identity.Name);

				var jobsFiltered = _jobRepository.DbSet().Where(x =>
					(dto.StringForSearching.IsNullOrEmpty()||x.Title.Contains(dto.StringForSearching)) &&
					(dto.CompanyFilter.IsNullOrEmpty() ||
					 dto.CompanyFilter.Select(i => Guid.Parse(i)).Contains(x.Company.CompanyId)) &&
					//  (dto.CategoryFilter.IsNullOrEmpty() || dto.CategoryFilter.Select(i => Guid.Parse(i)).Contains(x.Category)) &&
					(dto.LocationFilter.IsNullOrEmpty() ||
					 dto.LocationFilter.Select(i => Guid.Parse(i)).Contains(x.Country.CountryId)) &&
					(dto.LangFilter.IsNullOrEmpty() ||
					 dto.LangFilter.Select(i => Guid.Parse(i)).Contains(x.Language.LanguageId)));
				if (!dto.StatusFilter.IsNullOrEmpty())
				{
					var statusFilter = Enum.Parse<JobStatus>(dto.StatusFilter);
					jobsFiltered = jobsFiltered.Where(x => x.JobStatus == statusFilter);
				}

				if (!dto.TypeFilter.IsNullOrEmpty())
				{
					jobsFiltered = jobsFiltered.Where(x =>
						dto.TypeFilter.Select(Enum.Parse<JobType>).Contains(x.JobType));
				}

				var count = jobsFiltered.Count();

				var savedJobsIds = user.SavedItems.Where(x => x.SavedItemType == SavedItemType.Job).Select(x => x.Id).ToHashSet();
				var jobs = jobsFiltered.Select(x => new
				{
					Description = x.JobDetails,
					Company = new { 
						CompanyId = x.Company.CompanyId,
						CompanyName = x.Company.CompanyName,
						VerifiedCompany = x.Company.VerifiedCompany
					},
					Title = x.Title,
					JobStatus = x.JobStatus,
					JobType = x.JobType,
					Duration = x.Duration,
					Tax = x.Tax,
					Country = new {
						CountryId = x.Country.CountryId,
						CountryName = x.Country.CountryName,
						CountryFlag = x.Country.CountryFlag
					},
					ProposalsCount = x.ProposalsCount,
					IsSaved = savedJobsIds.Contains(x.JobId),
				}).Skip((dto.PageNumber - 1)*dto.AmountOfItemsOnPage).Take(dto.AmountOfItemsOnPage).ToList();
				var result = new
				{
					TotalAmountOfProjects = count,
					PageNumber = dto.PageNumber,
					AmountOfItemsOnPage = dto.AmountOfItemsOnPage,
					Projects = jobs
				};
				return Ok(result);
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


			    var result = new
			    {
				    JobId = job.JobId,
				    Qualification = job.CompetenceLevel.ToString(),
				    Company = new
				    {
					    UserId = job.Company.User.Id,
					    FirstName = job.Company.User.FirstName,
					    LastName = job.Company.User.LastName,
					    Email = job.Company.User.Email,
					    Gender = job.Company.User.Gender,
					    JoinDate = job.Company.User.JoinDate,
					    UserName = job.Company.User.UserName,
					    VerifiedCompany = true,
					    CompanyId = job.Company.CompanyId,
					    Country = new
					    {
						    CountryId = job.Company.User.Country.CountryId,
						    CountryFlag = job.Company.User.Country.CountryFlag,
						    CountryName = job.Company.User.Country.CountryName
					    }
				    },
				    Type = job.JobType,
				    Duration = job.Duration.DurationText,
				    JobDetails = job.JobDetails,
				    SkillRequired = job.SkillsRequired.ToList(),
				    Attachments = job.Attachments.ToList(),
					ProposalsCount = job.ProposalsCount,
					HiredFreelancers = job.HiredFreelancers.Select(x=> x.Id).ToList()
			    };

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