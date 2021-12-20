using Microsoft.AspNetCore.Mvc;

namespace MovieMaker.Service.Controllers.Mails
{
    [ApiController]
    [Route("api/contacts")]
    public class AdminContactsController : ControllerBase
    {
        [HttpPost]
        [Route("mark-answered/{id:guid}")]
        public async Task<IActionResult> MarkAnswered(Guid id)
        {
            return Ok();
        }

        [HttpGet]
        [Route("list")]
        public async Task<IActionResult> List()
        {
            return Ok();
        }
    }
}
