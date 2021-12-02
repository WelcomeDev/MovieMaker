namespace MovieMaker.Service.Model.Di
{
    public interface IEventCreate
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public string VideoUrl { get; set; }

        public string Client { get; set; }

        public bool IsShown { get; set; }

        public DateTime Date { get; set; }

        public byte[] PreviewImg { get; set; }

        public string Category { get; set; }
    }
}
