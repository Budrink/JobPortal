using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace JobPortal.Models
{
	public class Company
	{
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		[Key]
		public Guid CompanyId { get; set; }
		public string CompanyName;
		[ForeignKey("User")]
		public Guid UserId { get; set; }
		public CompanySize CompanySize { get; set; }
		public Department Department { get; set; }
		public User User { get; set; }
		public IEnumerable<Job> Jobs { get; set; }
	}
}