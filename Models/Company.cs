using System;
using Microsoft.AspNetCore.Identity;

namespace JobPortal.Models
{
	public class Company : BaseEntity
	{
		public string CompanyName;
		public CompanySize CompanySize { get; set; }
		public Department Department { get; set; }
	}
}