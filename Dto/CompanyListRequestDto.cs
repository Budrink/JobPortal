using System.Collections.Generic;

namespace JobPortal.Dto
{
	public class CompanyListRequestDto
	{
		public int PageNumber { get; set; }
		public int AmountOfItemsOnPage { get; set; }
		public string[]CountryFilter { get; set; }
		public string SearchString { get; set; }
		public IEnumerable<string> NumberOfEmplyees { get; set; }
		public string JobTypeFilter { get; set; }
	}
}