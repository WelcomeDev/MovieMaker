using MovieMaker.Service.Model.Events.Di;

using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MovieMaker.Service.Model.Events.Bll
{
    public class MovieEvent : IEvent
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string VideoUrl { get; set; }
        public bool IsShown { get; set; }
        public string Client { get; set; }
        public DateTime Date { get; set; }
        public string Category { get; set; }

        public MovieEvent()
        {

        }

        public MovieEvent(IEventCreate eventCreate)
        {
            Name = eventCreate.Name;
            Description = eventCreate.Description;
            VideoUrl = eventCreate.VideoUrl;
            IsShown = eventCreate.IsShown;
            Client = eventCreate.Client;
            Date = eventCreate.Date;
            Category = eventCreate.Category;
        }
    }
}
