using Newtonsoft.Json;
using WebAPI.Models;

namespace WebAPI.Repositories;

public class StockRepository: IStockRepository
{
    private List<StockModel> _stocks;
    private List<StockValue> _stockValues;

    public StockRepository()
    {
        // Deserialize the JSON files to get the data for stocks and stock values
        var filePath = Path.Combine(Directory.GetCurrentDirectory(), "stocks.json");
        var stocksJson = System.IO.File.ReadAllText(filePath);
        _stocks = JsonConvert.DeserializeObject<List<StockModel>>(stocksJson);

        filePath = Path.Combine(Directory.GetCurrentDirectory(), "stockValues.json");
        var stockValuesJson = System.IO.File.ReadAllText(filePath);
        _stockValues = JsonConvert.DeserializeObject<List<StockValue>>(stockValuesJson);
    }

    public async Task<IEnumerable<StockModel>> GetAllStocks()
    {
        return await Task.FromResult(_stocks);
    }

    public async Task<StockModel> GetStockById(int id)
    {
        return await Task.FromResult(_stocks.FirstOrDefault(s => s.Id == id));
    }

    public async Task<IEnumerable<StockValue>> GetStockValuesByStockId(int stockId)
    {
        return await Task.FromResult(_stockValues.Where(sv => sv.StockId == stockId));
    }
}