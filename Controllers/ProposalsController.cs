using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using JobPortal.Models;
using JobPortal.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace JobPortal.Controllers
{
	public class ProposalDto
	{
		public Guid Id { get; set; }
		public Guid JobId { get; set; }
		public Guid UserId { get; set; }
		public string UserPhoto { get; set; }
		public string Terms { get; set; }
		public string CoverLetter { get; set; }
		public DateTime ProposalDate { get; set; }
		public ProposalStatus ProposalStatus { get; set; }
	}

	[Route("api/[controller]")]
	[ApiController]
	public class ProposalsController : ControllerBase
	{
		private readonly IGenericRepository<JobProposal> _proposalRepository;

		public ProposalsController(IGenericRepository<JobProposal> proposalRepository)
		{
			_proposalRepository = proposalRepository;
		}


		[HttpGet, Route("job/{jobId}/detailed")]
		public async Task<IActionResult> GetProposal([FromRoute] string jobId)
		{
			try
			{
				var proposals = await _proposalRepository.Get(x => x.Job.JobId.ToString() == jobId).ToListAsync();
				var result = proposals.Select(x => new
				{
					Id = x.ProposalId,
					JobId = x.Job.JobId,
					Freelancer = new
					{
						x.Freelancer.UserId,
						UserPhoto = x.Freelancer.User.UserPhoto.FileLink,
						UserRates = x.Freelancer.Rates,
						x.Freelancer.User.FirstName,
						x.Freelancer.User.LastName,
						FeedbacksCount = x.Freelancer.Feedbacks.Count(),
						PlusMember = true
					},
					x.Terms,
					x.CoverLetter,
					x.ProposalDate,
					x.ProposalStatus,
					x.Attachments,
				});
				return Ok(result);
			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
		}


		[HttpGet]
		[Route("job/{jobId}")]
		[ProducesResponseType(typeof(List<ProposalDto>), (int)HttpStatusCode.OK)]
		public async Task<IActionResult> GetProposalList([FromRoute] string jobId)
		{
			try
			{
				var proposalList = await _proposalRepository.Get(x => x.Job.JobId == Guid.Parse(jobId))
					.Select(x => new ProposalDto
					{
						Id = x.ProposalId, JobId = x.Job.JobId, UserId = x.Freelancer.User.Id,
						UserPhoto = x.Freelancer.User.UserPhoto.FileLink,
						Terms = x.Terms,
						CoverLetter = x.CoverLetter,
						ProposalDate = x.ProposalDate,
						ProposalStatus = x.ProposalStatus,
					}).ToListAsync();
				return Ok(proposalList);
			}
			catch (Exception e)
			{
				return NotFound(e.Message);
			}
		}
		
	}
}