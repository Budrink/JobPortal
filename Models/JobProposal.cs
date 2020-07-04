using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobPortal.Models
{
	public class JobProposal : BaseEntity
	{
		public string CoverLetter { get; set; }
		public virtual Job Job { get; set; }
		public virtual Freelancer Freelancer { get; set; }
	}
}