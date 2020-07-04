using System;

namespace JobPortal.Dto
{
	public class ContractViewModel
	{
		public DateTime Start { get; set; }
		public DateTime? End { get; set; }
		public Decimal Tax { get; set; }
		public JobViewModel Job { get; set; }
	}
}