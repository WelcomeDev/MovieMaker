using Microsoft.EntityFrameworkCore;

using MovieMaker.Service.Model.Mails.Bll;

namespace MovieMaker.Service.Provider.Bll.Mail
{
    public class MailsDbContext : DbContext
    {
        public DbSet<UserMail> Mails { get; set; }

        public MailsDbContext()
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=mailsdb;Trusted_Connection=True;MultipleActiveResultSets=true");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<UserMail>()
                .Property(x => x.CreatedDate)
                .HasDefaultValueSql("GETDATE()");
        }
    }
}
