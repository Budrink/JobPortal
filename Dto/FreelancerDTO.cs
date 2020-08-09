using JobPortal.Models;

namespace JobPortal.Dto
{
	public class FreelancerDTO
	{
		public string UserId { get; set; }
		public string UserPhoto { get; set; }

		//userBunnerFile?: File;

		public string FirstName { get; set; }
		public string LastName { get; set; }
		//public string Email { get; set; }
		public string Gender { get; set; }
		public string CountryId { get; set; }
		public string Address { get; set; }
		public double Longitude { get; set; }
		public double Latitude { get; set; }
		public int NumberOfEmployees { get; set; }
		public string Department { get; set; }
		public string Description { get; set; }
		public string Title { get; set; }
		public Award[] Awards { get; set; }
		public Project[] Projects { get; set; }


		public decimal HourRates { get; set; }
		public int ServedHours { get; set; }

		public UserSkill[] UserSkills { get; set; }
		public EnglishLevel EnglishLevel { get; set; }

		public UserLanguage[] Languages { get; set; }

		public string Remark { get; set; }

		public UserExperience[] Experience { get; set; }
		public Education[] Education { get; set; }
		// tagList?: string[];
		//  globalCategory?: GlobalCategoryData;
		public UserCompany UserCompany { get; set; }
	}
}