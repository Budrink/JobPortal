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

	public class MessageDTO
		{
	    	public string SenderId { get; set; }
			public string ReceiverId { get; set; }
			public string Text { get; set; }
			public IEnumerable<Attachment> Attachments { get; set; }
		}

		[HttpPost]
		[Route("sendmail")]
		public async Task<IActionResult> SendMail([FromBody] MessageDTO request)
		{
			try
			{
				var message = new Message
			{
	
		SenderId = Guid.Parse(request.SenderId),
		ReceiverId=Guid.Parse(request.ReceiverId),
		Status= MessageStatus.New,
		Date =DateTime.UtcNow,
		Text = request.Text,
		};
     	 await _messageRepository.Create(message);
        	var messageId = message.MessageId;
				await _messageRepository.SaveChanges();
				foreach (Attachment att in request.Attachments)
			{
				var messagAttachment = new MessageAttachment
				{
					MessageId = messageId,
					AttachmentId = att.Id,
				};
 				await _messageAttachmentRepository.Create(messagAttachment);

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