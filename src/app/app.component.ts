import {Component, OnInit} from '@angular/core';
import {CompassAPIService} from "../services/compassapi/compass-api.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'OSINT-compass-portal-angular';
  data: any;
  constructor( private compassAPIService : CompassAPIService) { }

  ngOnInit() {

  }

  onSearchStart(event: { term: string, endpoint: string }) {
    this.compassAPIService.getEndpointData(event.term, event.endpoint).subscribe({
      next: data => {
        this.data=data;
        console.log('Endpoint data:', data);
        },
      error: error => console.error('Error fetching Endpoint data:', error),
      complete: () => console.log('Endpoint data fetching completed')
    });
  }
}
