using MovieMaker.Service.Model.Di;

namespace MovieMaker.Service.Provider.Di
{
    public interface IAsyncProvider<TData, TCreate, TUpdate>
    {
        Task<TData> GetById(Guid id);

        Task<TData> Create(TCreate data);

        void Delete(Guid id);

        Task<IEnumerable<TData>> GetAll();

        Task<TData> Update(Guid id, TUpdate data);
    }
}
