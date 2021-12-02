using MovieMaker.Service.Model.Bll;
using MovieMaker.Service.Model.Di;

namespace MovieMaker.Service.Provider.Di
{
    public interface IEventProvider : IAsyncProvider<IEvent, CreateEventParams, UpdateEventParams>
    {
    }
}
