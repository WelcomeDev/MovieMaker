
using System.ComponentModel.DataAnnotations;

namespace MovieMaker.Service.Controllers.Mails.Dto
{
    public class CreateMailDto
    {
        [Required]
        [RegularExpression(@"([a-яА-Я]{2,})+")]
        [MaxLength(30)]
        public string Name { get; set; }

        [Required]
        [RegularExpression(@"^\S+@\S+\.\S+$")]
        public string Email { get; set; }

        [Required]
        [Range(25, 512)]
        public string Message { get; set; }
    }
}
