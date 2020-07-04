using System;

namespace JobPortal.Models
{
	public class Contract : BaseEntity
	{
		public BaseUser Freelancer { get; set; }
		public Job Job { get; set; }
		public DateTime Start { get; set; }
		public DateTime? End { get; set; }
		public Decimal Tax { get; set; }

	}
}