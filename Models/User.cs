using System;
using Microsoft.AspNetCore.Identity;

namespace JobPortal.Models
{
	public class User : IdentityUser<Guid>
	{
		public string FirstName { get; set; }
		public string SecondName { get; set; }
		public string Photo { get; set; }
		public virtual Company Company { get; set; }
		public virtual Freelancer Freelancer { get; set; }
		public virtual Country Country { get; set; }
	}
}