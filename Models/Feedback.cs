using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobPortal.Models
{
	public class Feedback
	{
		[Key,DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public Guid FeedbackId { get; set; }
		public virtual User User { get; set; }
		public string Text { get; set; }
	}
}