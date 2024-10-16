﻿using AutoMapper;
using JobPortal.Dto;
using JobPortal.Models;

namespace JobPortal.MapperProfile
{
	public class MapperProfile : Profile
	{
		public MapperProfile()
		{
			CreateMap<ContractHireFreelancerViewModel, Contract>().ReverseMap();
			CreateMap<AccountSettingsDto, Freelancer>().ReverseMap();
			CreateMap<Skill, SkillModel>();
		}
	}
}