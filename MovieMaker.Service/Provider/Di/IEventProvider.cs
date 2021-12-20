using MovieMaker.Service.Model.Events.Bll;
using MovieMaker.Service.Model.Events.Di;

namespace MovieMaker.Service.Provider.Di
{
    public interface IEventProvider : IAsyncProvider<IEvent, CreateEventParams, UpdateEventParams>
    {
    }
}
