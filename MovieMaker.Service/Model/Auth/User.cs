using System.ComponentModel.DataAnnotations;

namespace MovieMaker.Service.Model.Auth
{
    public class User
    {
        [Key]
        public string Username { get; set; }

        public string Password { get; set; }

        public Authority Authority { get; set; }
    }
}
