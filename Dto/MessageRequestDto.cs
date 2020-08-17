namespace JobPortal.Dto
{
	public class MessageRequestDto
	{
		public string UserId { get; set; }
		public string CorrespondentId { get; set; }
		public int PageNumber { get; set; }
		public int AmountOfItemsOnPage { get; set; }
	}
}