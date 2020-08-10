using System.Collections;

namespace JobPortal.Dto
{
	public class AccountSettingsDto
	{
		public string UserId { get; set; }
		public bool publicProfile { get; set; }
		public bool SharePhoto { get; set; }
		public bool ShowFeedback { get; set; }
		public bool ProfileSearchible { get; set; }
		public bool DisableAccount { get; set; }
		public bool DisableTemporarily { get; set; }

		public string[] Languages { get; set; }
		public string CurrencyId { get; set; }
		public bool SendWeeklyAlerts { get; set; }
		public bool SendBonusAlerts { get; set; }
		public bool ForwardMessages { get; set; }
		public bool ShareSecurityAlerts { get; set; }

		public string DetailPageDesign { get; set; }
		public string NewPassowrd { get; set; }

	}
}