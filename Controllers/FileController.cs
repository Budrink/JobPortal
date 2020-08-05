using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using JobPortal.Models;
using JobPortal.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileController : ControllerBase
    {
	    private readonly IGenericRepository<Attachment> _attachmentRepository;

	    public FileController(IGenericRepository<Attachment> attachmentRepository)
	    {
		    _attachmentRepository = attachmentRepository;
	    }


	    [HttpPost]
		[DisableRequestSizeLimit]
		[Route("upload")]
		public async Task<IActionResult> UploadUserPhoto(IFormFile uploadedFile)
		{
			try
			{
				var folderName = Path.Combine("Resources", "Images");
				var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

				if (uploadedFile.Length > 0)
				{
					var fileName = ContentDispositionHeaderValue.Parse(uploadedFile.ContentDisposition).FileName.Trim('"');
					var fullPath = Path.Combine(pathToSave, fileName);
					var dbPath = Path.Combine(folderName, fileName);


					using (var stream = new FileStream(fullPath, FileMode.Create))
					{
						uploadedFile.CopyTo(stream);
					}

					var attachment = new Attachment
					{
						FileName = uploadedFile.FileName,
						FileLink = dbPath,
						FileSize = uploadedFile.Length
					};

					await _attachmentRepository.Create(attachment);
					await _attachmentRepository.SaveChanges();

					return Ok(attachment);
				}

				return BadRequest();
			}
			catch (Exception ex)
			{
				return StatusCode(500, $"Internal server error: {ex}");
			}
		}
	}
}