using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobPortal.Dto;
using JobPortal.Models;
using JobPortal.Repository;
using JobPortal.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize(Roles = "company,freelancer")]
    public class ContractController : ControllerBase
    {
	    private readonly IGenericRepository<Contract> _contraRepository;
	    private readonly IGenericRepository<JobProposal> _proposalRepository;
	    private readonly IGenericRepository<Freelancer> _freelancerRepository;
	    private readonly IGenericRepository<Company> _companyRepository;


	    public ContractController(IGenericRepository<Contract> contraRepository, IGenericRepository<JobProposal> proposalRepository, IGenericRepository<Freelancer> freelancerRepository, IGenericRepository<Company> companyRepository)
	    {
		    _contraRepository = contraRepository;
		    _proposalRepository = proposalRepository;
		    _freelancerRepository = freelancerRepository;
		    _companyRepository = companyRepository;
	    }

	    [HttpPost]
	    [Route("hire")]
	    public async Task<IActionResult> SubmitContract([FromBody] ContractHireFreelancerViewModel model)
	    {
			try
			{
				var proposal = await _proposalRepository.FindById(Guid.Parse(model.ProposalId));
				var freelancer = await _freelancerRepository.FindById(Guid.Parse(model.FreelancerId));
				var company = await _companyRepository.FindById(Guid.Parse(model.SenderId));
				proposal.ProposalStatus = ProposalStatus.Accepted;
				var contract = new Contract()
				{
					JobProposal = proposal,
					Freelancer = freelancer,
					BeginDate = DateTime.Now
				};
				_proposalRepository.Update(proposal);
				await _contraRepository.Create(contract);
				await _contraRepository.SaveChanges();
				
				return Ok(true);
			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
		}


     //   [HttpGet]
	    //public IActionResult GetContractsList(bool onlyActive = false)
	    //{

	    //}
    }
}