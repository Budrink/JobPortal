using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;


namespace JobPortal.Models
{
	public class Freelancer
	{
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		[Key]
		public Guid FreelancerId { get; set; }
		public string SkillsDescription { get; set; }
		public string Rates { get; set; }
		[ForeignKey("User")]
		public Guid UserId { get; set; }
		public virtual IEnumerable<JobProposal> JobProposals { get; set; }
		public virtual IEnumerable<Contract> Contracts { get; set; }
		public virtual User User { get; set; }
	}
}