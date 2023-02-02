using WebAPI.Models;

namespace WebAPI.Repositories;

public interface IStockRepository
{
    Task<IEnumerable<StockModel>> GetAllStocks();
    Task<StockModel> GetStockById(int id);
    Task<IEnumerable<StockValue>> GetStockValuesByStockId(int stockId);
}