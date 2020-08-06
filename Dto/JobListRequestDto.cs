namespace JobPortal.Dto
{
	public class JobListRequestDto
	{
		public int PageNumber { get; set; }
		public int AmountOfItemsOnPage { get; set; }
		public string[] CategoryFilter { get; set; }
		public string[] ProjectTypeFilter { get; set; }
		public string[] LocationFilter { get; set; }
		public string[] TypeFilter { get; set; }
		public string[] ProjectLength { get; set; }
		public string[] LangFilter { get; set; }
		public string[] CompanyFilter { get; set; }
		public string StringForSearching { get; set; }
		public string StatusFilter { get; set; }
		//projectLengthFilter: string[],
		//langFilter: string[],
		//companyFilter: string[],
		//stringForSearching: string,
		//statusfilter: string
	}
}