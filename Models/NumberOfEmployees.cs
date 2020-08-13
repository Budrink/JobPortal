using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobPortal.Models

{
	public class NumberOfEmployees
    {
		[Key]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
	 	public Guid Id   { get; set; }
		public string Text { get; set; }

}
}