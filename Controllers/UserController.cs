using System;
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

		public UserController(UserManager<User> userManager, IGenericRepository<Country> countryRepository, RoleManager<IdentityRole<Guid>> roleManager, IGenericRepository<Freelancer> freelancerRepository, IGenericRepository<Company> companyRepository)
		{
			_userManager = userManager;
			_countryRepository = countryRepository;
			_roleManager = roleManager;
			_freelancerRepository = freelancerRepository;
			_companyRepository = companyRepository;
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
			var claims = HttpContext.User.Claims.FirstOrDefault(x => x.Type == ClaimsIdentity.DefaultRoleClaimType)?.Value;
			return Ok(claims);
		}

		public class LoginDto
		{
			public string UserName { get; set; }
			public string Password { get; set; }
	
		}


		[HttpPost]
		[Route("token")]
		public async Task<IActionResult> Token([FromBody]  LoginDto loginData)
		{
			var user = await _userManager.FindByEmailAsync(loginData.UserName);
			if (!(await _userManager.CheckPasswordAsync(user, loginData.Password)))
				return BadRequest("Invalid password or username");

			var roles = string.Join(';',await _userManager.GetRolesAsync(user));

			var claims = new List<Claim>
			{
				new Claim(ClaimsIdentity.DefaultNameClaimType, user.Email),
				new Claim(ClaimsIdentity.DefaultRoleClaimType,roles)
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
				signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));
			var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

			var response = new
			{
				access_token = encodedJwt,
				username = user.Email
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
		    Country country = null;//await _countryRepository.FindById(Guid.Parse(model.CountryId));
		    var user = new User
		    {
			    Email = model.Email,
			    UserName = model.Email,
			    Country = country,
			    EmailConfirmed = false,
			    Freelancer = new Freelancer { Rates = "150ph" }

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
			var user = new User
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

		public class  AwardDTO
		{
			public string id { get; set; }
			public string title { get; set; }
			public DateTime date { get; set; }
			public string img { get; set; } 
			public string[] files { get; set; } 
 	}
		public class ProjectDTO
		{
			public string id { get; set; }
			public string title { get; set; }
			public  string url { get; set; }
			public string img { get; set; }
			public string[] files { get; set; }
		}


		public class UserDto
		{
			public string userId { get; set; }
			public string userPhoto { get; set; }
			public string userPhotoFile { get; set; }
			//userBunnerFile?: File;

			public string firstName { get; set; }
			public string lastName { get; set; }
			public string email { get; set; }
			public string gender { get; set; }
			public DateTime joinDate { get; set; }
			public string countryId { get; set; }
			public string address { get; set; }
			public string longitude { get; set; }
			public string latitude { get; set; }
			public int numberOfEmployees { get; set; }
			public string department { get; set; }
			public string description { get; set; }
			public string title { get; set; }
			public AwardDTO[] awards { get; set; }
			public ProjectDTO[] projects { get; set; }

			public bool publicProfile { get; set; }
			public bool sharePhoto { get; set; }
			public bool showFeedback { get; set; }
			public bool profileSearchible { get; set; }
			public bool disableAccount {get;set;}
             public bool disableTemporarily { get; set; }
			
			public string languageId { get; set; }
			public string currencyId { get; set; }
			public bool  sendWeeklyAlerts { get; set; }
			public bool sendBonusAlerts { get; set; }
			public bool forwardMessages { get; set; }
			public bool shareSecurityAlerts { get; set; }
  
			public string detailPageDesign { get; set; }
			public string newPassowrd { get; set; }
			public int amountOngoingProjects { get; set; }
			public int amountCompletedProjects { get; set; }
			public int  amountCancelledProjects { get; set; }
			savedFreelancers?: string[];
  savedJobs?: string[];
  savedCompanies?: string[];
		userRates: string;
  feedbacksCount: number;
  userFeedbacks: userFeedback[];
  hourRates: string;
  //   @valentine20658;

  servedHours: string;
  userSkills?: UserSkill[];
  userType: UserType;
  englishLevel: EnglishLevel;
  Languages: Language[];
  plusMember: boolean;
  remark?: string;
  projects?: Project[];
  craftedProjects?: CraftedProject[];
  experience?: UserExperience[];
  education?: Education[];
  tagList?: string[];
  globalCategory?: GlobalCategoryData;
  userCompany?: { companyName: string; companyImg: string
	};

}
}