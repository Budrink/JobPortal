using AutoMapper;
using JobPortal.Models;
using JobPortal.Repository;

namespace JobPortal.Services
{
	public class JobService
	{
		private readonly IGenericRepository<Job> _jobRepository;
		private readonly IMapper _mapper;

		public JobService(IGenericRepository<Job> jobRepository, IMapper mapper)
		{
			_jobRepository = jobRepository;
			_mapper = mapper;
		}

	}
}