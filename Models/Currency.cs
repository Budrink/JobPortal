using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobPortal.Models
{
	public class Currency
	{
		[Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public Guid CurrencyId { get; set; }
		public string CurrencyName { get; set; }

	}
}