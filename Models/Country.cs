using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobPortal.Models
{
	public class Country : BaseEntity
	{

		public string CountryName { get; set; }
		public string CountryFlag { get; set; }
		public string Code { get; set; }
	}
}