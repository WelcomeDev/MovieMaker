using MovieMaker.Service.Model.Mails.Di;

namespace MovieMaker.Service.Controllers.Mails.Dto
{
    public class MailDto: IMail
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public string Message { get; set; }

        public DateTime CreatedDate { get; set; }

        public bool IsAnswered { get; set; }
    }
}
