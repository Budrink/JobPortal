using System;

namespace JobPortal.Models
{
	public class ConfirmationCode
	{
		public Guid Id { get; set; }
		public Guid UserId { get; set; }
		public DateTime CreationDateTime { get; set; }

	}
}