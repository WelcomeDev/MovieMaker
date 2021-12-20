using Microsoft.EntityFrameworkCore;

using MovieMaker.Service.Model.Events.Bll;

namespace MovieMaker.Service.Provider.Bll.Event
{
    public class EventsDbContext : DbContext
    {
        public DbSet<MovieEvent> Events { get; set; }

        public EventsDbContext()
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=eventsdb;Trusted_Connection=True;MultipleActiveResultSets=true");
        }
    }
}
