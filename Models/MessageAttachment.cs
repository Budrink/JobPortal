using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobPortal.Models
{
	public class MessageAttachment
	{
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		[Key]
		public Guid Id { get; set; }
		[ForeignKey("Attachment")]
		public Guid AttachmentId { get; set; }
		[ForeignKey("Message")]
		public Guid MessageId { get; set; }
	}
}