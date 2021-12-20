using MovieMaker.Service.Model.Events.Bll;
using MovieMaker.Service.Model.Events.Di;

namespace MovieMaker.Service.Provider.Di
{
    public interface IEventProvider
    {
        Task<IEvent> Create(CreateEventParams data);

        void Delete(Guid id);

        Task<IEnumerable<IEvent>> GetAll();

        Task<IEvent> GetById(Guid id);

        Task<IEvent> Update(Guid id, UpdateEventParams data);
    }
}
