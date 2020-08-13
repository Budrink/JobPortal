﻿using System;
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

	    public CompanyController(IGenericRepository<Company> companyRepository, UserManager<User> userManager)
	    {
		    _companyRepository = companyRepository;
		    _userManager = userManager;
	    }


	    [HttpGet, Route("{companyId}")]
	    public async Task<IActionResult> GetCompany([FromRoute] string companyId)
	    {
		    try
		    {
			    var user = await _userManager.FindByIdAsync(companyId);
			    return Ok(new
			    {
				    CompanyId = user.Company.CompanyId,
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
			    Console.WriteLine(e);
			    throw;
		    }
	    }

	    [HttpPost, Route("{companyId}/ongoingJobs")]
	    public async Task<IActionResult> GetOngoingJobList([FromRoute] string companyId, [FromQuery] int pageNumber, [FromQuery] int amountItemsOnPage)
	    {
		    try
		    {
			    var user = await _userManager.FindByIdAsync(companyId);
			    var jobs = user.Company.Jobs.Where(x => x.JobStatus == JobStatus.Open).ToList();
			    var count = jobs.Count;
			    var result = jobs.Select(x => new
			    {
				    JobDetails = x.JobDetails,
				    Company = new
				    {
					    CompanyId = x.Company.CompanyId,
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
					    Id = s.Id,
					    Name = s.Name
				    }).ToList(),
				    Saved = false,
				}).Skip((pageNumber - 1) * amountItemsOnPage).Take(amountItemsOnPage);
			    return Ok(new
			    {
					TotalAmount = count,
					pageNumber,
					amountItemsOnPage,
					Jobs = result
			    });
			}
		    catch (Exception e)
		    {
			    Console.WriteLine(e);
			    throw;
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
							CompanyId = x.CompanyId,
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