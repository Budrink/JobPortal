using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;


namespace JobPortal.Models
{
	public class Freelancer
	{
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		[Key]
		public Guid FreelancerId { get; set; }
		public string SkillsDescription { get; set; }
		public string Rates { get; set; }
		[ForeignKey("User")]
		public Guid UserId { get; set; }
		public virtual IEnumerable<GlobalCategory> GlobalCategories { get; set; }
		public virtual IEnumerable<JobProposal> JobProposals { get; set; }
		public virtual IEnumerable<Feedback> Feedbacks { get; set; }
		public virtual IEnumerable<Contract> Contracts { get; set; }
		public virtual FreelancerType FreelancerType { get; set; }
		public virtual User User { get; set; }
		public string Address { get; set; }
		public double Longitude { get; set; }
		public double Latitude { get; set; }
		public int NumberOfEmployees { get; set; }
		public string Department { get; set; }
		public string Description { get; set; }
		public string Title { get; set; }
		public virtual IEnumerable<Award> Awards { get; set; }
		public virtual IEnumerable<Project> Projects { get; set; }
		public bool PublicProfile { get; set; }
		public bool SharePhoto { get; set; }
		public bool ShowFeedback { get; set; }
		public bool ProfileSearchible { get; set; }
		public bool DisableAccount { get; set; }
		public bool DisableTemporarily { get; set; }
		public string LanguageId { get; set; }
		public string CurrencyId { get; set; }
		public bool SendWeeklyAlerts { get; set; }
		public bool SendBonusAlerts { get; set; }
		public bool ForwardMessages { get; set; }
		public bool ShareSecurityAlerts { get; set; }
		public string DetailPageDesign { get; set; }
		public string NewPassowrd { get; set; }
		public decimal HourRates { get; set; }
		public int ServedHours { get; set; }
		public virtual IEnumerable<UserSkill> UserSkills { get; set; }
		public virtual EnglishLevel EnglishLevel { get; set; }
		public virtual IEnumerable<UserLanguage> Languages { get; set; }
		public string Remark { get; set; }
		public virtual IEnumerable<UserExperience> Experience { get; set; }
		public virtual IEnumerable<Education> Education { get; set; }
		public string CompanyName { get; set; }
		public string CompanyImage { get; set; }

	}
}