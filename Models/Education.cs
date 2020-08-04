using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace JobPortal.Models
{
    public class Education
    {
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		[Key]
		public Guid Id { get; set; }
		[ForeignKey("User")]
		public Guid UserId { get; set; }
		
		public string Title { get; set; }
		public string Description { get; set; }
		public string CompanyName { get; set; }
		public DateTime BeginDate { get; set; }
		public DateTime EndDate { get; set; }

		}

	}
}
