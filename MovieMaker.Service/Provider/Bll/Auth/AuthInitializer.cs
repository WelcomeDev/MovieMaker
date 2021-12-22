using MovieMaker.Service.Model.Auth;

namespace MovieMaker.Service.Provider.Bll.Auth
{
    public static class AuthInitializer
    {
        public static void Initialize(AuthDbContext context)
        {
            context.Users.AddRange(new[]
            {
                new User
                {
                    Username = "Admin",
                    Authority = Authority.Admin,
                    Password = PassCipher.GetInstance().Cipher("1234")
                },
                new User
                {
                    Username = "Manager",
                    Authority = Authority.Manager,
                    Password = PassCipher.GetInstance().Cipher("1234")
                }
            });

            context.SaveChanges();
        }
    }
}
