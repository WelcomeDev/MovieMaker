using MovieMaker.Service.Model.Events.Di;

using System.ComponentModel.DataAnnotations;

namespace MovieMaker.Service.Model.Events.Bll
{
    public class CreateEventParams : IEventCreate
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string VideoUrl { get; set; }
        public string Client { get; set; }
        public bool IsShown { get; set; }
        [Required]
        public DateTime Date { get; set; }
        public byte[] PreviewImg { get; set; }
        public string Category { get; set; }
    }
}
