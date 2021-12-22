using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

using MovieMaker.Service.Model.Auth;

namespace MovieMaker.Service.Provider.Bll.Auth
{
    public sealed class AuthDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=movie_maker_auth;Trusted_Connection=True;MultipleActiveResultSets=true");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .Property(x => x.Authority)
                .HasConversion(new EnumToStringConverter<Authority>());

            base.OnModelCreating(modelBuilder);
        }
    }
}
