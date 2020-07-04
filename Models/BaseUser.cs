using System;
using Microsoft.AspNetCore.Identity;

namespace JobPortal.Models
{
	public class BaseUser : IdentityUser<Guid>
	{
		public string FirstName { get; set; }
		public string SecondName { get; set; }
		public Company Company { get; set; }
		public Freelancer Freelancer { get; set; }
		public Country Country { get; set; }
	}
}