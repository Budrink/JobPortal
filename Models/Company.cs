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
		public bool VerifiedCompany { get; set; }
		public string CompanyName { get; set; }
		[ForeignKey("User")]
		public Guid UserId { get; set; }
		public virtual CompanySize CompanySize { get; set; }
		public virtual Department Department { get; set; }
		public virtual User User { get; set; }
		public virtual IEnumerable<Job> Jobs { get; set; }
	}
}