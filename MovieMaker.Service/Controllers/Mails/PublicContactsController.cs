using Microsoft.AspNetCore.Mvc;

using MovieMaker.Service.Controllers.Mails.Dto;
using MovieMaker.Service.Provider.Di;

namespace MovieMaker.Service.Controllers.Mails
{
    [ApiController]
    [Route("api/mail")]
    public class PublicContactsController : ControllerBase
    {
        private readonly IMailsProvider _provider;

        public PublicContactsController(IMailsProvider provider)
        {
            _provider = provider;
        }

        [HttpPost]
        [Route("create")]
        public async Task<IActionResult> Create([FromBody] CreateMailDto createMailDto)
        {
            await _provider.Create(createMailDto);

            return Ok();
        }
    }
}
