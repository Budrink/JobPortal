using System;

namespace JobPortal.Dto
{
	public class CompanyModel
	{
		public Guid UserId { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string Email { get; set; }
		public string Gender { get; set; }
		public DateTime JoinDate { get; set; }
		public string UserName { get; set; }
		public bool VerifiedCompany { get; set; }
		public Guid CompanyId { get; set; }
		public string CompanyName { get; set; }
	}
}