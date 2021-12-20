namespace MovieMaker.Service.Model.Mails.Di
{
    public interface IMailCreate
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }
    }
}
