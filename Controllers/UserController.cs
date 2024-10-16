﻿using System;
using System.Collections.Generic;
using System.Diagnostics.Eventing.Reader;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using JobPortal.Dto;
using JobPortal.Models;
using JobPortal.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
using Microsoft.IdentityModel.Tokens;

namespace JobPortal.Controllers
{

	/// <summary>
	/// TODO: Finish this methods (signature will be change)
	/// </summary>
	[Route("api/[controller]")]
	[ApiController]
	public class UserController : ControllerBase
	{
		private readonly UserManager<User> _userManager;
		private readonly RoleManager<IdentityRole<Guid>> _roleManager;
		private readonly IGenericRepository<Country> _countryRepository;
		private readonly IGenericRepository<Freelancer> _freelancerRepository;
		private readonly IGenericRepository<Company> _companyRepository;
		private readonly IGenericRepository<Complain> _complainRepository;
		private readonly IGenericRepository<ComplainReason> _complainReasonRepository;

		public UserController(UserManager<User> userManager, IGenericRepository<Country> countryRepository,
			RoleManager<IdentityRole<Guid>> roleManager, IGenericRepository<Freelancer> freelancerRepository,
			IGenericRepository<Company> companyRepository, IGenericRepository<Complain> complainRepository, IGenericRepository<ComplainReason> complainReasonRepository)
		{
			_userManager = userManager;
			_countryRepository = countryRepository;
			_roleManager = roleManager;
			_freelancerRepository = freelancerRepository;
			_companyRepository = companyRepository;
			_complainRepository = complainRepository;
			_complainReasonRepository = complainReasonRepository;
		}

		[HttpGet]
		[Route("test")]
		public async Task<IActionResult> InitRoles()
		{
			var roleFreelancer = new IdentityRole<Guid>("freelancer");
			var roleCompany = new IdentityRole<Guid>("company");
			await _roleManager.CreateAsync(roleFreelancer);
			await _roleManager.CreateAsync(roleCompany);
			return Ok();
		}


		[HttpGet]
		[Authorize]
		[Route("getroles")]
		public async Task<IActionResult> GetRoles()
		{
			var claims = HttpContext.User.Claims.FirstOrDefault(x => x.Type == ClaimsIdentity.DefaultRoleClaimType)
				?.Value;
			return Ok(claims);
		}

		public class LoginDto
		{
			public string UserName { get; set; }
			public string Password { get; set; }

		}


		[HttpPost]
		[Route("token")]
		public async Task<IActionResult> Token([FromBody] LoginDto loginData)
		{
			var user = await _userManager.FindByEmailAsync(loginData.UserName);
			if (!(await _userManager.CheckPasswordAsync(user, loginData.Password)))
				return BadRequest("Invalid password or username");

			var roles = string.Join(';', await _userManager.GetRolesAsync(user));

			var claims = new List<Claim>
			{
				new Claim(ClaimsIdentity.DefaultNameClaimType, user.Email),
				new Claim(ClaimsIdentity.DefaultRoleClaimType, roles)
			};
			ClaimsIdentity claimsIdentity =
				new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType,
					ClaimsIdentity.DefaultRoleClaimType);

			var now = DateTime.UtcNow;
			// создаем JWT-токен
			var jwt = new JwtSecurityToken(
				issuer: AuthOptions.Issuer,
				audience: AuthOptions.Audience,
				notBefore: now,
				claims: claims,
				expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LifeTime)),
				signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(),
					SecurityAlgorithms.HmacSha256));
			var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);



			var response = new
			{
				access_token = encodedJwt,
				FirstName = user.FirstName,
				LastName = user.LastName,
				Login = user.Email,
				Photo = user.UserPhoto,
				Roles = roles,
				CompanyName = user.Company?.CompanyName,
				FreelancerCompanyName = user.Freelancer?.CompanyName,
				Id = user.Id
			};

			return Ok(response);

		}

		[HttpGet]
		[Route("checkUserEmail")]
		public async Task<IActionResult> IsUserWithEmailExist(string email)
		{
			var existUserWithEmail = await _userManager.FindByEmailAsync(email);
			return Ok(existUserWithEmail != null);

		}

		[HttpPost, Route("saveditems")]
		public async Task<IActionResult> GetSavedItems([FromBody] UserSavedItemRequestModel request)
		{
			try
			{
				var user = await _userManager.FindByIdAsync(request.UserId);
				var savedItems = user.SavedItems.Where(x=> x.SavedItemType == request.SavedItemType).ToList();
				var totalCount = savedItems.Count;
				var result = savedItems
					.Skip((request.PageNumber - 1) * request.AmountOfItemsOnPage).Take(request.AmountOfItemsOnPage)
					.Select(x => new
					{
						SavedItemId = x.SavedItemId,
						User = user,
						SavedItemType = request.SavedItemType
					});
				return Ok(new
				{
					request.PageNumber,
					request.AmountOfItemsOnPage,
					totalCount,
					SavedItems = result
				});
			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
		}


		//[HttpPost]
		//[Route("login")]
		//public async IActionResult Login(string email, string password)
		//{
		//	var 
		//}

		[HttpPost]
		[Route("Register")]
		public async Task<IActionResult> Register([FromBody] RegisterDataModel model)
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
			Country country = await _countryRepository.FindById(Guid.Parse(model.CountryId));
			var user = new User
			{
				Email = model.Email,
				UserName = model.Email,
				Country = country,
				EmailConfirmed = false,
				Gender = model.Gender,
				FirstName = model.FirstName,
				LastName = model.LastName,
				Freelancer = new Freelancer { HourRates = 150, Rates=4.6M }

			};

			var result = await _userManager.CreateAsync(user, model.Password);
			if (result.Succeeded)
			{
				await _userManager.AddToRoleAsync(user, "freelancer");
			}

			return Ok(result);
		}

		private async Task<IActionResult> RegisterCompany(RegisterDataModel model)
		{
			var country = await _countryRepository.FindById(Guid.Parse(model.CountryId));
			var user = new User
			{
				
				Email = model.Email,
				UserName = model.Email,
				Country = country,
				Gender = model.Gender,
				FirstName = model.FirstName,
				LastName = model.LastName,
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

		[HttpPost, Route("complain/{userId}"),Authorize]
		public async Task<IActionResult> SendComplain([FromBody] ComplainRequestDto request)
		{
			try
			{
				var user = await _userManager.FindByNameAsync(HttpContext.User.Identity.Name);
				var sender = await _userManager.FindByIdAsync(request.UserId);
				var reason = await _complainReasonRepository.FindById(Guid.Parse(request.Reason));
				var complain = new Complain
				{
					Reason = reason,
					Sender = sender,
					Text = request.Text,
					User = user
				};
				await _complainRepository.Create(complain);
				await _complainRepository.SaveChanges();
				return Ok(true);
			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
		}

		[HttpDelete, Route("delete")]
		[Authorize]
		public async Task<IActionResult> DeleteAccount([FromBody] DeleteAccountDto request)
		{
			try
			{
				var user = await _userManager.FindByNameAsync(HttpContext.User.Identity.Name);
				var confirm = await _userManager.CheckPasswordAsync(user, request.Password);
				if (confirm && request.TermsCondition)
				{
					await _userManager.DeleteAsync(user);
					return Ok(true);
				}

				return Unauthorized("Wrong password, or terms of condition declined");
			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
		}

	}
}