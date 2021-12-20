using MovieMaker.Service.Model.Events.Di;

namespace MovieMaker.Service.Controllers.Event.Dto
{
    public class EventDto : IEvent
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string VideoUrl { get; set; }
        public bool IsShown { get; set; }
        public string Client { get; set; }
        public DateTime Date { get; set; }
        public byte[] PreviewImg { get; set; }
        public string Category { get; set; }
    }
}
