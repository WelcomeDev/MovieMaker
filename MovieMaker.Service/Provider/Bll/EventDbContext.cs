using Microsoft.EntityFrameworkCore;

using MovieMaker.Service.Model.Events.Bll;

namespace MovieMaker.Service.Provider.Bll
{
    public class EventDbContext : DbContext
    {
        public DbSet<Event> Events { get; set; }

        public EventDbContext()
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=eventsdb;Trusted_Connection=True;MultipleActiveResultSets=true");
        }
    }
}
