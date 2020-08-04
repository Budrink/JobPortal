using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobPortal.Models;
using JobPortal.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore;

namespace JobPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
	    private readonly IGenericRepository<Message> _messageRepository;
		private readonly IGenericRepository<MessageAttachment> _messageAttachmentRepository;

		public MessagesController(IGenericRepository<Message> messageRepository, IGenericRepository<MessageAttachment> messageAttachmentRepository)
	    {
		    _messageRepository = messageRepository;
			_messageAttachmentRepository = messageAttachmentRepository;

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

		[HttpPost]
		[Route("sendmail")]
		public async Task<IActionResult> SendMail([FromBody] Message request)
		{
			try
			{

				var message = new Message
			{
		//public IEnumerable<MessageAttachments> Attachments { get; set; }

		SenderId = request.SenderId,
		ReceiverId=request.ReceiverId,
		Status= MessageStatus.New,
		Date =DateTime.UtcNow,
		Text = request.Text,
		};
     	 await _messageRepository.Create(message);
        	var messageId = message.MessageId;
				await _messageRepository.SaveChanges();
				foreach (MessageAttachment messageAttachment in request.Attachments)
			{
				var att = new MessageAttachment
				{
					MessageId = messageId,
					AttachmentId = messageAttachment.AttachmentId
				};
 				await _messageAttachmentRepository.Create(att);

			}
				await _messageRepository.SaveChanges();
				await _messageAttachmentRepository.SaveChanges();
				return Ok(message);
			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}


		}
	}
}
	}
}