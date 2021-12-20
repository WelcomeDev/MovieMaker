using MovieMaker.Service.Model.Auth;

namespace MovieMaker.Service.Provider.Di
{
    public interface IAuthProvider
    {
        Task<User> CheckExistance(string username);
    }
}
