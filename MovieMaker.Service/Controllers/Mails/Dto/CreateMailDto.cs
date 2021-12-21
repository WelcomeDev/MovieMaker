
using MovieMaker.Service.Model.Mails.Di;

using System.ComponentModel.DataAnnotations;

namespace MovieMaker.Service.Controllers.Mails.Dto
{
    public class CreateMailDto : IMailCreate
    {
        [Required]
        [RegularExpression(@"^(?![\s.]+$)[а-яА-Я\s.]*$")]
        public string Name { get; set; }

        [Required]
        [RegularExpression(@"^\S+@\S+\.\S+$")]
        public string Email { get; set; }

        [Required]
        [StringLength(512, MinimumLength = 25)]
        public string Message { get; set; }
    }
}
