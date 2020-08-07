using System;
using System.Linq;
using JobPortal.Models;
using JobPortal.Models.Context;
using Microsoft.AspNetCore.Identity;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace JobPortal
{
	public class DatabaseInitializer
	{
		public static void DBInit(DataContext context, UserManager<User> userManager, RoleManager<IdentityRole<Guid>> roleManager)
		{

			var roleFreelancer = new IdentityRole<Guid>("freelancer");
			var roleCompany = new IdentityRole<Guid>("company");
			roleManager.CreateAsync(roleFreelancer).Wait();
			roleManager.CreateAsync(roleCompany).Wait();

			var countries = new[]
			{
				new Country
				{
					CountryName = "Australia"
				},
				new Country
				{
					CountryName = "United States"
				},
				new Country
				{
					CountryName = "Canada"
				},
				new Country
				{
					CountryName = "England"
				},
				new Country
				{
					CountryName = "United Emirates"
				}
			};
			context.Set<Country>().AddRange(countries);


			var langs = new Language[]
			{
				new Language
				{
					Name = "English"
				},
				new Language
				{
					Name = "Russian"
				},
				new Language
				{
					Name = "Turkish"
				},
				new Language
				{
					Name = "French"
				},
				new Language
				{
					Name = "Deutsch"
				}
			};
			context.Set<Language>().AddRange(langs);
			var rates = new HourRate[]
		{
				new HourRate
				{
					HourRateName = "$10 and below"
				},
				new HourRate
				{
					HourRateName = "$10 - $30"
				},
				new HourRate
				{
					HourRateName = "$30 - $60"
				},
				new HourRate
				{
					HourRateName = "$60 - $90"
				},
				new HourRate
				{
					HourRateName = "$90 &amp;above"
				}
		};
			context.Set<HourRate>().AddRange(rates);

			var skills = new Skill[]
			{
				new Skill
				{
					Name = "WordPress"

				},
				new Skill
				{
					Name = "Graphic Design"
				},
				new Skill
				{
					Name = "Software Architecture"
				},
				new Skill
				{
					Name = "Article Writing"
				},
				new Skill
				{
					Name = "Website Design"
				},
					new Skill
				{
					Name = "UI Design"
				},
				new Skill
				{
					Name = "UX Design"
				},
				new Skill
				{
					Name = "Technical Writer"
				},
				new Skill
				{
					Name = "Content Writer"
				}
			};
			context.Set<Skill>().AddRange(skills);

			var userTypes = new UserType[]
{
				new UserType
				{
					UserTypeName = "Pro Independent Freelancers"

				},
				new UserType
				{
					UserTypeName = "Pro Agency Freelancers"
				},
				new UserType
				{
					UserTypeName = "Independent Freelancers"
				},
				new UserType
				{
					UserTypeName = "Agency Freelancers"
				},
				new UserType
				{
					UserTypeName = "New Rising Talent"
				}
};
			context.Set<UserType>().AddRange(userTypes);
			var user1 = new User
			{
				Country = countries.First(x => x.CountryName == "United States"),
				FirstName = "Alex",
				LastName = "Morn",
				Email = "alex@somedomain.com",
				UserName = "alex@somedomain.com",
				EmailConfirmed = true,
				Company = new Company
				{
					CompanyName = "Ember Planner & Organizer",
					CompanySize = CompanySize.Large,
					Department = new Department
					{
						Name = "Management"
					}
				},
				Gender = "male"
			};
			var result = userManager.CreateAsync(user1, "Wsxedc!2345").GetAwaiter().GetResult();
			userManager.AddToRoleAsync(user1, "company").Wait();

			var user2 = new User
			{
				Country = countries.First(x => x.CountryName == "Canada"),
				FirstName = "John",
				LastName = "Doe",
				Email = "johndoe@somedomain.com",
				UserName = "johndoe@somedomain.com",
				EmailConfirmed = true,
				Company = new Company
				{
					CompanyName = "Firy Birds & Company",
					CompanySize = CompanySize.Large,
					Department = new Department
					{
						Name = "Management"
					}
				},
				Gender = "male"
			};

			result = userManager.CreateAsync(user2, "Wsxedc!2345").GetAwaiter().GetResult();
			userManager.AddToRoleAsync(user2, "company").Wait();

			var user3 = new User
			{
				Country = countries.First(x => x.CountryName == "United States"),
				FirstName = "Jain",
				LastName = "Doe",
				Email = "Jaindoe@somedomain.com",
				UserName = "Jaindoe@somedomain.com",
				EmailConfirmed = true,
				Company = new Company
				{
					CompanyName = "VAV Creative Studio",
					CompanySize = CompanySize.Medium,
					Department = new Department
					{
						Name = "Design"
					}
				},
				Gender = "female"
			};

			result = userManager.CreateAsync(user3, "Wsxedc!2345").GetAwaiter().GetResult();
			userManager.AddToRoleAsync(user3, "company").Wait();

			var freelancer1 = new User
			{
				Country = countries.First(x => x.CountryName == "United States"),
				FirstName = "Ivan",
				LastName = "Petrov",
				Freelancer = new Freelancer(),
				EmailConfirmed = true,
				Email = "ivan@somedomain.com",
				UserName = "ivan@somedomain.com",
			};

			result = userManager.CreateAsync(freelancer1, "Wsxedc!2345").GetAwaiter().GetResult();
			userManager.AddToRoleAsync(freelancer1, "freelancer");


			var durations = new[]
			{
				new Duration
				{
					DurationText = "Less Than 01 Month"
				},
				new Duration
				{
					DurationText = "01 to 03 Months"
				},
				new Duration
				{
					DurationText = "03 to 06 Months"
				},
				new Duration
				{
					DurationText = "More Than 06 Months"
				},
			};

			context.Set<Duration>().AddRange(durations);
			context.SaveChanges();

		}
	}
}