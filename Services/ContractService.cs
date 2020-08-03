using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using JobPortal.Dto;
using JobPortal.Models;
using JobPortal.Models.Context;
using JobPortal.Repository;
using Microsoft.EntityFrameworkCore;

namespace JobPortal.Services
{
	public interface IContractService
	{
		Task<List<ContractHireFreelancerViewModel>> ContractList(Guid userId, bool onlyActive = true);
		Task<ContractHireFreelancerViewModel> ContractDetails(Guid contractId);
		Task<ContractHireFreelancerViewModel> SubmitContract(ContractHireFreelancerViewModel model);
		Task RemoveContract(Guid contractId);
	}

	public class ContractService : IContractService
	{
		private readonly IGenericRepository<Contract> _contractRepository;
		private readonly DataContext _context;
		private readonly IMapper _mapper;

		public ContractService(IGenericRepository<Contract> contractRepository, IMapper mapper, DataContext context)
		{
			_contractRepository = contractRepository;
			_mapper = mapper;
			_context = context;
		}


		public async Task<List<ContractHireFreelancerViewModel>> ContractList(Guid userId, bool onlyActive = true)
		{
			var raw = _contractRepository.Get(x => x.Freelancer.FreelancerId == userId);
			if (onlyActive)
				raw = raw.Where(x => x.JobProposal.Job.JobStatus == JobStatus.Open);

			var result = _mapper.Map<ContractHireFreelancerViewModel[]>(await raw.ToListAsync());

			return result.ToList();
		}

		public async Task<ContractHireFreelancerViewModel> ContractDetails(Guid contractId)
		{
			var contract = await _contractRepository.FindById(contractId);
			return _mapper.Map<ContractHireFreelancerViewModel>(contract);
		}

		public async Task<ContractHireFreelancerViewModel> SubmitContract(ContractHireFreelancerViewModel model)
		{
			var contract = _mapper.Map<Contract>(model);
			contract.ContractId = Guid.Empty;
			_context.Set<Contract>().Add(contract);
			var entity = _context.ChangeTracker.Entries().First();
			

			var tracked = (Contract) entity.Entity;
			_context.SaveChanges();
			var check = _context.Set<Contract>().Find(tracked.ContractId);
			//await _contractRepository.Create(contract);
			return _mapper.Map<ContractHireFreelancerViewModel>(contract);
		}

		public async Task RemoveContract(Guid contractId)
		{
			var contract = await _contractRepository.FindById(contractId);
			_contractRepository.Remove(contract);
			await _contractRepository.SaveChanges();
		}

	}
}