using AutoMapper;

using Microsoft.AspNetCore.Mvc;

using MovieMaker.Service.Controllers.Auth.Dto;
using MovieMaker.Service.Provider.Bll.Auth;
using MovieMaker.Service.Provider.Di;

namespace MovieMaker.Service.Controllers.Auth
{
    [ApiController]
    [Route("api")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthProvider _authProvider;
        private readonly IMapper _mapper;
        private readonly PassCipher _passCipher = PassCipher.GetInstance();

        public AuthController(IAuthProvider authProvider, IMapper mapper)
        {
            _authProvider = authProvider;
            _mapper = mapper;
        }

        [HttpPost]
        [Route("auth")]
        public async Task<IActionResult> Auth([FromBody] AuthDto authDto)
        {
            var user = await _authProvider.CheckExistance(authDto.Username);
            if (user == null)
                return NotFound();

            if (_passCipher.Decipher(user.Password).Equals(authDto.Password))
                return Ok(_mapper.Map<UserDto>(user));

            throw new Exception("Invalid username or password");
        }
    }
}
