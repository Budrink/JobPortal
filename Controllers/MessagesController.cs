using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using JobPortal.Dto;
using JobPortal.Models;
using JobPortal.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
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
		private readonly UserManager<User> _userManager;
		private readonly IGenericRepository<User> _userRepository;

		public MessagesController(IGenericRepository<Message> messageRepository, IGenericRepository<MessageAttachment> messageAttachmentRepository, UserManager<User> userManager, IGenericRepository<User> userRepository)
	    {
		    _messageRepository = messageRepository;
			_messageAttachmentRepository = messageAttachmentRepository;
			_userManager = userManager;
			_userRepository = userRepository;
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


		[HttpPost, Route("getmessages")]
		public async Task<IActionResult> GetMessages([FromBody] MessageRequestDto request)
		{
			try
			{
				var messages = await _messageRepository.Get(x =>
					(x.ReceiverId.ToString() == request.UserId && x.SenderId.ToString() == request.CorrespondentId) ||
					(x.SenderId.ToString() == request.UserId && x.ReceiverId.ToString() == request.CorrespondentId))
					.Skip(request.PageNumber*(request.AmountOfItemsOnPage-1))
					.Take(request.AmountOfItemsOnPage)
					.Select(x=> new
					{
						x.MessageId,
						x.SenderId,
						x.ReceiverId,
						x.Status,
						x.Date,
						x.Text,
						x.Attachments
					}).ToListAsync();
				return Ok(messages);

			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
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

		[HttpGet,Route("correspondentsList/{userId}")]
		public async Task<IActionResult> GetCorrespondentsList([FromRoute] string userId)
		{
			try
			{
				var user = await _userManager.FindByIdAsync(userId);
				if (user == null) return NotFound($"user not found with id {userId}");

				var sendMessagesList = _messageRepository.Get(x => x.SenderId == user.Id).ToList()
					.GroupBy(x=> x.ReceiverId)
					.ToDictionary(x => x.Key, x=> x.ToList());
					
				var receivedMessagesList = _messageRepository.Get(x=> x.ReceiverId == user.Id).ToList().GroupBy(x => x.SenderId)
					.ToDictionary(x => x.Key, x => x.ToList());




				var users = await _userRepository.Get(x => sendMessagesList.Keys.Concat(receivedMessagesList.Keys).Contains(x.Id)).ToListAsync();

				var result = users.Select(x => new
				{
					UserId = x.Id,
					UserPhoto = x.UserPhoto.FileLink,
					x.FirstName,
					x.LastName,
					UserRates = x.Freelancer?.Rates,
					FeedbacksCount = x.Freelancer?.Feedbacks.Count(),
					Title = x.Freelancer?.Title,
					NewMessages = receivedMessagesList.ContainsKey(x.Id) && receivedMessagesList[x.Id].Any(m=> m.Status == MessageStatus.New)
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