using System;
using JobPortal.Models;

namespace JobPortal.Dto
{
	public class FeedbackResponseModel
	{
		public Guid FeedbackId { get; set; }
		public Guid FreelancerId { get; set; }
		public Contract Contract { get; set; }
		public int Mark { get; set; }
		public string Text { get; set; }
	}
}