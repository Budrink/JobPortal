using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobPortal.Models
{
	public class Job
	{
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		[Key]
		public Guid JobId { get; set; }
		public virtual Company Company { get; set; }
		public string Title { get; set; }
		public JobStatus JobStatus { get; set; }
		public string JobDetails { get; set; }
		public JobType JobType { get; set; }
		public decimal Tax { get; set; }
		public CompetenceLevel CompetenceLevel { get; set; }
		public virtual Language Language { get; set; }
		public virtual Country Country { get; set; }
		public virtual IEnumerable<JobSkill> SkillsRequired { get; set; }
		public virtual IEnumerable<Attachment> Attachments { get; set; }
		public virtual IEnumerable<Tag> Tags { get; set; }
		public virtual IEnumerable<Contract> Contracts { get; set; }
		public virtual Duration Duration { get; set; }
		public int ProposalsCount { get; set; }
		public virtual IEnumerable<User> HiredFreelancers { get; set; }
	}
}