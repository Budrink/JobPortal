using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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

		public FreelancerController(IGenericRepository<Freelancer> freelancerRepository, IGenericRepository<JobProposal> proposalRepository, IGenericRepository<Contract> contractRepository, UserManager<User> userManager, IGenericRepository<User> userRepository)
	    {
		    _freelancerRepository = freelancerRepository;
		    _proposalRepository = proposalRepository;
		    _contractRepository = contractRepository;
		    _userManager = userManager;
		    _userRepository = userRepository;
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

    }
}