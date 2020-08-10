using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobPortal.Models
{
	public enum ContractStatus
		{
		 finishied,
		 ongoing
	}
	public class Contract
	{
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		[Key]
		public Guid ContractId { get; set; }
		public string Terms { get; set; }
		public ContractStatus Status { get; set; }
		public virtual Freelancer Freelancer { get; set; }
		public virtual Job Job { get; set; }
		public virtual JobProposal JobProposal { get; set; }
		public DateTime  BeginDate { get; set; }
		public DateTime? EndDate { get; set; }
		public Decimal Tax { get; set; }
	

	}
}