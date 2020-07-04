using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;


namespace JobPortal.Models
{
	public class Freelancer : BaseEntity
	{

		public string SkillsDescription { get; set; }
		public string UserRates { get; set; }
		public virtual IEnumerable<JobProposal> JobProposals { get; set; }
	}
}