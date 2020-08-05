using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore;

namespace JobPortal.Models.Context
{
	public class DataContext : IdentityDbContext<User, IdentityRole<Guid>, Guid>
	{
		public DataContext(DbContextOptions<DataContext> options) : base(options)
		{
			Database.EnsureCreated();
		}

		protected override void OnModelCreating(ModelBuilder builder)
		{
			base.OnModelCreating(builder);
			builder.Entity<Contract>();
			builder.Entity<Company>();
			builder.Entity<Language>();
			builder.Entity<Country>();
			builder.Entity<Freelancer>().HasOne(x=> x.User).WithOne(x => x.Freelancer);
			builder.Entity<Company>().HasOne(x => x.User).WithOne(x => x.Company);
			builder.Entity<Offer>();
			builder.Entity<Job>();
			builder.Entity<JobProposal>();
			builder.Entity<Message>();
			builder.Entity<Skill>();
			builder.Entity<Attachment>();
			builder.Entity<MessageAttachment>();
			builder.Entity<Award>();
			builder.Entity<Department>();
			builder.Entity<Tag>();
			builder.Entity<Education>();
			builder.Entity<Language>();
			builder.Entity<MessageAttachment>();
			builder.Entity<Project>();
			builder.Entity<UserExperience>();
			builder.Entity<UserLanguage>();
			builder.Entity<UserSkill>();

		}
	}
}