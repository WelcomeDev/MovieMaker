using Microsoft.EntityFrameworkCore;

using MovieMaker.Service.Model.Auth;
using MovieMaker.Service.Provider.Di;

namespace MovieMaker.Service.Provider.Bll.Auth
{
    public class AuthProvider : IAuthProvider
    {
        private readonly AuthDbContext _context;
        public AuthProvider()
        {
            _context = new AuthDbContext();
            if (_context.Users.Count() == 0)
                AuthInitializer.Initialize(_context);
        }

        public async Task<User> CheckExistance(string username)
        {
            return await _context.Users.SingleOrDefaultAsync(x => x.Username.Equals(username));
        }
    }
}
