using Castle.Core.Internal;
using JobPortal.Dto;
using JobPortal.Models;
using JobPortal.Repository;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

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
		private readonly IGenericRepository<Feedback> _feedbackRepository;

		public JobController(IGenericRepository<Job> jobRepository, IGenericRepository<Freelancer> freelancerRepository, IGenericRepository<Company> companyRepository, IGenericRepository<Offer> offerRepository, UserManager<User> userManager)
		{
			_jobRepository = jobRepository;
			_userManager = userManager;
			_freelancerRepository = freelancerRepository;
			_companyRepository = companyRepository;
			_offerRepository = offerRepository;
		}


		[HttpPost, Route("{jobId}/feedback"),Authorize(Roles = "freelancer")]
		public async Task<IActionResult> PostJobFeedback([FromRoute] string jobId, [FromBody] JobFeedbackDto request)
		{
			try
			{
				var user = await _userManager.FindByNameAsync(HttpContext.User.Identity.Name);
				var job = await _jobRepository.FindById(Guid.Parse(jobId));

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
		//[Authorize]
		public async Task<IActionResult> GetJobList(JobListRequestDto dto)
		{
			try
			{
				//var user = await _userManager.FindByEmailAsync(HttpContext.User.Identity.Name);

				var jobsFiltered = _jobRepository.DbSet().Where(x =>
					(dto.StringForSearching.IsNullOrEmpty() || x.Title.Contains(dto.StringForSearching)) &&
					(dto.CompanyFilter.IsNullOrEmpty() ||
					 dto.CompanyFilter.Contains(x.Company.User.Id.ToString())) &&
				//  (dto.CategoryFilter.IsNullOrEmpty() || dto.CategoryFilter.Select(i => Guid.Parse(i)).Contains(x.Category)) &&
					(dto.LocationFilter.IsNullOrEmpty() ||
					 dto.LocationFilter.Contains(x.Country.CountryName)) &&
					(dto.LangFilter.IsNullOrEmpty() ||
					 dto.LangFilter.Contains(x.Language.Name))).ToList();
				if (!dto.StatusFilter.IsNullOrEmpty())
				{
					var filterParsed = Enum.TryParse<JobStatus>(dto.StatusFilter, out var status);
					if (filterParsed)
						jobsFiltered = jobsFiltered.Where(x => x.JobStatus == status).ToList();
				}

				if (!dto.TypeFilter.IsNullOrEmpty())
				{
					//jobsFiltered = jobsFiltered.Where(x =>
					//	dto.TypeFilter.Select(Enum.Parse<JobType>).Contains(x.JobType)).ToList();
				}

				var count = jobsFiltered.Count();

				//var savedJobsIds = user.SavedItems.Where(x => x.SavedItemType == SavedItemType.Job).Select(x => x.Id).ToHashSet();
				var jobs = jobsFiltered.Select(x => new
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
						Id = s.Skill.Id,
						Name = s.Skill.Name
					}).ToList(),
					Saved = false,//savedJobsIds.Contains(x.JobId),
				}).Skip((dto.PageNumber - 1) * dto.AmountOfItemsOnPage).Take(dto.AmountOfItemsOnPage).ToList();
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
		[Route("{jobId}/contracts")]
		public async Task<IActionResult> GetContractsByJobId([FromRoute] string jobId)
		{
			try
			{
				var job = await _jobRepository.FindById(Guid.Parse(jobId));
				if (job == null) return NotFound($"Job not found with id {jobId}");

				var contracts = job.Contracts;
				var result = contracts.Select(x => new
				{
					x.ContractId,
					Type = x.Job.JobType,
					x.BeginDate,
					x.EndDate,
					x.Status,
					Rate = x.Tax,
					CoverLetter = x.JobProposal.CoverLetter,
					Attacments = x.Attachments.ToList(),
					Messages = x.Messages.Select(m=> new
					{
						m.MessageId,
						m.Text,
						m.Status,
						m.Date,
						m.SenderId
					}),
					x.Freelancer.UserId,
					PlusMember = false,
					UserPhoto = x.Freelancer.User.UserPhoto.FileLink,
					x.Freelancer.User.UserName,
					x.Freelancer.Rates,
					FeedbacksCount = x.Freelancer.Feedbacks.Count(),
					x.Freelancer.Title,
					Country = new
					{
						x.Freelancer.User.Country.CountryId,
						x.Freelancer.User.Country.CountryFlag,
						x.Freelancer.User.Country.CountryName
					}
				});
				return Ok(result);
			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
		}

		[HttpGet, Route("{jobId}/proposals")]
		public async Task<IActionResult> GetProposalsList([FromRoute] string jobId)
		{
			try
			{
				var job = await _jobRepository.FindById(Guid.Parse(jobId));
				if (job == null) return NotFound($"Job not found with id {jobId}");
				var proposals = job.Proposals.ToList();
				var result = new
				{
					TotalAmountOfProposals = proposals.Count,
					Job = new
					{
						job.JobId,
						job.Title,
						Qualification = job.CompetenceLevel,
						Company = new
						{
							job.Company.UserId,
							job.Company.CompanyName,
							job.Company.User.Country,
							AmountOngoingProjects = job.Company.Jobs.Count(x => x.JobStatus == JobStatus.Open),
							AmountCompletedProjects = job.Company.Jobs.Count(x => x.JobStatus == JobStatus.Closed),
							AmountCancelledProjects = job.Company.Jobs.Count(x => x.JobStatus == JobStatus.Cancelled),
						},
						Type = job.JobType,
						job.Duration,
						Proposals = proposals.Select(x => new
						{
							x.ProposalId,
							x.ProposalStatus,
							Freelancer = new
							{
								x.Freelancer.UserId,
								x.Freelancer.User.FirstName,
								x.Freelancer.User.LastName,
								UserPhoto = x.Freelancer.User.UserPhoto.FileLink,
								UserRates = x.Freelancer.Rates,
								FeedbacksCount = x.Freelancer.Feedbacks.Count(),
								x.Freelancer.User.PlusMember
							},
							x.Terms,
							x.CoverLetter,
							x.Attachments
						})
					}
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
					Title = job.Title,
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
						CompanyName = job.Company.CompanyName,
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
					SkillsRequired = job.SkillsRequired.ToList(),
					Attachments = job.Attachments.ToList(),
					ProposalsCount = job.ProposalsCount,
					HiredFreelancers = job.HiredFreelancers.Select(x => x.Id).ToList()
				};

				return Ok(result);
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
				var jobList = (await _userManager.FindByIdAsync(freelancerId)).Freelancer.Contracts.Select(x => x.JobProposal.Job).ToList();
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




		[HttpPost, Route("{jobId}/repost"), Authorize(Roles = "company")]
		public async Task<IActionResult> RepostJob([FromRoute] string jobId)
		{
			try
			{
				var company = await _userManager.FindByNameAsync(HttpContext.User.Identity.Name);
				var job = await _jobRepository.FindById(Guid.Parse(jobId));
				if (job.Company.UserId != company.Id) return Forbid($"You are not owner of this job");
				job.JobStatus = JobStatus.Open;
				_jobRepository.Update(job);
				await _jobRepository.SaveChanges();
				return Ok(true);
			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
		}

		[HttpPost, Route("{jobId}/complete"), Authorize(Roles = "company")]
		public async Task<IActionResult> CompleteJob([FromRoute] string jobId)
		{
			try
			{
				var company = await _userManager.FindByNameAsync(HttpContext.User.Identity.Name);
				var job = await _jobRepository.FindById(Guid.Parse(jobId));
				if (job.Company.UserId != company.Id) return Forbid($"You are not owner of this job");
				job.JobStatus = JobStatus.Closed;
				_jobRepository.Update(job);
				await _jobRepository.SaveChanges();
				return Ok(true);
			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
		}

		[HttpDelete, Route("{jobId}"), Authorize(Roles = "company")]
		public async Task<IActionResult> DeleteJob([FromRoute] string jobId)
		{
			try
			{
				var company = await _userManager.FindByNameAsync(HttpContext.User.Identity.Name);
				var job = await _jobRepository.FindById(Guid.Parse(jobId));
				if (job.Company.UserId != company.Id) return Forbid($"You are not owner of this job");
				job.JobStatus = JobStatus.Cancelled;
				_jobRepository.Update(job);
				await _jobRepository.SaveChanges();
				return Ok(true);
			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
		}

	}
}