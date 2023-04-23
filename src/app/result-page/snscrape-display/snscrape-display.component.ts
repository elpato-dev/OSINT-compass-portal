import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-snscrape-display',
  templateUrl: './snscrape-display.component.html',
  styleUrls: ['./snscrape-display.component.scss']
})
export class SnscrapeDisplayComponent {
  @Input() resultData: any;

}
