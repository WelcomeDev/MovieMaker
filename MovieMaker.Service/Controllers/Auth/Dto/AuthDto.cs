using System.ComponentModel.DataAnnotations;

namespace MovieMaker.Service.Controllers.Auth.Dto
{
    public class AuthDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
