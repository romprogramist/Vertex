using Microsoft.AspNetCore.Mvc;
using Vertex.Models;
using Vertex.Models.Dtos;
using Vertex.Services.EmailService;

namespace Vertex.Controllers.API;

[ApiController]
[Route("api/application")]
public class ApplicationController : ControllerBase
{
    private readonly IEmailService _emailService;
    private readonly IWebHostEnvironment _env;

    public ApplicationController(IEmailService emailService, IWebHostEnvironment env)
    {
        _emailService = emailService;
        _env = env;
    }
    
    [HttpPost]
    [Route("send")]
    public async Task<IActionResult> SendEmail(ApplicationModel application)
    {
        var html = _emailService.CreateBody(application);
        
        var request = new EmailDto
        {
            Subject = "Заявка",
            Body = html
        };

        if (_env.IsDevelopment()) return Ok();
        
        await _emailService.SendEmailAsync(request);
        
        return Ok();
    }
}