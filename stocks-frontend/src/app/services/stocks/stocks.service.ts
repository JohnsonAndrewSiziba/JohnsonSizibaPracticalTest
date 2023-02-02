import { Injectable } from '@angular/core';
import {ErrorsService} from "../errors/errors.service";
import {HttpClient} from "@angular/common/http";
import {StockDto} from "../../interfaces/dtos/stock-dto";
import {catchError, Observable, tap} from "rxjs";
import {serverUrl} from "../../serverUrl";
import {StockValuesDto} from "../../interfaces/dtos/stock-values-dto";

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient, private errorsService: ErrorsService) { }

  // endpoints


  // get all stocks from the server
  getStocks(): Observable<StockDto[]> {
    return this.http.get<StockDto[]>(serverUrl)
      .pipe(
        tap((dto: StockDto[]) => {}),
        catchError(this.errorsService.handleError<StockDto[]>('getStocks', []))
      );
  }

  // get stock details by stock id
  getStockValuesByStockId(id: number): Observable<StockValuesDto[]> {
    return this.http.get<StockValuesDto[]>(serverUrl + "/" + id + "/values")
      .pipe(
        tap((dto: StockValuesDto[]) => {}),
        catchError(this.errorsService.handleError<StockValuesDto[]>('getStockValuesByStockId', []))
      );
  }

}
