using Vertex.Models;
using Vertex.Models.Dtos;

namespace Vertex.Services.EmailService;

public interface IEmailService
{
    Task SendEmailAsync(EmailDto request);
    string CreateBody(ApplicationModel application);
}