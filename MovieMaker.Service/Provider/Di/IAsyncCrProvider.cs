using System.Xml.Linq;

namespace MovieMaker.Service.Provider.Di
{
    public interface IAsyncCrProvider<TData, TCreate>
{
        Task<TData> GetById(Guid id);

        Task<TData> Create(TCreate data);


        Task<IEnumerable<TData>> GetAll();
    }
}
