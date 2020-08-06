
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace JobPortal.Models
{
	public class UserType
	{
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		[Key]
		public Guid UserTypeId { get; set; }
		public string UserTypeName { get; set; }
	}
}
