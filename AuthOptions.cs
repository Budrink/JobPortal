using System.Text;
using Microsoft.IdentityModel.Tokens;


namespace JobPortal
{
	public class AuthOptions
	{
		public const string Issuer = "MyAuthServer"; // издатель токена
		public const string Audience = "ClientApp"; // потребитель токена
		const string Key = "mysupersecret_secretkey!123";   // ключ для шифрации
		public const int LifeTime = 10; // время жизни токена - 10 минут
		public static SymmetricSecurityKey GetSymmetricSecurityKey()
		{
			return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Key));
		}
	}
}