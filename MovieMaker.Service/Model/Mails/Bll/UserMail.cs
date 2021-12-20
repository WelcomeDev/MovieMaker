using MovieMaker.Service.Model.Mails.Di;

using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MovieMaker.Service.Model.Mails.Bll
{
    public class UserMail : IMail
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }
        public DateTime CreatedDate { get; set; }
        public bool IsAnswered { get; set; }

        public UserMail()
        {

        }

        public void MarkAnswered()
        {
            IsAnswered = true;
        }

        public UserMail(IMailCreate mailCreate)
        {
            Name = mailCreate.Name;
            Email = mailCreate.Email;
            Message = mailCreate.Message;
            IsAnswered = false;
        }
    }
}
