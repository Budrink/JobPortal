using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobPortal.Models;
using JobPortal.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FreelancerController : ControllerBase
    {
	    private readonly IGenericRepository<Freelancer> _freelancerRepository;
	    private readonly IGenericRepository<JobProposal> _proposalRepository;
	    private readonly IGenericRepository<Contract> _contractRepository;

	    public FreelancerController(IGenericRepository<Freelancer> freelancerRepository, IGenericRepository<JobProposal> proposalRepository, IGenericRepository<Contract> contractRepository)
	    {
		    _freelancerRepository = freelancerRepository;
		    _proposalRepository = proposalRepository;
		    _contractRepository = contractRepository;
	    }

    }
}