using Newtonsoft.Json;

namespace WebAPI.Models;

public class StockValue
{
    public int Id { get; set; }
    public int StockId { get; set; }
    public DateTime Date { get; set; }
    public decimal Value { get; set; }
    
    [JsonProperty("stock_id")]
    private int StockIdFromJson { set { StockId = value; } }
}