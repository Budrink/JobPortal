﻿using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
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
    public partial class FreelancerController : ControllerBase
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
		private readonly IMapper _mapper;
		private readonly IGenericRepository<Job> _jobRepository;
		private readonly IGenericRepository<Feedback> _feedbackRepository;
	
		public FreelancerController(IGenericRepository<Freelancer> freelancerRepository, IGenericRepository<JobProposal> proposalRepository, IGenericRepository<Contract> contractRepository, UserManager<User> userManager, IGenericRepository<User> userRepository, IGenericRepository<Award> awardRepository,
			IGenericRepository<Project> projectRepository, IGenericRepository<UserSkill> userSkillRepository, IGenericRepository<UserLanguage> userLanguageRepository,
			IGenericRepository<UserExperience> userExperienceRepository, IGenericRepository<Education> educationRepository, IGenericRepository<HourRate> rateRepository,
			IGenericRepository<Language> languageRepository, IMapper mapper, IGenericRepository<Job> jobRepository, IGenericRepository<Feedback> feedbackRepository)
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
			_mapper = mapper;
			_jobRepository = jobRepository;
			_feedbackRepository = feedbackRepository;
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

	    [HttpPost, Route("feedbacks")]
		public async Task<IActionResult> GetFeedbackList( [FromBody] QueryFeedbackDto query )
		{
			try
			{
				var user = await _userManager.FindByIdAsync(query.FreelancerId);
				IEnumerable<Object> feedbackList;
				if (query.PageNumber > 0)
				{
					 feedbackList = user.Freelancer.Feedbacks.Select(x=> new
					 {
						 FeedbackId = x.FeedbackId,
						 FreelancerId = x.Freelancer.User.Id,
						 Contract = new
						 {
							 Status = x.Contract.Status,
							 BeginDate = x.Contract.BeginDate.ToString("MMM d, yyyy", CultureInfo.CreateSpecificCulture("en-US")),
							 EndDate = x.Contract.EndDate.Value.ToString("MMM d, yyyy", CultureInfo.CreateSpecificCulture("en-US")),
							 Job = new {
								 Qualification = x.Contract.Job.CompetenceLevel,
								 Title = x.Contract.Job.Title,
								 Company = new {
									 CompanyImgPng = x.Contract.Job.Company.CompanyImgPng,
									 CompanyName = x.Contract.Job.Company.CompanyName,
									 CompanyId = x.Contract.Job.Company.CompanyId,
									 Country = new
									 {
										 CountryFlag = x.Contract.Job.Company.User.Country.CountryFlag,
										 CountryName = x.Contract.Job.Company.User.Country.CountryName,
									 }
								 }
							 }

						 },
						 Text = x.Text,
						 Mark = x.Mark
					 }).Skip((query.PageNumber - 1) * query.AmountItemsOnPage)
					  .Take(query.AmountItemsOnPage).ToList();
				}
				else
				{
					feedbackList = user.Freelancer.Feedbacks.Select(x => new
					{
						FeedbackId = x.FeedbackId,
						FreelancerId = x.Freelancer.User.Id,
						Contract = new
						{
							Status = x.Contract.Status,
							BeginDate = x.Contract.BeginDate,
							EndDate = x.Contract.EndDate,
							Job = new
							{
								Qualification = x.Contract.Job.CompetenceLevel,
								Title = x.Contract.Job.Title,
								Company = new
								{
									//CompanyImagePng = x.Contract.Job.Company.
									CompanyName = x.Contract.Job.Company.CompanyName,
									CompanyId = x.Contract.Job.Company.CompanyId,
									Country= new
									{
										CountryFlag=x.Contract.Job.Company.User.Country.CountryFlag,
										CountryName= x.Contract.Job.Company.User.Country.CountryName,
									}
								}
							}

						},
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
		
	
		[HttpPost, Route("craftedProjects ")]
		public async Task<IActionResult> GetcradtedProjects([FromBody] QueryFeedbackDto query)
		{
			try
			{
				var user = await _userManager.FindByIdAsync(query.FreelancerId);
				IEnumerable<CraftedProject> craftedProjectsList;
				if (query.PageNumber > 0)
				{
					craftedProjectsList = user.Freelancer.CraftedProjects.ToList().Skip((query.PageNumber - 1) * query.AmountItemsOnPage)
					 .Take(query.AmountItemsOnPage).ToList();
				}
				else
				{
					craftedProjectsList = user.Freelancer.CraftedProjects.ToList();
			
				}

				return Ok(new
				{
					craftedProjectList = craftedProjectsList,
					totalFeedbackAmount = craftedProjectsList.Count()
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
				User user = null;
				if (!HttpContext.User.Identity.Name.IsNullOrEmpty())
					user = await _userManager.FindByNameAsync(HttpContext.User.Identity.Name);

				var userList = new List<Freelancer>();
				foreach (var id in request.FreelancerIds)
				{
					var freelancerUser = await _userManager.FindByIdAsync(id);
					if (freelancerUser!=null)
						userList.Add(freelancerUser.Freelancer);
				}

				var result = userList.Select(x => new
				{
					Saved = user != null && user.SavedItems.Any(s => s.SavedItemType == SavedItemType.Freelancer && s.SavedItemId == x.UserId),
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
			    User user = null;
				if (!HttpContext.User.Identity.Name.IsNullOrEmpty())
					user = await _userManager.FindByNameAsync(HttpContext.User.Identity.Name);

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
						Saved = user != null && user.SavedItems.Any(s=> s.SavedItemType == SavedItemType.Freelancer && s.SavedItemId == x.UserId),
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

	    [HttpGet, Route("{userId}/accountsettings")]
	    public async Task<IActionResult> GetAccountSettings([FromRoute] string userId)
	    {
		    try
		    {
			    var user = await _userManager.FindByIdAsync(userId);

			    if (user == null) return NotFound($"User not found with id {userId}");

			    var accountSettings = _mapper.Map<AccountSettingsDto>(user.Freelancer);

			    var result = new
			    {
				    UserId = user.Id,
				    accountSettings
			    };
			    return Ok(result);

		    }
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
	    }


	    [HttpPost, Route("{freelancerId}/feedback"), Authorize(Roles = "company")]
	    public async Task<IActionResult> PostJobFeedback([FromRoute] string freelancerId, [FromBody] FreelancerFeedbackDto request)
	    {
		    try
		    {
			    var user = await _userManager.FindByNameAsync(HttpContext.User.Identity.Name);
			    var freelancer = await _userManager.FindByIdAsync(freelancerId);
			    var job = await _jobRepository.FindById(Guid.Parse(request.ProjectId));
			    if (job.Company.UserId != user.Id) return BadRequest("Project is not affiliate with your company");

			    var contract = user.Freelancer.Contracts.First(x => x.Job.JobId == job.JobId);

			    var feedback = new Feedback
			    {
				    Freelancer = user.Freelancer,
				    Contract = contract,
				    Mark = request.Rating,
				    Text = request.Text
			    };
			    await _feedbackRepository.Create(feedback);
			    await _feedbackRepository.SaveChanges();
			    return Ok(true);
		    }
		    catch (Exception e)
		    {
			    return BadRequest(e.Message);
		    }
	    }


		[HttpPost]
		[Route("{userId}/accountsettings")]
		public async Task<IActionResult> AccountSettings([FromRoute] string userId, [FromBody] AccountSettingsDto request)
		{
			try
			{
				var user = await _userManager.FindByIdAsync(userId);
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