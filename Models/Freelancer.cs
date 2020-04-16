using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;


namespace JobPortal.Models
{
	public class Freelancer : IdentityUser
	{
		public string SkillsDescription { get; set; }
		public virtual IEnumerable<JobProposal> JobProposals { get; set; }
	}
}