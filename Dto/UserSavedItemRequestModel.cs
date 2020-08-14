using JobPortal.Models;

namespace JobPortal.Dto
{
	public class UserSavedItemRequestModel
	{
		public string UserId { get; set; }
		public int PageNumber { get; set; }
		public int AmountOfItemsOnPage { get; set; }
		public SavedItemType SavedItemType { get; set; }
	}
}