import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";

const baseURL = "https://osint-compass-api.onrender.com";
const apikey = "mysuperkey";

@Injectable({
  providedIn: 'root'
})

export class CompassAPIService {

  constructor(private http: HttpClient) { };

  getEndpointData(term: String, endpoint: String): Observable<any> {
    const url = baseURL + '/' + endpoint + '?' + endpoint + '=' + term + '&apikey=' + apikey;

    return this.http.get<any>(url).pipe(
      map(data => {
        console.log(data);
        return data;
      }),
      catchError((error: any) => {
        console.error('There was an error!', error);
        return throwError(error);
      })
    );

  }

}
