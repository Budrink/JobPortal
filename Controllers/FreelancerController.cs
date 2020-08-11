using System;
using System.Collections.Generic;
using System.Collections.Immutable;
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
	[Route("api/[controller]")]
    [ApiController]
    public class FreelancerController : ControllerBase
    {
	    private readonly IGenericRepository<Freelancer> _freelancerRepository;
	    private readonly IGenericRepository<JobProposal> _proposalRepository;
	    private readonly IGenericRepository<Contract> _contractRepository;
	    private readonly UserManager<User> _userManager;
	    private readonly IGenericRepository<User> _userRepository;
		private readonly IGenericRepository<Award> _awardRepository;
		private readonly IGenericRepository<Project> _projectRepository;
		private readonly IGenericRepository<UserSkill> _userSkillRepository;
		private readonly IGenericRepository<UserLanguage> _userLanguageRepository;
		private readonly IGenericRepository<UserExperience> _userExperienceRepository;
		private readonly IGenericRepository<Education> _educationRepository;
		private readonly IGenericRepository<HourRate> _rateRepository;
		private readonly IGenericRepository<Language> _languageRepository;
		public FreelancerController(IGenericRepository<Freelancer> freelancerRepository, IGenericRepository<JobProposal> proposalRepository, IGenericRepository<Contract> contractRepository, UserManager<User> userManager, IGenericRepository<User> userRepository, IGenericRepository<Award> awardRepository,
			IGenericRepository<Project> projectRepository, IGenericRepository<UserSkill> userSkillRepository, IGenericRepository<UserLanguage> userLanguageRepository,
			IGenericRepository<UserExperience> userExperienceRepository, IGenericRepository<Education> educationRepository, IGenericRepository<HourRate> rateRepository,
			IGenericRepository<Language> languageRepository)
	    {
		    _freelancerRepository = freelancerRepository;
		    _proposalRepository = proposalRepository;
		    _contractRepository = contractRepository;
		    _userManager = userManager;
		    _userRepository = userRepository;
			_awardRepository = awardRepository;
			_projectRepository = projectRepository;
			_userSkillRepository = userSkillRepository;
			_userLanguageRepository = userLanguageRepository;
			_userExperienceRepository = userExperienceRepository;
			_educationRepository = educationRepository;
			_rateRepository = rateRepository;
			_languageRepository = languageRepository;

		}

	    [HttpGet]
	    [Route("proposalList")]
		[Authorize(Roles = "freelancer")]
	    public async Task<IActionResult> GetProposalList()
	    {
		    var userMail = HttpContext.User.Identity.Name;

		    var user =(await _userManager.FindByEmailAsync(userMail));
		    //var user = _userRepository.Get(x=> x.Id == userId).FirstOrDefault();


		    var freelancer = user.Freelancer;
		    var proposals = user.Freelancer.JobProposals.ToList();
		    return Ok(proposals);
	    }

	    [HttpGet, Route("{freelancerId}")]
	    public async Task<IActionResult> GetFreelancer([FromRoute] string freelancerId)
	    {
		    try
		    {
			    var user = await _userManager.FindByIdAsync(freelancerId);
			    var result = new
			    {
				    UserId = user.Id,
					userPhoto= user.UserPhoto?.FileLink,
				    UserPhotoFile = new
				    {
					    Id = user.UserPhoto?.Id,
					    Name = user.UserPhoto?.FileName,
					    Link = user.UserPhoto?.FileLink,
					    Size = user.UserPhoto?.FileSize
				    },
				    FirstName = user.FirstName,
				    LastName = user.LastName,
				    Email = user.Email,
				    Gender = user.Gender,
				    UserName = user.UserName,
				    UserRates = user.Freelancer.Rates,
				    FeedbackCount = user.Freelancer.Feedbacks.Count(),
					//FeedbackList = user.Freelancer.Feedbacks.ToList(),
					JoinDate = user.JoinDate,
				    Title = user.Freelancer.Title,
				    HourRates = user.Freelancer.HourRates,
					EnglishLevel=user.Freelancer.EnglishLevel,
				    Country = user.Country,
				    Description = user.Freelancer.Description,
				    AmountOngoingProjects =
					    user.Freelancer.JobProposals.Count(x => x.ProposalStatus == ProposalStatus.Accepted),
				    AmountOfCancelledProjects =
					    user.Freelancer.JobProposals.Count(x => x.ProposalStatus == ProposalStatus.Cancelled),
				    AmountOfCompletedProject =
					    user.Freelancer.JobProposals.Count(x => x.ProposalStatus == ProposalStatus.Finished),
				    UserSkills = user.Freelancer.UserSkills.ToList(),
				    Experience = user.Freelancer.Experience.ToList(),
					Projects = user.Freelancer.Projects.ToList(),
					Education = user.Freelancer.Education.ToList(),
					Awards = user.Freelancer.Awards.ToList(),
					Languages=user.Freelancer.Languages.ToList(),
					PlusMember=user.Freelancer.PlusMember,
					Remark = user.Freelancer.Remark,
					CraftedProjects=user.Freelancer.CraftedProjects.ToList(),




				};
			    return Ok(result);
		    }
		    catch (Exception e)
		    {
			    return BadRequest(e.Message);
		    }
	    }

		public class queryFeedbackDTO
		{
			public string freelancerId { get; set; }
			public int pageNumber { get; set; }
			public int amountItemsOnPage { get; set; }
		}
		[HttpPost, Route("feedbacks")]
		public async Task<IActionResult> GetFeedbackList( [FromBody] queryFeedbackDTO query )
		{
			try
			{
				var user = await _userManager.FindByIdAsync(query.freelancerId);
				IEnumerable<FeedbackResponseModel> feedbackList;
				if (query.pageNumber > 0)
				{
					 feedbackList = user.Freelancer.Feedbacks.Select(x=> new FeedbackResponseModel
					 {
						 FeedbackId = x.FeedbackId,
						 FreelancerId = x.Freelancer.User.Id,
						 Contract = x.Contract,
						 Text = x.Text,
						 Mark = x.Mark
					 }).Skip((query.pageNumber - 1) * query.amountItemsOnPage)
					  .Take(query.amountItemsOnPage).ToList();
				}
				else
				{
					feedbackList = user.Freelancer.Feedbacks.Select(x => new FeedbackResponseModel
					{
						FeedbackId = x.FeedbackId,
						FreelancerId = x.Freelancer.User.Id,
						Contract = x.Contract,
						Text = x.Text,
						Mark = x.Mark
					}).ToList();
				}

				return Ok(new {
					userFeedbacks = feedbackList,
					totalFeedbackAmount = feedbackList.Count()
				});
			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
		}

		[HttpPost, Route("byIds")]
		public async Task<IActionResult> FreelancerListByIds([FromBody] FreelancerListByIdsRequestModel request)
		{
			try
			{
				var userList = new List<Freelancer>();
				foreach (var id in request.FreelancerIds)
				{
					var user = await _userManager.FindByIdAsync(id);
					if (user!=null)
						userList.Add(user.Freelancer);
				}

				var result = userList.Select(x => new
				{
					Saved = false,
					UserId = x.User.Id,
					UserPhoto = x.User.UserPhoto?.FileLink,
					FirstName = x.User.FirstName,
					LastName = x.User.LastName,
					Email = x.User.Email,
					Gender = x.User.Gender,
					UserName = x.User.UserName,
					UserRates = x.Rates,
					PlusMember = true,
					FeedBacksCount = x.Feedbacks.Count(),
					JoinDate = x.User.JoinDate,
					Title = x.Title,
					HourRates = x.HourRates,
					Country = x.User.Country,
					Description = x.Description,
					AmountOngoingProjects = x.JobProposals.Count(y => y.ProposalStatus == ProposalStatus.Accepted),
					AmountCompletedProjects = x.JobProposals.Count(y => y.ProposalStatus == ProposalStatus.Finished),
					AmountCancelledProject = x.JobProposals.Count(y => y.ProposalStatus == ProposalStatus.Cancelled),
					ServedHours = x.ServedHours,
					UserSkills = x.UserSkills.ToList(),
					UserType = x.FreelancerType,
					EnglishLevel = x.EnglishLevel,
					Languages = x.Languages.ToList()
				}).ToList();
				return Ok(result);
			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
		}


	    [HttpPost, Route("")]
	    public async Task<IActionResult> FreelancerList([FromBody] FreelancerListRequestModel request)
	    {
		    try
		    {
			    var rateFilter = request.RateFilter.IsNullOrEmpty()? null : _rateRepository.Get(x => request.RateFilter.Contains(x.HourRateId.ToString()))
				    .ToList();


			    var freelancerList = await _freelancerRepository.Get(x =>
					(request.GlobalCategoryFilter.IsNullOrEmpty() || x.GlobalCategories.Any(y => y.GlobalCategoryName == request.GlobalCategoryFilter)) &&
					(request.LocationFilter.IsNullOrEmpty() ||
					 request.LocationFilter.Contains(x.User.Country.CountryName)) &&
					(request.LangFilter.IsNullOrEmpty() || x.Languages.Any(l => request.LangFilter.Contains(l.Name))) &&
					   (request.TypeFilter.IsNullOrEmpty() || request.TypeFilter
						 .Contains(x.FreelancerType.UserTypeName)) &&
					   (request.CategoryFilter.IsNullOrEmpty() || x.UserSkills.Any(s => request.CategoryFilter.Contains(s.Skill.Name))) &&
					(request.LevelFilter.IsNullOrEmpty() || request.LevelFilter
						 .Contains(x.EnglishLevel.EnglishLevelName)) &&
					(rateFilter.IsNullOrEmpty() || rateFilter.Any(r => r.MinRate <= x.HourRates && x.HourRates <= r.MaxRate))
			    ).ToListAsync();
			    if (!request.StringFilter.IsNullOrEmpty())
				    freelancerList = freelancerList.Where(x => $"{x.User.FirstName} {x.User.LastName}".Contains(request.StringFilter)).ToList();
			
				var freelancers= freelancerList.Skip((request.PageNumber - 1) * request.AmountOfItemsOnPage).Take(request.AmountOfItemsOnPage)
					.Select(x => new
					{
						Saved = false,
						UserId = x.User.Id,
						UserPhoto = x.User.UserPhoto?.FileLink,
						FirstName = x.User.FirstName,
						LastName = x.User.LastName,
						Email = x.User.Email,
						Gender = x.User.Gender,
						UserName = x.User.UserName,
						UserRates = x.Rates,
						PlusMember = true,
						FeedBacksCount = x.Feedbacks.Count(),
						JoinDate = x.User.JoinDate,
						Title = x.Title,
						HourRates = x.HourRates,
						Country = x.User.Country,
						Description = x.Description,
						AmountOngoingProjects = x.JobProposals.Count(y => y.ProposalStatus == ProposalStatus.Accepted),
						AmountCompletedProjects = x.JobProposals.Count(y => y.ProposalStatus == ProposalStatus.Finished),
						AmountCancelledProject = x.JobProposals.Count(y => y.ProposalStatus == ProposalStatus.Cancelled),
						ServedHours = x.ServedHours,
						UserSkills = x.UserSkills.ToList(),
						UserType = x.FreelancerType,
						EnglishLevel = x.EnglishLevel,
						Languages = x.Languages.ToList()
					}).ToList();
				var count = freelancerList.Count();
				var result = new
					{
						totalAmountOfFreelancers = count,
						PageNumber = request.PageNumber,
						AmountOfItemsOnPage = request.AmountOfItemsOnPage,
						freelancers = freelancers,
				};
				return Ok(result);
				

			}
		    catch (Exception e)
		    {
				return BadRequest(e.Message);
			}
	    }


		[HttpPost]
		[Route("accountsettings")]
		public async Task<IActionResult> AccountSettings([FromBody] AccountSettingsDto request)
		{
			try
			{
				var user = await _userManager.FindByIdAsync(request.UserId);
				var freelancer = user.Freelancer;
	
				freelancer.PublicProfile = request.publicProfile;
				freelancer.SharePhoto = request.SharePhoto;
				freelancer.ShowFeedback = request.ShowFeedback;
				freelancer.ProfileSearchible = request.ProfileSearchible;
				freelancer.DisableAccount = request.DisableAccount;
				freelancer.DisableTemporarily = request.DisableTemporarily;
				freelancer.Languages = _languageRepository.Get(language=> request.Languages.Contains(language.LanguageId.ToString()));
				freelancer.CurrencyId = request.CurrencyId;
				freelancer.SendWeeklyAlerts = request.SendWeeklyAlerts;
				freelancer.SendBonusAlerts = request.SendBonusAlerts;
				freelancer.ForwardMessages = request.ForwardMessages;
				freelancer.ShareSecurityAlerts = request.ShareSecurityAlerts;

				freelancer.DetailPageDesign = request.DetailPageDesign;
				freelancer.NewPassowrd = request.NewPassowrd;
			
				await _freelancerRepository.SaveChanges();
				return Ok(freelancer);
			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
		}
	
		[HttpPost]
		[Route("changefreelancer")]
		public async Task<IActionResult> ChangeUser([FromBody] FreelancerDTO request)
		{
			try
			{
				var user = await _userManager.FindByIdAsync(request.UserId);
				var freelancer = user.Freelancer;
			
				//user.UserPhoto.FileLink = request.UserPhoto;
				user.FirstName = request.FirstName;
				user.LastName = request.LastName;
				freelancer.Address = request.Address;
				freelancer.Longitude = request.Longitude;
				freelancer.Latitude = request.Latitude;
				freelancer.NumberOfEmployees = request.NumberOfEmployees;
				freelancer.Department = request.Department;
				freelancer.Description = request.Description;
				freelancer.Title = request.Title;
				_awardRepository.RemoveRange(freelancer.Awards);
				freelancer.Awards = request.Awards;
				_projectRepository.RemoveRange(freelancer.Projects);
				freelancer.Projects = request.Projects;
		    	freelancer.HourRates = request.HourRates;
				freelancer.ServedHours = request.ServedHours;

				_userSkillRepository.RemoveRange(freelancer.UserSkills);
				freelancer.UserSkills = request.UserSkills;
				freelancer.EnglishLevel = request.EnglishLevel;

			//	_userLanguageRepository.RemoveRange(freelancer.Languages);
				freelancer.Languages = request.Languages;
				freelancer.Remark = request.Remark;
				_userExperienceRepository.RemoveRange(freelancer.Experience);
				freelancer.Experience = request.Experience;
				_educationRepository.RemoveRange(freelancer.Education);
				freelancer.Education = request.Education;
				freelancer.CompanyName = request.UserCompany.Name;
				freelancer.CompanyImage = request.UserCompany.Image;
					
				await _freelancerRepository.SaveChanges();
				return Ok(freelancer);
			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
		}
	}
}