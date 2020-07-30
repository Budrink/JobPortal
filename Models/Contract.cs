using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobPortal.Models
{
	public class Contract
	{
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		[Key]
		public Guid ContractId { get; set; }
		public Freelancer Freelancer { get; set; }
		public JobProposal JobProposal { get; set; }
		public DateTime Start { get; set; }
		public DateTime? End { get; set; }
		public Decimal Tax { get; set; }

	}
}