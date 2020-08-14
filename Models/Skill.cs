using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Policy;

namespace JobPortal.Models
{
	public class Skill
	{
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		[Key]
		public Guid Id { get; set; }
		public string Name { get; set; }
		public string Img { get; set; }
		public string SliderImg { get; set; }
		public virtual IEnumerable<JobSkill> JobsWhereRequired { get; set; }

	}
}