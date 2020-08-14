using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Castle.Core.Internal;
using JobPortal.Dto;
using JobPortal.Models;
using JobPortal.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace JobPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
	    private readonly IGenericRepository<Company> _companyRepository;
	    private readonly UserManager<User> _userManager;
	    private readonly IGenericRepository<SavedItem> _savedRepository;

	    public CompanyController(IGenericRepository<Company> companyRepository, UserManager<User> userManager, IGenericRepository<SavedItem> savedRepository)
	    {
		    _companyRepository = companyRepository;
		    _userManager = userManager;
		    _savedRepository = savedRepository;
	    }


	    [HttpGet, Route("{companyId}")]
	    public async Task<IActionResult> GetCompany([FromRoute] string companyId)
	    {
		    try
		    {
			    var user = await _userManager.FindByIdAsync(companyId);
			    return Ok(new
			    {
				    CompanyId = user.Id,
				    CompanyName = user.Company.CompanyName,
				    CompanyImgJpg = user.Company.CompanyImgJpg,
				    CompanyImgPng = user.Company.CompanyImgPng,
				    CompanyCountry = new
				    {
					    CountryId = user.Country.CountryId,
					    CountryFlag = user.Country.CountryFlag,
					    CountryName = user.Country.CountryName
				    },
				    VerifiedCompany = true,
				    Saved = false,
				    Description = user.Company.Description
			    });
		    }
		    catch (Exception e)
		    {
			    return BadRequest(e.Message);
		    }
	    }

	    [HttpPost, Route("{companyId}/ongoingJobs")]
	    public async Task<IActionResult> GetOngoingJobsList([FromRoute] string companyId)
	    {
		    try
		    {
			    var user = await _userManager.FindByIdAsync(companyId);
			    var jobs = user.Company.Jobs.Where(x => x.JobStatus == JobStatus.Open).Select(x=> new
			    {
					JobId = x.JobId,
					Title = x.Title,
					Duration = x.Duration
			    }).ToList();
			    return Ok(jobs);
		    }
		    catch (Exception e)
		    {
			    Console.WriteLine(e);
			    throw;
		    }
	    }

	    [HttpPost, Route("{companyId}/ongoingJobsDetailed")]
	    public async Task<IActionResult> GetOngoingJobsListDetailed([FromRoute] string companyId, [FromQuery] int pageNumber, [FromQuery] int amountItemsOnPage)
	    {
		    try
		    {
			    return await OngoingJobsListDetailed(companyId, pageNumber, amountItemsOnPage, JobStatus.Open);
		    }
		    catch (Exception e)
		    {
				return BadRequest(e.Message);
		    }
		}

	    [HttpPost, Route("{companyId}/completedJobsDetailed")]
	    public async Task<IActionResult> GetComplitedJobsListDetailed([FromRoute] string companyId, [FromQuery] int pageNumber, [FromQuery] int amountItemsOnPage)
	    {
		    try
		    {
			    return await OngoingJobsListDetailed(companyId, pageNumber, amountItemsOnPage, JobStatus.Closed);
		    }
		    catch (Exception e)
		    {
			    return BadRequest(e.Message);
		    }
	    }

	    [HttpPost, Route("{companyId}/cancelledJobsDetailed")]
	    public async Task<IActionResult> GetCancelledJobsListDetailed([FromRoute] string companyId, [FromQuery] int pageNumber, [FromQuery] int amountItemsOnPage)
	    {
		    try
		    {
			    return await OngoingJobsListDetailed(companyId, pageNumber, amountItemsOnPage, JobStatus.Cancelled);
		    }
		    catch (Exception e)
		    {
			    return BadRequest(e.Message);
		    }
	    }


		private async Task<IActionResult> OngoingJobsListDetailed(string companyId, int pageNumber, int amountItemsOnPage, JobStatus status)
	    {
		    var user = await _userManager.FindByIdAsync(companyId);
		    var jobs = user.Company.Jobs.Where(x => x.JobStatus == status).ToList();
		    var jobsCancelledCount = user.Company.Jobs.Count(x => x.JobStatus == JobStatus.Cancelled);
		    var jobsFinishedCount = user.Company.Jobs.Count(x => x.JobStatus == JobStatus.Closed);
		    var jobsOngoingCount = user.Company.Jobs.Count(x => x.JobStatus = JobStatus.Open);
			var result = jobs.Select(x => new
		    {
			    JobDetails = x.JobDetails,
			    Company = new
			    {
				    CompanyId = x.Company.UserId,
				    CompanyName = x.Company.CompanyName,
				    VerifiedCompany = x.Company.VerifiedCompany,
				    Country = x.Country,
			    },
			    Title = x.Title,
			    JobStatus = x.JobStatus,
			    Type = x.JobType,
			    JobId = x.JobId,
			    Duration = x.Duration.DurationText,
			    Tax = x.Tax,
			    qualification = x.CompetenceLevel,
			    ProposalsCount = x.ProposalsCount,
			    SkillsRequired = x.SkillsRequired.Select(s => new
			    {
				    Id = s.Skill.Id,
				    Name = s.Skill.Name
			    }).ToList(),
			    Saved = false,
		    }).Skip((pageNumber - 1) * amountItemsOnPage).Take(amountItemsOnPage);
		    return Ok(new
		    {
			    AmountOngoing = jobsOngoingCount,
				AmountCancelled = jobsCancelledCount,
				AmountCompleted = jobsFinishedCount,
			    pageNumber,
			    amountItemsOnPage,
			    Jobs = result
		    });
	    }

	    [HttpPost, Route("{companyId}/followers")]
	    public async Task<IActionResult> GetFollowers([FromRoute] string companyId)
	    {
		    try
		    {
			    var user = await _userManager.FindByIdAsync(companyId);
			    var followers = await _savedRepository.Get(x =>
				    x.SavedItemType == SavedItemType.Company && x.SavedItemId == user.Id).Select(x=> x.User).ToListAsync();
			    return Ok(followers.Select(x => new
			    {
				    Id = x.Id,
				    UserName = x.NormalizedUserName,
					UserPhoto = x.UserPhoto?.FileLink
			    }));

		    }
		    catch (Exception e)
		    {
			    return BadRequest(e.Message);
		    }
	    }



		[HttpPost, Route("list")]
	    public async Task<IActionResult> GetCompanyList([FromBody] CompanyListRequestDto request)
	    {
		    try
		    {	var companies = await _companyRepository.Get(x=> (request.CountryFilter.IsNullOrEmpty() ||
					 request.CountryFilter.Contains(x.User.Country.CountryName))&& 
			 (request.SearchString.IsNullOrEmpty() || x.CompanyName.Contains(request.SearchString))
		&& (request.NumberOfEmployees.IsNullOrEmpty() || request.NumberOfEmployees.Contains(x.NumberOfEmployees.Text))).ToListAsync();
				var count = companies.Count;
				var result = new
				{
					TotalAmount = count,
					PageNumber = request.PageNumber,
					AmountOfItemsOnPage = request.AmountOfItemsOnPage,
					companies = companies.Select(x => new
						{
							CompanyId = x.UserId,
							x.CompanyName,
							x.CompanyImgJpg,
							x.CompanyImgPng,
							CompanyCountry = new
							{
								CountryId = x.User.Country.CountryId,
								CountryFlag = x.User.Country.CountryFlag,
								CountryName = x.User.Country.CountryName
							},
							VerifiedCompany = x.VerifiedCompany,
							Saved = false
						}).Skip((request.PageNumber - 1) * request.AmountOfItemsOnPage)
						.Take(request.AmountOfItemsOnPage).ToList()
				};
				return Ok(result);
		    }
		    catch (Exception e)
		    {
			    return BadRequest(e.Message);
		    }
	    }
    }
}