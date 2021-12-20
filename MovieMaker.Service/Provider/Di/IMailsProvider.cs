using MovieMaker.Service.Model.Mails.Di;

namespace MovieMaker.Service.Provider.Di
{
    public interface IMailsProvider
{
        Task<IMail> Create(IMailCreate data);

        Task MarkAnswered(Guid id);

        Task<IEnumerable<IMail>> GetUnAnswered();
    }
}
