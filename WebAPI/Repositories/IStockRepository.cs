using WebAPI.Models;

namespace WebAPI.Repositories;

public interface IStockRepository
{
    Task<IEnumerable<StockModel>> GetAllStocks();
    Task<StockModel> GetStockById(int id);
    Task<IEnumerable<StockValue>> GetStockValuesByStockId(int stockId);
    Task<StockModel> AddStock(StockModel stockModel);
    Task<StockValue> AddStockValue(StockValue stockValue);
    Task<StockModel> UpdateStock(StockModel stockModel);
    Task<StockValue> UpdateStockValue(StockValue stockValue);
    Task DeleteStock(StockModel stockModel);
    Task DeleteStockValue(StockValue stockValue);
}