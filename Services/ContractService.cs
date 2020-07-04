using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using JobPortal.Dto;
using JobPortal.Models;
using JobPortal.Repository;
using Microsoft.EntityFrameworkCore;

namespace JobPortal.Services
{
	public interface IContractService
	{
		Task<List<ContractViewModel>> ContractList(Guid userId, bool onlyActive = true);
		Task<ContractViewModel> ContractDetails(Guid contractId);
		Task<ContractViewModel> SubmitContract(ContractViewModel model);
		Task RemoveContract(Guid contractId);
	}

	public class ContractService : IContractService
	{
		private readonly IGenericRepository<Contract> _contractRepository;
		private readonly Mapper _mapper;

		public ContractService(IGenericRepository<Contract> contractRepository, Mapper mapper)
		{
			_contractRepository = contractRepository;
			_mapper = mapper;
		}


		public async Task<List<ContractViewModel>> ContractList(Guid userId, bool onlyActive = true)
		{
			var raw = _contractRepository.Get(x => x.Freelancer.Id == userId);
			if (onlyActive)
				raw = raw.Where(x => x.Job.JobStatus == JobStatus.Open);

			var result = _mapper.Map<ContractViewModel[]>(await raw.ToListAsync());

			return result.ToList();
		}

		public async Task<ContractViewModel> ContractDetails(Guid contractId)
		{
			var contract = await _contractRepository.FindById(contractId);
			return _mapper.Map<ContractViewModel>(contract);
		}

		public async Task<ContractViewModel> SubmitContract(ContractViewModel model)
		{
			var contract = _mapper.Map<Contract>(model);
			await _contractRepository.Create(contract);
			return _mapper.Map<ContractViewModel>(contract);
		}

		public async Task RemoveContract(Guid contractId)
		{
			var contract = await _contractRepository.FindById(contractId);
			await _contractRepository.Remove(contract);
		}

	}
}