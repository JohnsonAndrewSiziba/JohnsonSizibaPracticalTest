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

      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${error.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
      }
      Swal.fire({
        title: `Error while ${operation}`,
        text: errorMessage,
        icon: 'error'
      });

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
