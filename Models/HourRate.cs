using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobPortal.Models
{
	public class HourRate
	{
		[Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public Guid HourRateId { get; set; }
		public string HourRateName { get; set; }

	}
}