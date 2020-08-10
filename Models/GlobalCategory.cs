using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobPortal.Models
{
	public class GlobalCategory
	{
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		[Key]
		public Guid GlobalCategoryId { get; set; }
		public string GlobalCategoryName { get; set; }
		public string GlobalCategoryImg { get; set; }
		public string Description { get; set; }
	}
}