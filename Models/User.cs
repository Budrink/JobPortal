using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace JobPortal.Models
{
	public class User : IdentityUser<Guid>
	{
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string Gender { get; set; }
		public string UserPhoto { get; set; }
		public virtual Company Company { get; set; }
		public virtual Freelancer Freelancer { get; set; }
		public virtual Country Country { get; set; }
		public virtual IEnumerable<SavedItem> SavedItems { get; set; }
	}
}