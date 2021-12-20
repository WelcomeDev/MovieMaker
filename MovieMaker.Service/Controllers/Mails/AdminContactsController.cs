using Microsoft.AspNetCore.Mvc;

using MovieMaker.Service.Provider.Di;

namespace MovieMaker.Service.Controllers.Mails
{
    [ApiController]
    [Route("api/mails")]
    public class AdminContactsController : ControllerBase
    {
        private readonly IMailsProvider _provider;

        public AdminContactsController(IMailsProvider provider)
        {
            _provider = provider;
        }

        [HttpPost]
        [Route("mark-answered/{id:guid}")]
        public async Task<IActionResult> MarkAnswered(Guid id)
        {
            await _provider.MarkAnswered(id);

            return Ok();
        }

        [HttpGet]
        [Route("list")]
        public async Task<IActionResult> List()
        {
            var items = await _provider.GetUnAnswered();
            return Ok(items);
        }
    }
}
