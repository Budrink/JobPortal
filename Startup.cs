using System;
using System.Text.Json.Serialization;
using AutoMapper;
using JobPortal.Models;
using JobPortal.Models.Context;
using JobPortal.Repository;
using JobPortal.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;

namespace JobPortal
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddDbContext<DataContext>(o => { o.UseInMemoryDatabase(new Guid().ToString()); });
			services.AddControllersWithViews().AddJsonOptions(options =>
			{
				options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
			});
			services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));


			services.AddDefaultIdentity<User>(options =>
				{
					options.SignIn.RequireConfirmedAccount = true;
					options.User.RequireUniqueEmail = true;
				})
				.AddRoles<IdentityRole<Guid>>()
				.AddEntityFrameworkStores<DataContext>();
			services.AddAutoMapper(x => x.AddProfile(new MapperProfile.MapperProfile()));

			services.AddScoped<ContractService, ContractService>();

			services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
				.AddJwtBearer(options =>
				{
					options.RequireHttpsMetadata = false;
					options.TokenValidationParameters = new TokenValidationParameters
					{
						// ��������, ����� �� �������������� �������� ��� ��������� ������
						ValidateIssuer = true,
						// ������, �������������� ��������
						ValidIssuer = AuthOptions.Issuer,

						// ����� �� �������������� ����������� ������
						ValidateAudience = true,
						// ��������� ����������� ������
						ValidAudience = AuthOptions.Audience,
						// ����� �� �������������� ����� �������������
						ValidateLifetime = true,

						// ��������� ����� ������������
						IssuerSigningKey = AuthOptions.GetSymmetricSecurityKey(),
						// ��������� ����� ������������
						ValidateIssuerSigningKey = true,
					};
				});

			// In production, the React files will be served from this directory
			services.AddSpaStaticFiles(configuration =>
			{ 
				configuration.RootPath = "ClientApp/build";
			});
			services.AddSwaggerGen();
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			// Enable middleware to serve generated Swagger as a JSON endpoint.
			app.UseSwagger();

			// Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.),
			// specifying the Swagger JSON endpoint.
			app.UseSwaggerUI(c =>
			{
				c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
			});

			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}
			else
			{
				app.UseExceptionHandler("/Error");
				// The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
				app.UseHsts();
			}

			app.UseHttpsRedirection();
			app.UseStaticFiles();
			app.UseSpaStaticFiles();
			app.UseAuthentication();
			app.UseRouting();
			app.UseAuthorization();
			app.UseCors(builder => builder.AllowAnyHeader().WithOrigins("https://localhost:3000").AllowCredentials());

			app.UseEndpoints(endpoints =>
			{
				endpoints.MapControllerRoute(
					name: "default",
					pattern: "{controller}/{action=Index}/{id?}");
			});

			app.UseSpa(spa =>
			{
				spa.Options.SourcePath = "ClientApp";

				if (env.IsDevelopment())
				{
					spa.UseReactDevelopmentServer(npmScript: "start");
				}
			});
		}
	}
}
