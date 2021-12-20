using Microsoft.AspNetCore.Mvc;

namespace MovieMaker.Service.Controllers.Auth
{
    [ApiController]
    [Route("api")]
    public class AuthController : ControllerBase
    {
        [HttpPost]
        [Route("auth")]
        public async Task<IActionResult> Auth()
        {
            return Ok();
        }

        [HttpPost]
        [Route("whoami")]
        public async Task<IActionResult> WhoAmI()
        {
            return Ok();
        }
    }
}
