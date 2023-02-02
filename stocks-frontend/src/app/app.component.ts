import { Component } from '@angular/core';
import {StocksService} from "./services/stocks/stocks.service";
import {StockDto} from "./interfaces/dtos/stock-dto";
import {StockValuesDto} from "./interfaces/dtos/stock-values-dto";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stocks-frontend';

  public stocksList: StockDto[] = [];
  public selectedStock?: StockDto;
  public selectedStockValuesList: StockValuesDto[] = [];

  searchTerm: string = "";

  stocksListOrder = 'stock';
  stocksListOrderReverse = false;

  stockValuesOrder = 'date';
  stockValuesOrderReverse = false;




  constructor(private stocksService: StocksService) {

  }

  ngOnInit(): void {
    this.getStocks();
  }

  private getStocks() {
    this.stocksService.getStocks().subscribe((stocks: StockDto[]) => {
      this.stocksList = stocks;
      this.selectedStock = stocks[0];
      this.getStockValuesByStockId(this.selectedStock.id);
    });
  }

  private getStockValuesByStockId(id: number) {
    this.stocksService.getStockValuesByStockId(id).subscribe((stockValues: StockValuesDto[]) => {
      this.selectedStockValuesList = stockValues;
    });
  }

  updateSearchTerm(event: any) {
    this.searchTerm = event.target.value;
  }


  stocksListSort(property: string) {
    if (this.stocksListOrder === property) {
      this.stocksListOrderReverse = !this.stocksListOrderReverse;
    } else {
      this.stocksListOrder = property;
      this.stocksListOrderReverse = false;
    }
  }

  stockValuesSort(property: string) {
    if (this.stockValuesOrder === property) {
      this.stockValuesOrderReverse = !this.stockValuesOrderReverse;
    } else {
      this.stockValuesOrder = property;
      this.stockValuesOrderReverse = false;
    }
  }

  selectStock(stock: any) {
    this.selectedStock = stock;
    this.getStockValuesByStockId(stock.id);
  }

  // download selected values as json file with the name export.json
  exportValuesAsJson() {

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.selectedStockValuesList));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", "export.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

}
