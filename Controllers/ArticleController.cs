using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using Castle.Core.Internal;
using JobPortal.Dto;
using JobPortal.Models;
using JobPortal.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace JobPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticleController : ControllerBase
    {
	    private readonly IGenericRepository<Article> _articleRepository;
	    private readonly IGenericRepository<ArticleTag> _articleTagRepository;
	    private readonly IGenericRepository<Tag> _tagRepository;
	    private readonly IGenericRepository<SavedItem> _itemsRepository;


	    public ArticleController(IGenericRepository<Article> articleRepository, IGenericRepository<ArticleTag> articleTagRepository, IGenericRepository<Tag> tagRepository, IGenericRepository<SavedItem> itemsRepository)
	    {
		    _articleRepository = articleRepository;
		    _articleTagRepository = articleTagRepository;
		    _tagRepository = tagRepository;
		    _itemsRepository = itemsRepository;
	    }


	    [HttpGet, Route("{articleId}")]
	    public async Task<IActionResult> GetArticle([FromRoute] string articleId)
	    {
		    try
		    {
			    var article = await _articleRepository.FindById(Guid.Parse(articleId));
			    var result = new
			    {
				    article.ArticleId,
				    article.Title,
				    article.Date,
				    article.ArticleImg,
				    Author = new
				    {
					    article.Author.Id,
					    article.Author.FirstName,
					    article.Author.LastName,
					    article.Author.UserName,
					    Since = article.Author.JoinDate,
					    UserPhoto = article.Author.UserPhoto?.FileLink,
					    Description = article.Author.Freelancer == null
						    ? article.Author.Company.Description
						    : article.Author.Freelancer.Description
				    },
				    article.Category,
				    Tags = article.Tags.Select(x => x.TagName).ToList(),
					article.Text
			    };
			    return Ok(result);
		    }
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
		}

	    [HttpPost, Route("list")]
	    public async Task<IActionResult> GetArticles([FromBody] ArticleRequestDto request)
	    {
		    try
		    {
			    var articles = await _articleRepository.Get(x =>
					    (request.Category.IsNullOrEmpty() ||
					     x.Tags.Select(x => x.TagName).Contains(request.Category)) &&
					    (request.StringFilter.IsNullOrEmpty() || x.Title.Contains(request.StringFilter)))
				    .Skip(request.AmountOfItemsOnPage * (request.Page - 1)).Take(request.AmountOfItemsOnPage)
				    .ToListAsync();
			    var result = new
			    {
				    TotalAmountOfArticles = articles.Count,
				    Articles = articles.Select(x => new
				    {
					    x.ArticleId,
					    x.ArticleImg,
					    x.Title,
					    x.Date,
					    Author = new
					    {
						    x.Author.Id,
						    x.Author.FirstName,
						    x.Author.LastName
					    },
					    Tags = x.Tags.Select(x => x.TagName)
				    })
			    };
			    return Ok(result);
		    }
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
		}

	    [HttpGet, Route("popularCategoryList")]
	    public async Task<IActionResult> GetPopularCategoryList([FromQuery] int amount = 10)
	    {
		    try
		    {
			    var categories = (await _articleRepository.DbSet().GroupBy(x => x.Category).ToListAsync())
				    .ToDictionary(x => x.Key, x => x.ToList())
				    .OrderBy(x => x.Value.Count).Take(amount).ToList();
			    var result = categories.Select(x => new
			    {
				    CategoryId = x.Key.GlobalCategoryId,
				    CategoryName = x.Key.GlobalCategoryName,
				    ItemsAmount = x.Value.Count
			    }).ToList();
			    return Ok(result);
		    }
		    catch (Exception e)
		    {
			    return BadRequest(e.Message);
		    }
	    }

	    [HttpGet, Route("popularArticlesList")]
	    public async Task<IActionResult> GetPopularArticlesList([FromQuery] int amount = 10)
	    {
		    try
		    {
			    var articlesIds = await _itemsRepository.DbSet().Where(x => x.SavedItemType == SavedItemType.Article)
				    .GroupBy(x => x.SavedItemId)
				    .OrderBy(x => x.Count()).Take(amount)
				    .Select(x=> x.Key).ToListAsync();
			    var articles = await _articleRepository.Get(x => articlesIds.Contains(x.ArticleId)).ToListAsync();
			    var result = articles.Select(x => new
			    {
				    x.ArticleId,
				    ArticleName = x.Title,
				    x.Date,
				    x.ArticleImg
			    });
			    return Ok(result);
		    }
		    catch (Exception e)
		    {
			    Console.WriteLine(e);
			    throw;
		    }
	    }


		[HttpGet, Route("popularTagsList")]
		public async Task<IActionResult> GetPopularTagList([FromQuery] int amount = 10)
		{
			try
			{
				var categoryIds = _articleTagRepository.DbSet().GroupBy(x => x.TagId).ToList()
					.ToDictionary(x => x.Key, x => x.ToList()).OrderBy(x => x.Value.Count).Take(amount)
					.ToDictionary(x => x.Key, x => x.Value);
				var categories = await _tagRepository.Get(x => categoryIds.Keys.Contains(x.TagId)).ToListAsync();
				var result = categories.Select(x => new
				{
					CategoryId = x.TagId,
					CategoryName = x.Value,
					//ItemsAmount = categoryIds[x.TagId].Count
				});
				return Ok(result);
			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
		}

    }
}