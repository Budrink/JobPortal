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
				Gender = "male",
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
						new JobSkill {
							Skill = new Skill
							{
								Name = ".NET"
							},
						},
						new JobSkill {
							Skill = new Skill
							{
								Name = "Photoshop"
							},
						},
						new JobSkill {
							Skill = new Skill
							{
								Name = "Design"
							},
						},
						new JobSkill {
							Skill = new Skill
							{
								Name = "Analysis"
							},
						},
						new JobSkill {
							Skill = new Skill
							{
								Name = "Another skill"
							},
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
						new JobSkill {
							Skill	= new Skill
							{
								Name = "PHP"
							},
						},
						new JobSkill {
							Skill = new Skill
							{
								Name = "PHP Developer"
							},
						},
						new JobSkill {
							Skill = new Skill
							{
								Name = "MySQL"
							},
						},
						new JobSkill {
							Skill = new Skill
							{
								Name = "Business"
							},
						},
						new JobSkill {
							Skill = new Skill
							{
								Name = "Collaboration"
							},
						},
						//new Skill
						//{
						//	Name = "Business"
						//}, new Skill
						//{
						//	Name = "Collaboration"
						//}
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

			var reasons = new[]
			{
				new ComplainReason
				{
					ReasonName="Reason 1"
				},
					new ComplainReason
				{
					ReasonName="Reason 2"
				},
						new ComplainReason
				{
					ReasonName="Reason 3"
				},
							new ComplainReason
				{
					ReasonName="Reason 4"
				},
								new ComplainReason
				{
					ReasonName="Reason 5"
				},
									new ComplainReason
				{
					ReasonName="Reason 6"
				},
			};
			context.Set<ComplainReason>().AddRange(reasons);
	context.SaveChanges();

			var articletags = new[]
			{
				new ArticleTag
				{
					TagName="Electronics"
				},
				new ArticleTag
				{
					TagName="DIY"
				},
					new ArticleTag
				{
					TagName="Business"
				},
					new ArticleTag
				{
					TagName="Superism"
				},
					new ArticleTag
				{
					TagName="Development"
				},
					new ArticleTag
				{
					TagName="Collaboration"
				},
					new ArticleTag
				{
					TagName="Decent"
				}
 			};
			context.Set <ArticleTag>().AddRange(articletags);

			context.SaveChanges();

			var article = new Article
			{
				ArticleImg = "img-01.jpg",
				Title = "Who Else Wants To Be Successful With Business",
				Date = DateTime.ParseExact("27/06/2018", "dd/MM/yyyy", null),
				Category = globalCategories.First(x => x.GlobalCategoryName == "Digital Marketing"),
				Author = user1,
				Text = "<p>    Excepteur sint occaecat cupidatat non proident,    sunt in culpa qui officia deserunt mollit anim id </p>",// +
	   //"est laborum. Sed utem perspiciatis unde omnis iste    natus error sit voluptatem accusantium doloremque     laudantium, totam rem aiam eaqueiu ipsa quae ab" +
	   //" illo inventore veritatis et quasi architecto    beatae vitae dictaed quia consequuntur magni    dolores eos quist ratione voluptatem sequei" +
	   //" nesciunt. Neque porro quisquam est qui dolorem     ipsum quia dolor sitem amet consectetur adipisci     velit sed quianon numquam eius modi tempora" +
	   //" incidunt ut labore et dolore magnam aliquam     quaerat tatem dolor sit amet, consectetur    adipisicing elit, sed do eiusmod tempor." +
	   //"</p>  <blockquote className=\"wt-blockquotevone\">    <span>      <i className=\"lnr lnr-bookmark\"></i>    </span>    <q>      \" Adipisicing elit, sed do eiusmod tempor " +
	   //"incididunt ut labore et dolore magna aliqua.”    </q>  </blockquote>  <p>    Incididunt ut labore et dolore magna aliqua. Ut    enim ad minim veniam, quis nostrud exercitation    ullamco laboris nisi ut aliquip ex ea commodo" +
	   //"consequat. Duis aute irure dolor in reprehenderit     in voluptate velit esse cillum dolore eu fugiate    nulla pariatur. Excepteur sint occaecat cupidatat    non proident." +
	   //"</p>  <figure className=\"wt-blogdetailimgvtwo wt-articlessingleone\">    <img      src=\"/images/article/articlessingle/img-02.jpg\"      className=\"test\"      alt=\"description\"    />    <figcaption>" +
	   //"<span>        As per current survey perspiciatis unde omnis        iste natus error sit voluptatem.      </span>   </figcaption>  </figure>  <p>    Excepteur sint occaecat cupidatat non proident," +
	   //"sunt in culpa qui officia deserunt mollit anim id    est laborum. Sed ut perspiciatis unde omnis iste    natus error sit voluptatem accusantium doloremque    laudantium, totam rem aiam eaque ipsa quae ab illo    inventore veritatis et quasi architecto beatae" +
	   //"vitae dicta sunt explicabo. Nemo enim ipsam    voluptatem quia voluptas sit aspernatur aut odit    aut fugit.  </p>  <ul>    <li>      <span>Nemo enim ipsam voluptatem quia</span>    </li>" +
	   //"<li>      <span>        Adipisci velit, sed quia non numquam eius modi        tempora      </span>    </li>    <li>      <span>        Eaque ipsa quae ab illo inventore veritatis et    quasi architecto\"+ " +
	   //"</span>    </li>    <li>      <span>        qui dolorem ipsum quia dolor sit amet      </span>    </li>  </ul>  <p>    Sed quia consequuntur magni dolores eos qui    ratione voluptatem sequi nesciunt. Neque porro    quisquam est, qui dolorem ipsum quia dolor sit" +
	   //"amet, consectetur, adipisci velit, sed quia non    numquam eius modi tempora incidunt ut labore et    dolore magnam aliquam quaerat voluptatem.  </p>  <figure className=\"wt-blogdetailimgvtwo wt-alignleft\">" +
	   //"<img      src=\"/images/article/articlessingle/img-03.jpg\"      alt=\"description\"    />    <figcaption>      <span>        As per current survey perspiciatis unde     </span>    </figcaption>" +
	   //"</figure>  <p>    Excepteur sint occaecat cupidatat non proident,    sunt in culpa qui officiaerunt mollit anim id est    laborum. Sed ut perspiciatis unde omnis iste natus    error sit voluptatem accusantium doloremque    laudantium, totam rem aiam eaqueisa quae ab illo" +
	   //"  inventore veritatis et quasi architecto beatae    vitae dicta suntcabo Nemo enim ipsam voluptatem    quia voluptas.  </p>  <ul className=\"wt-blogliststyle\">    <li>      <span>Nemo enim ipsam voluptatem quia</span>" +
	   //"</li>    <li>      <span>        Adipisci velit, sed quia non numquam eius modi        tempora      </span>    </li>    <li>      <span>        Eaque ipsa quae ab illo inventore veritatis et        quasi architecto      </span>" +
	   //"</li>    <li>      <span>        qui dolorem ipsum quia dolor sit amet      </span>    </li>  </ul>  <p>    Sed quia consequuntur magni dolores eos qui    ratione voluptatem sequi nesciunt. Neque porro    quam est, qui dolorem ipsum quia dolor sit amet,    consectetur, adipisci velit, sed quia non numquam" +
	   //"   eiuste modi tempora incidunt ut labore et dolore  magnam aliquam quaerat voluptatem.  </p>  <p className=\"wt-clear\">    Excepteur sint occaecat cupidatat non proident,    sunt in culpa qui officia deserunt mollit anim id    est laborum. Sed ut perspiciatis unde omnis iste" +
	   //"natus error sit voluptatem accusantium doloremque    laudantium, totam rem aiam eaque ipsa quae ab illo    inventore veritatis et quasi architecto beatae    vitae dicta sunt explicabo. Nemo enim ipsam    voluptatem quia voluptas sit aspernatur aut odit    aut fugit.  </p>  <figure className=\"wt-blogdetailimgvtwo wt-alignright\">  <img" +
	   //" src=\"/images/article/articlessingle/img-04.jpg\"      alt=\"description\"    />    <figcaption>      <span>        As per current survey perspiciatis unde      </span>" +
	   //"</figcaption>  </figure>  <p>    Excepteur sint occaecat cupidatat non proident,    sunt in culpa qui officiaerunt mollit anim id est    laborum. Sed ut perspiciatis unde omnis iste natus    error sit voluptatem accusantium doloremque" +
	   //"laudantium, totam rem aiam eaqueisa quae ab illo    inventore veritatis et quasi architecto beatae    vitae dicta suntcabo Nemo enim ipsam voluptatem    quia voluptas.  </p>  <ul className=\"wt-blogliststyle\">" +
	   //"<li>      <span>Nemo enim ipsam voluptatem quia</span>    </li>    <li>      <span>        Adipisci velit, sed quia non numquam eius modi        tempora      </span>    </li>" +
	   //"<li>      <span>        Eaque ipsa quae ab illo inventore veritatis et        quasi architecto      </span>    </li>    <li>      <span>        qui dolorem ipsum quia dolor sit amet     </span>" +
	   //"</li>  </ul>  <p>    Sed quia consequuntur magni dolores eos qui    ratione voluptatem sequi nesciunt. Neque porro    quam est, qui dolorem ipsum quia dolor sit amet," +
	   //"consectetur, adipisci velit, sed quia non numquam    eiuste modi tempora incidunt ut labore et dolore    magnam aliquam quaerat voluptatem.  </p>  <p className=\"wt-clear\">    Excepteur sint occaecat cupidatat non proident," +
	   //"sunt in culpa qui officia deserunt mollit anim id    est laborum. Sed ut perspiciatis unde omnis iste    natus error sit voluptatem accusantium doloremque    laudantium, totam rem aiam eaque ipsa quae ab illo  inventore veritatis et quasi architecto beatae" +
	   //"vitae dicta sunt explicabo. Nemo enim ipsam    voluptatem quia voluptas sit aspernatur aut odit    aut fugit.  </p>  <div className=\"wt-video\">    <figure>" +
	   //"<a        data-rel=\"prettyPhoto[video]\"        href=\"https://www.youtube.com/watch?v=J37W6DjqT3Q\"      >        <img          src=\"images/article/articlessingle/video-img.jpg\"          alt=\"description\"        />      </a>" +
	   //"</figure>  </div>  <p>    Excepteur sint occaecat cupidatat non proident,    sunt in culpa qui officia deserunt mollit anim id    est laborum. Sed ut perspiciatis unde omnis iste" +
	   //"natus error sit voluptatem accusantium doloremque    laudantium, totam rem aiam eaque ipsa quae ab illo    inventore veritatis et quasi architecto beatae    vitae dicta sunt explicabo. Nemo enim ipsam    voluptatem quia voluptas sit aspernatur aut odit  aut fugit." +
	   //"</p>  <ul>    <li>      <span>Nemo enim ipsam voluptatem quia</span>    </li>    <li>      <span>        Adipisci velit, sed quia non numquam eius modi       tempora" +
	   //"</span>    </li>    <li>      <span>        Eaque ipsa quae ab illo inventore veritatis et        quasi architecto      </span>    </li>    <li>      <span>        qui dolorem ipsum quia dolor sit amet      </span>" +
	   //"</li>  </ul>  <p>    Sed quia consequuntur magni dolores eos qui    ratione voluptatem sequi nesciunt. Neque porro    quisquam est, qui dolorem ipsum quia dolor sit    amet, consectetur, adipisci velit, sed quia non    numquam eius modi tempora incidunt ut labore et" +
	   //"dolore magnam aliquam quaerat voluptatem.  </p>",
				Tags = new ArticleTag[] { articletags[0], articletags[1], articletags[3] }

			};

			context.Set<Article>().AddRange(article);

			context.SaveChanges();

		}
	}
}