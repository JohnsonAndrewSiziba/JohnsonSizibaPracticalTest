import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStocks'
})
export class FilterStocksPipe implements PipeTransform {
  transform(stocks: any[], searchTerm: string): any[] {
    if (!stocks) { return []; }
    if (!searchTerm) { return stocks; }
    searchTerm = searchTerm.toLowerCase();
    return stocks.filter(stock => {
      return stock.stock.toLowerCase().includes(searchTerm) ||
        stock.industry.toLowerCase().includes(searchTerm) ||
        stock.currencyCode.toLowerCase().includes(searchTerm) ||
        stock.sector.toLowerCase().includes(searchTerm);
    });
  }
}
