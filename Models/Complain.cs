using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Net.Mime;

namespace JobPortal.Models
{
	public class Complain
	{
		[Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public Guid Id { get; set; }
		public virtual User User { get; set; }
		public virtual User Sender { get; set; }
		public string Text { get; set; }
		public ComplainReason Reason { get; set; }
	}
}