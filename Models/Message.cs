using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobPortal.Models
{
	public class Message
	{
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		[Key]
		public Guid MessageId { get; set; }
		public Guid SenderId { get; set; }
		public Guid ReceiverId { get; set; }
		public MessageStatus Status { get; set; }
		public DateTime Date { get; set; }
		public string Text { get; set; }
		public virtual IEnumerable<MessageAttachment> Attachments { get; set; }
  
	}

	public enum MessageStatus
	{
		New,
		Opened
	}
}