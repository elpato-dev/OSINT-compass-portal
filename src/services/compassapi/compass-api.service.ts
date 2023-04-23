import {HostBinding, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {NbGlobalPhysicalPosition, NbToastrService} from "@nebular/theme";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class CompassAPIService {

  constructor(private http: HttpClient,
              private toastrService: NbToastrService) { };

  private index: number = 0;

  @HostBinding('class')
  classes = 'example-items-rows';

  registerAlert(term: String, channel: String, contact: String, scoregt: any, scorelt: any) {
    const url = environment.baseURL + '/alert?apikey=' + environment.apikey;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const requestBody = {
      term: term,
      channel: channel,
      contact: contact,
      scoregt: scoregt,
      scorelt: scorelt
    };

    let positions = NbGlobalPhysicalPosition;

    this.http.post(url, requestBody, { headers }).subscribe(

      (response) => {
        console.log(response);
        this.showToast(positions.TOP_RIGHT, 'success', 'You will now recieve alerts.');
      },
      (error) => {
        console.error(error);
        this.showToast(positions.TOP_RIGHT, 'warning',  error.message);
      });
  }

  getEndpointData(term: String, endpoint: String): Observable<any> {
    const url = environment.baseURL + '/' + endpoint + '?' + endpoint + '=' + term + '&apikey=' + environment.apikey;

    return this.http.get<any>(url).pipe(
      map(data => {
        console.log(data);
        return data;
      }),
      catchError((error: any) => {
        console.error('There was an error!',  error.code + error.message);
        return throwError(error);
      })
    );

  }

  showToast(position: NbGlobalPhysicalPosition, status: string, response: string) {
    this.toastrService.show(status || 'Success', response, { position, status , duration : 4000});
  }

}
