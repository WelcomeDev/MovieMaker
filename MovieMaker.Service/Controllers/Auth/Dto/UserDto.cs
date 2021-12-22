using MovieMaker.Service.Model.Auth;

namespace MovieMaker.Service.Controllers.Auth.Dto
{
    public class UserDto
    {
        public string Username { get; set; }

        public Authority Authority { get; set; }
    }
}
