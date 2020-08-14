using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobPortal.Models;

namespace JobPortal.Dto
{
	public class SaveItemRequestModel
	{
		public string ItemId { get; set; }
		public string UserId { get; set; }
		public SavedItemType SavedItemType { get; set; }
		public bool Save { get; set; }
	}
}
