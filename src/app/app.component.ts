import {Component, OnInit, TemplateRef, ViewEncapsulation} from '@angular/core';
import {CompassAPIService} from "../services/compassapi/compass-api.service";
import {NbDialogService, NbThemeService} from "@nebular/theme";
import {AlertSubscribeComponent} from "./alert-subscribe/alert-subscribe.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit{
  title = 'OSINT-compass Portal';

  isDarkTheme = false;

  searchData: any;
  resultData: any;
  isLoading: any;
  constructor( private compassAPIService : CompassAPIService,
               private themeService: NbThemeService,
               private dialogService: NbDialogService) { }
  ngOnInit() {

  }

  onSearchStart(event: { term: string, endpoint: string, display: string}) {
    this.isLoading = true;

    this.searchData = {
      endpoint: event.endpoint,
      term: event.term,
      display: event.display
    }

    this.compassAPIService.getEndpointData(event.term, event.endpoint).subscribe({
      next: data => {
        this.resultData=data;
        console.log('Endpoint data:', data);
        this.isLoading = false;
        },
      error: error => {
        console.error('Error fetching Endpoint data:', error);
        this.isLoading = false;
      },
      complete: () => {
        console.log('Endpoint data fetching completed');
        this.isLoading = false;
      }
    });
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const theme = this.isDarkTheme ? 'dark' : 'default';
    this.themeService.changeTheme(theme);
  }

  openSubscribeDialog() {
    this.dialogService.open(AlertSubscribeComponent);
  }
}
