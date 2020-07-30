using System;
using System.Collections.Generic;
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
    public class MessagesController : ControllerBase
    {
	    private readonly IGenericRepository<Message> _messageRepository;

	    public MessagesController(IGenericRepository<Message> messageRepository)
	    {
		    _messageRepository = messageRepository;
	    }

	    [HttpGet]
	    [Route("{userId}")]
	    public async Task<IActionResult> GetUserMessages(string userId)
	    {
		    try
		    {
			    var guid = Guid.Parse(userId);
				var messages = await _messageRepository.Get(x => x.ReceiverId == guid || x.SenderId == guid).ToListAsync();
				return Ok(messages);
		    }
		    catch (Exception e)
		    {
			    return BadRequest(e.Message);
		    }
	    }
    }
}