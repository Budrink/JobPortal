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
		public Company Company { get; set; }
		public string Title { get; set; }
		public JobStatus JobStatus { get; set; }
		public string Duration { get; set; }
		public string JobDetails { get; set; }
		public JobType JobType { get; set; }
		public decimal Tax { get; set; }
		public CompetenceLevel CompetenceLevel { get; set; }
		public Country Country { get; set; }
		public IEnumerable<Skill> SkillsRequired { get; set; }
		public IEnumerable<Attachment> Attachments { get; set; }
		public IEnumerable<Tag> Tags { get; set; }
		public int ProposalsCount { get; set; }
		public IEnumerable<User> HiredFreelancers { get; set; }
	}
}