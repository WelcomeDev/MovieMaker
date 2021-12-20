using Microsoft.AspNetCore.Mvc;

using MovieMaker.Service.Controllers.Mails.Dto;

namespace MovieMaker.Service.Controllers.Mails
{
    [ApiController]
    [Route("api/mail")]
    public class PublicContactsController : ControllerBase
    {
        [HttpPost]
        [Route("create")]
        public async Task<IActionResult> Create([FromBody] CreateMailDto createMailDto)
        {


            return Ok();
        }
    }
}
