import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent {
  @Input() resultData: any;
  @Input() searchData: {
    term: string;
    endpoint: string;
    display: string;
  } | undefined;

  protected readonly Object = Object;
}
