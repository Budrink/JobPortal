using JobPortal.Models;

namespace JobPortal.Dto
{
	public class JobViewModel
	{
		public string JobDescription { get; set; }
		public JobType JobType { get; set; }
		public CompetenceLevel CompetenceLevel { get; set; }
		public decimal Tax { get; set; }

	}
}