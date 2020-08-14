using JobPortal.Models;

namespace JobPortal.Dto
{
	public class FollowersRequestModel
	{
		public string ItemId { get; set; }
		public SavedItemType SavedItemType { get; set; }
		public int PageNumber { get; set; }
		public int AmountOfItemsOnPage { get; set; }
	}
}