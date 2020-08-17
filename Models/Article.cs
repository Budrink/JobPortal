using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;


namespace JobPortal.Models
{
	public class Article
	{
	




		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		[Key]
		public Guid ArticleId { get; set; }
		public string ArticleImg { get; set; }
		public string Title { get; set; }

		public DateTime Date { get; set; }

		[ForeignKey("User")]
		public Guid Author { get; set; }
		public virtual GlobalCategory Category { get; set; }

		public string Text { get; set; }

		public IEnumerable<string> Tags { get; set; }

	}
}