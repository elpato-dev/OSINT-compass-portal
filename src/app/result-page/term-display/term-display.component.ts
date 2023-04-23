import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-term-display',
  templateUrl: './term-display.component.html',
  styleUrls: ['./term-display.component.scss']
})
export class TermDisplayComponent {
  @Input() resultData: any;

}
