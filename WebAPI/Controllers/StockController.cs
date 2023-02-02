using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using WebAPI.Repositories;

namespace WebAPI.Controllers;

[Route("/api/[controller]")]
[ApiController]
public class StockController : ControllerBase
{
    private readonly StockRepository _repository;
    
    public StockController(StockRepository repository)
    {
        _repository = repository;
    }
    
    [HttpGet("{id}/values")]
    public async Task<ActionResult<IEnumerable<StockValue>>> GetStockValuesByStockId(int id)
    {
        var stockValues = await _repository.GetStockValuesByStockId(id);
        if (stockValues == null)
        {
            return NotFound();
        }
        return Ok(stockValues);
    }
    
    [HttpGet]
    public async Task<ActionResult<IEnumerable<StockModel>>> GetStocks()
    {
        var stocks = await _repository.GetAllStocks();
        // print all stocks
        foreach (var stock in stocks)
        {
            System.Console.WriteLine(stock.Stock);
        }
        return Ok(stocks);
    }
    
    [HttpGet("{id}")]
    public async Task<ActionResult<StockModel>> GetStock(int id)
    {
        var stock = await _repository.GetStockById(id);
        if (stock == null)
        {
            return NotFound();
        }
        return Ok(stock);
    }
    

}