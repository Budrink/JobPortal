using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobPortal.Models
{
	public class UserLanguage
	{
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		[Key]
		public Guid Id { get; set; }
		[ForeignKey("User")]
		public Guid UserId { get; set; }
		public virtual Language Language { get; set; }
	}
}