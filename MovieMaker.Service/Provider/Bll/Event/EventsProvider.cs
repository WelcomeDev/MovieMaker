using Microsoft.EntityFrameworkCore;

using MovieMaker.Service.Model.Events.Bll;
using MovieMaker.Service.Model.Events.Di;
using MovieMaker.Service.Provider.Di;

namespace MovieMaker.Service.Provider.Bll.Event
{
    public class EventsProvider : IEventProvider
    {
        private readonly EventsDbContext _context;

        public EventsProvider()
        {
            _context = new EventsDbContext();
        }

        public async Task<IEvent> Create(CreateEventParams data)
        {
            var eventInstance = await _context.Events.AddAsync(new Event(data));
            await _context.SaveChangesAsync();
            return eventInstance.Entity;
        }

        public void Delete(Guid id)
        {
            var instance = GetInstance(id);
            _context.Remove(instance);
        }

        private async Task<Event> GetInstance(Guid id)
        {
            return await _context.Events.SingleAsync(x => x.Id.Equals(id));
        }

        public async Task<IEnumerable<IEvent>> GetAll()
        {
            return await _context.Events.AsNoTracking()
                                        .ToListAsync();
        }

        public async Task<IEvent> GetById(Guid id)
        {
            return await _context.Events.AsNoTracking()
                                        .SingleOrDefaultAsync(x => x.Id.Equals(id));
        }

        public async Task<IEvent> Update(Guid id, UpdateEventParams data)
        {
            var eventEntity = await GetInstance(id);

            eventEntity.Name = data.Name;
            eventEntity.Description = data.Description;
            eventEntity.VideoUrl = data.VideoUrl;
            eventEntity.Client = data.Client;
            eventEntity.Date = data.Date;
            eventEntity.Category = data.Category;
            eventEntity.PreviewImg = data.PreviewImg;

            await _context.SaveChangesAsync();
            return eventEntity;
        }
    }
}
