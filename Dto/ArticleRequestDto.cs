namespace JobPortal.Dto
{
	public class ArticleRequestDto
	{
		public int Page { get; set; }
		public int AmountOfItemsOnPage { get; set; }
		public string Category { get; set; }
		public string StringFilter { get; set; }
	}
}