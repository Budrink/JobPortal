using System;
using Microsoft.AspNetCore.Identity;

namespace JobPortal.Models
{
	public class Company : IdentityUser
	{
		public CompanySize CompanySize { get; set; }
		public Department Department { get; set; }
	}
}