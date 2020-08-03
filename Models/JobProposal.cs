using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobPortal.Models
{
	public class JobProposal
	{
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		[Key]
		public Guid ProposalId { get; set; }
		public string CoverLetter { get; set; }
		public string Terms { get; set; }
		public DateTime ProposalDate { get; set; }
		public ProposalStatus ProposalStatus { get; set; }
		public virtual Job Job { get; set; }
		public virtual Freelancer Freelancer { get; set; }
	}

	public enum ProposalStatus
	{
		Wait,
		Accepted,
		Declined,
		Cancelled
	}
}