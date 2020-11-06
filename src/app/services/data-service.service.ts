import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService<T> {

  constructor(@Inject(String) private configURL: string, private http: HttpClient) { }

  get(): Observable<T>
  {
    return this.http.get<T>(this.configURL)//.pipe(retry(1), catchError(this.handleError));
  }


  post(model: T): Observable<T>
  {
    return this.http.post<T>(this.configURL, model)

    //.pipe(retry(1), catchError(this.handleError));
  }


  put(id, model: T): Observable<T>
  {
    return this.http.put<T>(this.configURL + `/${id}`, model)//.pipe(retry(1), catchError(this.handleError));
  }


  getById(modelId: String): Observable<T>
  {
    return this.http.get<T>(this.configURL + `/${modelId}`)//.pipe(retry(1), catchError(this.handleError));
  }


  delete(modelId: string): Observable<T>
  {
    return this.http.delete<T>(this.configURL + `/${modelId}`)//.pipe(retry(1), catchError(this.handleError));
  }
}
