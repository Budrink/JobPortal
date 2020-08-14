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
			context.SaveChanges();
			var globalCategories = new GlobalCategory[]
			{
				new GlobalCategory
				{
	  GlobalCategoryName ="Mobiles",
	  GlobalCategoryImg= "img-01.png",
	  Description="Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.|"
	},
new GlobalCategory
				{
	  GlobalCategoryName ="Digital Marketing",
	  GlobalCategoryImg= "img-01.png",
	  Description="Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.|"
	},
new GlobalCategory
				{
	  GlobalCategoryName ="Writing & Translation",
	  Description="Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.|"
	},
new GlobalCategory
				{
	  GlobalCategoryName ="Video & Animation",
	  Description="Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.|"
	},
new GlobalCategory
				{
	  GlobalCategoryName ="Programming & Tech",
	  GlobalCategoryImg= "img-01.png",
	  Description="Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.|"
	},
new GlobalCategory
				{
	  GlobalCategoryName ="Music & Audio",
	  GlobalCategoryImg= "img-01.png",
	  Description="Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.|"
	},

			};
			context.Set<GlobalCategory>().AddRange(globalCategories);
			context.SaveChanges();

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
			context.SaveChanges();

			var rates = new HourRate[]
		{
				new HourRate
				{
					HourRateName = "$10 and below",
					MinRate =0,
					MaxRate = 10
				},
				new HourRate
				{
					HourRateName = "$10 - $30",
					MinRate = 10,
					MaxRate = 30
				},
				new HourRate
				{
					HourRateName = "$30 - $60",
					MinRate = 30,
					MaxRate = 60
				},
				new HourRate
				{
					HourRateName = "$60 - $90",
					MinRate = 60,
					MaxRate = 90
				},
				new HourRate
				{
					HourRateName = "$90 &amp;above",
					MinRate = 90,
					MaxRate = 1000000
				}
			};
			context.Set<HourRate>().AddRange(rates);
			context.SaveChanges();

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
			context.SaveChanges();

			var userTypes = new[]
			{
				new FreelancerType
				{
					UserTypeName = "Pro Independent Freelancers"

				},
				new FreelancerType
				{
					UserTypeName = "Pro Agency Freelancers"
				},
				new FreelancerType
				{
					UserTypeName = "Independent Freelancers"
				},
				new FreelancerType
				{
					UserTypeName = "Agency Freelancers"
				},
				new FreelancerType
				{
					UserTypeName = "New Rising Talent"
				}
			};

			;
			context.Set<FreelancerType>().AddRange(userTypes);
			context.SaveChanges();

			var craftedProjects = new[]
		{
				new CraftedProject
				{
					Name = "themeforest",
					Link="https://themeforest.net"
				},
				new CraftedProject
				{
					Name = "Videohive",
					Link="https://Videohive.net",
					Img="img-o2.jpg"
				},
					new CraftedProject
				{
					Name = "Codecanyon",
					Link="https://Codecanyon.net",
					Img="img-o3.jpg"
				},
						new CraftedProject
				{
					Name = "Graphicriver",
					Link="https://Graphicriver.net",
					Img="img-o2.jpg"
				}
			};


			context.Set<CraftedProject>().AddRange(craftedProjects);
			context.SaveChanges();

			var numbers = new NumberOfEmployees[] {
			new NumberOfEmployees
			{
				Text="Less Than 02"
			},
			new NumberOfEmployees
			{
				Text="02 - 09 Employees"
			},
			new NumberOfEmployees
			{
				Text="10 - 99 Employees"
			},
			new NumberOfEmployees
			{
				Text="100 - 499 Employees"
			},
			new NumberOfEmployees
			{
				Text="500 - 999 Employees"
			},
			new NumberOfEmployees
			{
				Text="More Than 1000 Employees"
			}
			};
			context.Set<NumberOfEmployees>().AddRange(numbers);
			context.SaveChanges();
			var joinDate = DateTime.Now;

			var user1 = new User
			{
				Country = countries.First(x => x.CountryName == "United States"),
				FirstName = "Alex",
				LastName = "Morn",
				Email = "alex@somedomain.com",
				UserName = "alex@somedomain.com",
				JoinDate = joinDate,
				EmailConfirmed = true,
				Company = new Company
				{
					CompanyName = "Ember Planner & Organizer",
					CompanySize = CompanySize.Large,
					NumberOfEmployees = numbers.Where(x => x.Text == "500 - 999 Employees").First(),
					VerifiedCompany = true,
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
				JoinDate = joinDate,
				Email = "johndoe@somedomain.com",
				UserName = "johndoe@somedomain.com",
				EmailConfirmed = true,
				Company = new Company
				{
					VerifiedCompany = true,
					CompanyName = "Firy Birds & Company",
					CompanySize = CompanySize.Large,
					NumberOfEmployees = numbers.Where(x => x.Text == "10 - 99 Employees").First(),
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
				JoinDate = joinDate,
				UserName = "Jaindoe@somedomain.com",
				EmailConfirmed = true,
				Company = new Company
				{
					CompanyName = "VAV Creative Studio",
					CompanySize = CompanySize.Medium,
					NumberOfEmployees = numbers.Where(x => x.Text == "500 - 999 Employees").First(),
					VerifiedCompany = true,
					Department = new Department
					{
						Name = "Design"
					}
				},
				Gender = "female"
			};

			result = userManager.CreateAsync(user3, "Wsxedc!2345").GetAwaiter().GetResult();
			userManager.AddToRoleAsync(user3, "company").Wait();


			var awards = new[]
		{

				new Award
				{
					Title = "Top PHP Excel Skills",
					Date=DateTime.ParseExact("27/06/2018", "dd/MM/yyyy", null),
					Img ="img-07.jpg"
	},
				new Award
				{
					Title = " Monster Developer Award",
					Date=DateTime.ParseExact("27/06/2018", "dd/MM/yyyy", null),
					Img="img-07.jpg"
				},
					new Award
				{
				Title = "Top PHP Excel Skills",
					Date=DateTime.ParseExact("27/06/2018", "dd/MM/yyyy", null),
					Img="img-07.jpg"
				},
						new Award
				{
				Title = "Top PHP Excel Skills",
				Date=DateTime.ParseExact("27/06/2018", "dd/MM/yyyy", null),
					Img="img-07.jpg"
				}
			};

			var freelancer1 = new User
			{
				Country = countries.First(x => x.CountryName == "United States"),
				FirstName = "Ivan",
				LastName = "Petrov",
				JoinDate = joinDate,
				Freelancer = new Freelancer
				{
					Description = "SomeFreelancerDescription loremipsum ibaruri dfne eterbndkf s",
					Address = "Some adress",
					UserSkills = new[]
					{
						new UserSkill
						{
							Percent = 80,
							Skill = new Skill { Name = "PHP" }
						},
						new UserSkill
						{
							Percent = 70,
							Skill = new Skill { Name = "JavaScript" }
						},
						new UserSkill
						{
							Percent = 50,
							Skill = new Skill { Name = "HTML" }
						}
					},
					CraftedProjects = craftedProjects,
					Awards = awards

				},
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
					DurationText = "less than 01 month"
				},
				new Duration
				{
					DurationText = "01 to 03 months"
				},
				new Duration
				{
					DurationText = "03 to 06 months"
				},
				new Duration
				{
					DurationText = "more than 06 months"
				},
			};

			context.Set<Duration>().AddRange(durations);
			context.SaveChanges();


			var currents = new[]
			{
				new Currency
				{
					CurrencyName = "Brazilian Real"
				},
				new Currency
				{
					CurrencyName = "US Dollar"
				},
				new Currency
				{
					CurrencyName = "Yuan Renminbi"
				},
				new Currency
				{
					CurrencyName = "Colombian Peso"
				},
				new Currency
				{
					CurrencyName = "Euro"
				},
				new Currency
				{
					CurrencyName = "Hong Kong Dollar"
				},
			};

			context.Set<Currency>().AddRange(currents);
			context.SaveChanges();


			var levels = new[]
			{
				new EnglishLevel
				{
					EnglishLevelName = "Basic"
				},
				new EnglishLevel
				{
					EnglishLevelName = "Conversational"
				},
				new EnglishLevel
				{
					EnglishLevelName = "Fluent"
				},
				new EnglishLevel
				{
					EnglishLevelName = "Native or bilingual"
				},
				new EnglishLevel
				{
					EnglishLevelName = "Professional"
				},
			};

			context.Set<EnglishLevel>().AddRange(levels);
			context.SaveChanges();
			var jobs = new[]
			{
				new Job
				{
					Company = user1.Company,
					CompetenceLevel = CompetenceLevel.Professional,
					Duration = context.Set<Duration>().Skip(1).First(),
					Country = context.Set<Country>().Skip(2).First(),
					JobDetails = "Lorem Ipsumdfs dfdfsdfs someblablahere",
					JobStatus = JobStatus.Open,
					JobType = JobType.PerHour,
					Language = context.Set<Language>().Skip(3).First(),
					Title = "SomeAnotherJobToDo",
					Tax = decimal.FromOACurrency(15),
				 SkillsRequired = new []
					{
						new Skill
						{
							Name = ".NET"
						},
						new Skill
						{
							Name = "Photoshop"
						},
						new Skill
						{
							Name = "Design"
						},
						new Skill
						{
							Name = "Analysis"
						}, new Skill
						{
							Name = "Another skill"
						}
					},
					ProposalsCount = 3
				},
				new Job
				{
					Company = user2.Company,
					CompetenceLevel = CompetenceLevel.Intermediate,
					Duration = context.Set<Duration>().First(),
					HiredFreelancers = new[] {freelancer1},
					Country = context.Set<Country>().First(),
					JobDetails = "Lorem Ipsum someblablahere",
					JobStatus = JobStatus.Open,
					JobType = JobType.PerHour,
					Language = context.Set<Language>().First(),
					Title = "SomeJobToDo",
					Tax = decimal.FromOACurrency(15),
					SkillsRequired = new []
					{
						new Skill
						{
							Name = "PHP"
						},
						new Skill
						{
							Name = "PHP Developer"
						},
						new Skill
						{
							Name = "MySQL"
						},
						new Skill
						{
							Name = "Business"
						}, new Skill
						{
							Name = "Collaboration"
						}
					},
					ProposalsCount = 3
				}
			};
			context.Set<Job>().AddRange(jobs);

			context.SaveChanges();


			var contracts = new[]
			{
				new Contract {
					Job = jobs[0],
					Freelancer = freelancer1.Freelancer,
					BeginDate = DateTime.Parse("2020-04-01"),
					EndDate = DateTime.Parse("2020-08-01"),
					Status = ContractStatus.finishied,
					Terms = "Beginner",
					 Tax = 15
				},
				new Contract {
					Job = jobs[1],
					Freelancer = freelancer1.Freelancer,
					BeginDate = DateTime.Parse("2020-04-01"),
					EndDate = DateTime.Parse("2020-08-01"),
					Status = ContractStatus.finishied,
					Terms = "Beginner",
				Tax = 15
				},
			};
			context.Set<Contract>().AddRange(contracts);
			context.SaveChanges();




			var userSkills = new[]
			{
				new UserSkill
				{
				 UserId= freelancer1.Id,
				 Skill = skills[0],
				 Percent=80
				},
				new UserSkill
				{
				 UserId= freelancer1.Id,
				 Skill = skills[1],
				 Percent=60
				},
				new UserSkill
				{
				 UserId= freelancer1.Id,
				 Skill = skills[2],
				 Percent=40
				},
				new UserSkill
				{
				 UserId= freelancer1.Id,
				 Skill = skills[3],
				 Percent=30
				},
				new UserSkill
				{
				 UserId= freelancer1.Id,
				 Skill = skills[4],
				 Percent=90
				},
				new UserSkill
				{
				 UserId= freelancer1.Id,
				 Skill = skills[5],
				 Percent=90
				}
			};
			context.Set<UserSkill>().AddRange(userSkills);
			context.SaveChanges();
			var feedbacks = new[]
			{
				new Feedback {
					Contract = contracts[0],
					Freelancer = freelancer1.Freelancer,
					Mark = 4,
					Text="Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquaenim ad minim veniamac quis nostrud exercitation ullamco laboris."
				},
			new Feedback {
					Contract = contracts[1],
					Freelancer = freelancer1.Freelancer,
					Mark = 5,
					Text="Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquaenim ad minim veniamac quis nostrud exercitation ullamco laboris."
				},
			};

			//freelancer1.Freelancer.Feedbacks = feedbacks;
			context.Set<Feedback>().AddRange(feedbacks);
			context.Set<Freelancer>().Find(freelancer1.Freelancer.FreelancerId).Feedbacks = feedbacks;

			var follows = new[]
			{
				new SavedItem
				{
					SavedItemType = SavedItemType.Company,
					SavedItemId = user1.Company.UserId,
					User = freelancer1
				}
			};

			context.Set<SavedItem>().AddRange(follows);

			context.SaveChanges();


		}
	}
}