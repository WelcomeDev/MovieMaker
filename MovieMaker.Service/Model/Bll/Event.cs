using MovieMaker.Service.Model.Di;

namespace MovieMaker.Service.Model.Bll
{
    public class Event : IEvent
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string VideoUrl { get; set; }
        public bool IsShown { get; set; }
        public string Client { get; set; }
        public DateTime Date { get; set; }
        public string Category { get; set; }
        public byte[] PreviewImg { get; set; }

        public Event()
        {

        }

        public Event(IEventCreate eventCreate)
        {
            Name = eventCreate.Name;
            Description = eventCreate.Description;
            VideoUrl = eventCreate.VideoUrl;
            IsShown = eventCreate.IsShown;
            Client = eventCreate.Client;
            Date = eventCreate.Date;
            Category = eventCreate.Category;
            PreviewImg = eventCreate.PreviewImg;
        }
    }
}
