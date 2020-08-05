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
	public class FileUploadModel
	{
		public byte[] Content;
		public string Name;
	}

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
	    [Route("upload/form")]
	    public IActionResult UploadUserPhoto(IFormFile uploadedFile)
	    {
		    try
		    {
			    var folderName = Path.Combine("Content", "Images");
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


		[HttpPost]
		[DisableRequestSizeLimit]
		[Route("upload/bytes")]
		public IActionResult UploadUserPhoto([FromForm] FileUploadModel file)
		{
			try
			{
				var folderName = Path.Combine("Content", "Images");
				var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

				if (file.Content.Length > 0)
				{
					
					var fullPath = Path.Combine(pathToSave, file.Name);
					var dbPath = Path.Combine(folderName, file.Name);


					using (var stream = new FileStream(fullPath, FileMode.Create))
					{
						stream.Write(file.Content);
					}

					var attachment = new Attachment
					{
						FileName = file.Name,
						FileLink = dbPath,
						FileSize = file.Content.Length
					};

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