import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'OSINT-compass-portal-angular';
  data: any;
  constructor(private http: HttpClient) { }


  ngOnInit() {

  }

  onSearchStart(event: { term: string, category: string }) {
    this.http.get<any>('https://osint-compass-api.onrender.com/term?term='+ event.term +'&apikey=mysuperkey').subscribe({
      next: data => {
        this.data = data;
        console.log(this.data);
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })
  }
}
