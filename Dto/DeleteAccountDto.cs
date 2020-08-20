namespace JobPortal.Dto
{
	public class DeleteAccountDto
	{
		public string Password { get; set; }
		public string Message { get; set; }
		public string Reason { get; set; } 
		public bool TermsCondition { get; set; }
	}
}