using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobPortal.Models
{
	public class SavedItem
	{
		[Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public Guid Id { get; set; }
		public Guid SavedItemId { get; set; }
		public SavedItemType SavedItemType { get; set; }
	}

	public enum SavedItemType
	{
		Job,
		Company,
		Article
	}
}