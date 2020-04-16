using System;

namespace JobPortal.Models
{
	public class Contract
	{
		public Guid Id { get; set; }
		public Freelancer Freelancer { get; set; }
		public Job Job { get; set; }
		public DateTime Start { get; set; }
		public DateTime? End { get; set; }
		public Decimal Tax { get; set; }

	}
}