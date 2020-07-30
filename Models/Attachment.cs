using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobPortal.Models
{
	public class Attachment
	{
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		[Key]
		public Guid AttachmentId { get; set; }
		public string FileName { get; set; }
		public long FileSize { get; set; }
		public string FileLink { get; set; }
	}
}