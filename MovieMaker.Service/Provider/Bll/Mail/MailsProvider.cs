using Microsoft.EntityFrameworkCore;

using MovieMaker.Service.Model.Mails.Bll;
using MovieMaker.Service.Model.Mails.Di;
using MovieMaker.Service.Provider.Di;

namespace MovieMaker.Service.Provider.Bll.Mail
{
    public class MailsProvider : IMailsProvider
    {
        private readonly MailsDbContext _context;

        public MailsProvider()
        {
            _context = new MailsDbContext();
        }

        public async Task<IMail> Create(IMailCreate data)
        {
            var result = await _context.AddAsync(new UserMail(data));
            await _context.SaveChangesAsync();
            return result.Entity;
        }

        public async Task<IEnumerable<IMail>> GetUnAnswered()
        {
            return await _context.Mails.AsNoTracking()
                                       .Where(item => !item.IsAnswered)
                                       .ToListAsync();
        }

        public async Task MarkAnswered(Guid id)
        {
            var mail = await _context.Mails.SingleAsync(item => item.Id == id);
            mail.MarkAnswered();
            await _context.SaveChangesAsync();
        }
    }
}
