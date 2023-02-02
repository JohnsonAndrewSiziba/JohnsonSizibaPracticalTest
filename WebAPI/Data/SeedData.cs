using Newtonsoft.Json;
using WebAPI.Models;


using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;

namespace WebAPI.Data;

public static class SeedData
{
    public static void Initialize(IServiceProvider serviceProvider)
    {
        var context = serviceProvider.GetRequiredService<AppDbContext>();

        if (context.Stocks.Any())
        {
            return;
        }

        var filePath = Path.Combine(Directory.GetCurrentDirectory(), "stocks.json");
        var stocksJson = System.IO.File.ReadAllText(filePath);
        var stocks = JsonConvert.DeserializeObject<List<StockModel>>(stocksJson);

        filePath = Path.Combine(Directory.GetCurrentDirectory(), "stockValues.json");
        var stockValuesJson = System.IO.File.ReadAllText(filePath);
        var stockValues = JsonConvert.DeserializeObject<List<StockValue>>(stockValuesJson);

        context.Stocks.AddRange(stocks);
        context.StockValues.AddRange(stockValues);

        context.SaveChanges();
    }
}
