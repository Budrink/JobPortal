namespace JobPortal.Dto
{
	public class FreelancerListRequestModel
	{
		public int PageNumber { get; set; }

		public int AmountOfItemsOnPage { get; set; }

		public string[] CategoryFilter { get; set; }

		public string[] LocationFilter { get; set; }

		public string[] TypeFilter { get; set; }

		public string[] LangFilter { get; set; }
		public string[] LevelFilter { get; set; }

		public string[] RateFilter { get; set; }
		public string StringFilter { get; set; }

		public string GlobalCategoryFilter { get; set; }

	}
}