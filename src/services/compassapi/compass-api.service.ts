import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompassAPIService {

  constructor(private http: HttpClient) { }

  getEndpointData(): Observable<any> {
    const url = 'https://osint-compass-api.onrender.com/term?term=brazil&apikey=mysuperkey';
    return this.http.get(url);
  }

}
