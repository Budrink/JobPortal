using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobPortal.Models
{
	public class Country
	{
		[Key]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public Guid CountryId { get; set; }
		public string CountryName { get; set; }
		public string CountryFlag { get; set; }
		public string Code { get; set; }
	}
}