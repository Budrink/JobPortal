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

	    [HttpPost, Route("list")]
	    public async Task<IActionResult> GetCompanyList([FromBody] CompanyListRequestDto request)
	    {
		    try
		    {
				var companies = await _companyRepository.Get(x=> (request.Country.IsNullOrEmpty() || x.User.Country.CountryName == request.Country) && 
				                                           (request.SearchString.IsNullOrEmpty() || x.CompanyName.Contains(request.SearchString))).ToListAsync();
				return Ok(companies.Select(x => new
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
					VerifiedCompany = true,
					Saved = false
				}));
		    }
		    catch (Exception e)
		    {
			    return BadRequest(e.Message);
		    }
	    }
    }
}