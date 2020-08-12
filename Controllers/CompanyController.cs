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

	    [HttpPost, Route("companyList")]
	    public async Task<IActionResult> GetCompanyList([FromBody] CompanyListRequestDto request)
	    {
		    try
		    {
				var companies = _companyRepository.Get(x=> (request.Country.IsNullOrEmpty() || x.User.Country.CountryName == request.Country) && 
				                                           (request.SearchString.IsNullOrEmpty() || x.CompanyName.Contains(request.SearchString)));
				return Ok(companies.Select(x => new
				{
					CompanyId = x.CompanyId,
					x.CompanyName,
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
			    Console.WriteLine(e);
			    throw;
		    }
	    }
    }
}