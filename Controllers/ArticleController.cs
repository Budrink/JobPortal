using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
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


	    public ArticleController(IGenericRepository<Article> articleRepository, IGenericRepository<ArticleTag> articleTagRepository, IGenericRepository<Tag> tagRepository)
	    {
		    _articleRepository = articleRepository;
		    _articleTagRepository = articleTagRepository;
		    _tagRepository = tagRepository;
	    }


		[HttpGet, Route("popularCategoryList")]
		public async Task<IActionResult> GetPopularCategoryList([FromRoute] int amount = 10)
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
					ItemsAmount = categoryIds[x.TagId].Count
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