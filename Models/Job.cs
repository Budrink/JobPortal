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
		public Guid Id { get; set; }
		public JobStatus JobStatus { get; set; }
		public string JobDescription { get; set; }
		public JobType JobType { get; set; }
		public decimal Tax { get; set; }
		public CompetenceLevel CompetenceLevel { get; set; }
		public virtual Country Country { get; set; }
		public virtual IEnumerable<Tag> Tags { get; set; }
	}
}