using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobPortal.Dto;
using JobPortal.Models;
using JobPortal.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace JobPortal.Controllers
{
	/// <summary>
	/// TODO: Finish this methods (signature will be change)
	/// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
	{
		private readonly UserManager<BaseUser> _userManager;
		private readonly IGenericRepository<Country> _countryRepository;

		public UserController(UserManager<BaseUser> userManager, IGenericRepository<Country> countryRepository)
		{
			_userManager = userManager;
			_countryRepository = countryRepository;
		}

		[HttpPost]
		[Route("checkUserEmail")]
		public async Task<IActionResult> IsUserWithEmailExist(string email)
	    {
		    var existUserWithEmail = await _userManager.FindByEmailAsync(email);
		    return Ok(existUserWithEmail == null);

	    }

		//[HttpPost]
		//[Route("login")]
		//public async IActionResult Login(string email, string password)
		//{
		//	var 
		//}

	    [HttpPost]
		[Route("Register")]
	    public async Task<IActionResult> Register(RegisterDataModel model)
	    {
		    switch (model.TypeOfUser.ToLower())
		    {
				case "freelancer":
					return await RegisterFreelancer(model);
				case "company":
					return await RegisterCompany(model);
				default:
					return BadRequest("Invalid user type. Must be freelancer or company");
		    }

		}

	    private async Task<IActionResult> RegisterFreelancer(RegisterDataModel model)
	    {
		    Country country = null;//await _countryRepository.FindById(Guid.Parse(model.CountryId));
		    var user = new BaseUser
		    {
			    Email = model.Email,
			    UserName = model.Email,
			    Country = country,
			    EmailConfirmed = false,
			    Freelancer = new Freelancer
			    {

				    UserRates = "150ph"
			    }
		    };
		    var result = await _userManager.CreateAsync(user,model.Password);
		    if (result.Succeeded)
		    {
			    await _userManager.AddToRoleAsync(user, "freelancer");
		    }
		    return Ok(result);
	    }

	    private async Task<IActionResult> RegisterCompany(RegisterDataModel model)
	    {
			var country = await _countryRepository.FindById(Guid.Parse(model.CountryId));
			var user = new BaseUser
			{
				Email = model.Email,
				UserName = model.Email,
				Country = country,
				EmailConfirmed = false,
				Company = new Company
				{
					CompanyName = model.DepartmentName,
					CompanySize = Enum.Parse<CompanySize>("Small")
				}
			};
			var result = await _userManager.CreateAsync(user, model.Password);
			if (result.Succeeded)
			{
				await _userManager.AddToRoleAsync(user, "company");
			}
			return Ok(user);

	    }
	}
}