import { Injectable } from '@angular/core';
import {ErrorsService} from "../errors/errors.service";
import {HttpClient} from "@angular/common/http";
import {StockDto} from "../../interfaces/dtos/stock-dto";
import {catchError, Observable, tap} from "rxjs";
import {serverUrl} from "../../serverUrl";
import {StockValuesDto} from "../../interfaces/dtos/stock-values-dto";
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient, private errorsService: ErrorsService) { }

  getStocks(): Observable<StockDto[]> {
    Swal.showLoading();

    return this.http.get<StockDto[]>(serverUrl)
      .pipe(
        tap((dto: StockDto[]) => {
          Swal.close();
        }),
        catchError(error => {
          Swal.close();
          return this.errorsService.handleError<StockDto[]>('getting data from server', [])(error);
        })
      );
  }


  getStockValuesByStockId(id: number): Observable<StockValuesDto[]> {
    return this.http.get<StockValuesDto[]>(serverUrl + "/" + id + "/values")
      .pipe(
        tap((dto: StockValuesDto[]) => {}),
        catchError(this.errorsService.handleError<StockValuesDto[]>('getting data from server', []))
      );
  }

}
