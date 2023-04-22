import {Component, OnInit} from '@angular/core';
import {CompassAPIService} from "../services/compassapi/compass-api.service";
import {NbThemeService} from "@nebular/theme";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'OSINT-compass-portal-angular';

  isDarkTheme = false;

  data: any;
  isLoading: any;
  constructor( private compassAPIService : CompassAPIService,
               private themeService: NbThemeService) { }
  ngOnInit() {

  }

  onSearchStart(event: { term: string, endpoint: string }) {
    this.isLoading = true;
    this.compassAPIService.getEndpointData(event.term, event.endpoint).subscribe({
      next: data => {
        this.data=data;
        console.log('Endpoint data:', data);
        this.isLoading = false;
        },
      error: error => console.error('Error fetching Endpoint data:', error),
      complete: () => console.log('Endpoint data fetching completed')
    });
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const theme = this.isDarkTheme ? 'dark' : 'default';
    this.themeService.changeTheme(theme);

  }

}
