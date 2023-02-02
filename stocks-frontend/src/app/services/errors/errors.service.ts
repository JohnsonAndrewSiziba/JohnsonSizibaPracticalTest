import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import Swal from 'sweetalert2';
import {HttpErrorResponse} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  constructor() { }


  public handleError<T>(operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
