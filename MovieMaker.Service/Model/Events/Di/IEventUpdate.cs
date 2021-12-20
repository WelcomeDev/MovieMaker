namespace MovieMaker.Service.Model.Events.Di
{
    public interface IEventUpdate
    {
        string Name { get; set; }

        string Description { get; set; }

        string VideoUrl { get; set; }

        string Client { get; set; }

        DateTime Date { get; set; }

        //TODO: figure out how to store Img
        byte[] PreviewImg { get; set; }

        string Category { get; set; }
    }
}
