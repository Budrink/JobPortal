﻿using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace JobPortal.Models
{
	public class Feedback
	{
		[Key,DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public Guid FeedbackId { get; set; }
		public virtual Freelancer Freelancer { get; set; }
		public virtual Contract Contract { get; set; }
		public int Mark { get; set; }
		public string Text { get; set; }
	}
}