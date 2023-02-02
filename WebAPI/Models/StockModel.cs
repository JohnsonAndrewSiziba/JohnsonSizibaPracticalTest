using Newtonsoft.Json;

namespace WebAPI.Models;

public class StockModel
{
    public int Id { get; set; }
    public string? Stock { get; set; }
    public string? Industry { get; set; }
    public string? Sector { get; set; }
    public string? CurrencyCode { get; set; }
    public List<StockValue>? StockValues { get; set; }
    
    [JsonProperty("currency_code")]
    private string CurrencyCodeFromJson { set { CurrencyCode = value; } }

}