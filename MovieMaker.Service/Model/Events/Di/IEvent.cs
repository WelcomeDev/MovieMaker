namespace MovieMaker.Service.Model.Events.Di
{
    public interface IEvent
    {
        Guid Id { get; set; }

        string Name { get; set; }

        string Description { get; set; }

        string VideoUrl { get; set; }

        bool IsShown { get; set; }

        string Client { get; set; }

        DateTime Date { get; set; }

        byte[] PreviewImg { get; set; }

        string Category { get; set; }
    }
}
