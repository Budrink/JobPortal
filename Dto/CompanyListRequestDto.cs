namespace JobPortal.Dto
{
	public class CompanyListRequestDto
	{
		public int PageNumber { get; set; }
		public int AmountOfItemsOnPage { get; set; }
		public string Country { get; set; }
		public string SearchString { get; set; }
	}
}