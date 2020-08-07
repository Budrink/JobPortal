using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobPortal.Models
{
	public class Duration
	{
		[Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public Guid DurationId { get; set; }
		public string DurationText { get; set; }
	}
}