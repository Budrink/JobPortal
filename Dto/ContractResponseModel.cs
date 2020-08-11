using System;
using JobPortal.Models;

namespace JobPortal.Dto
{
	public class ContractResponseModel
	{
		public ContractStatus ContractStatus { get; set; }
		public DateTime BeginDate { get; set; }
		public DateTime EndDate { get; set; }

	}
}