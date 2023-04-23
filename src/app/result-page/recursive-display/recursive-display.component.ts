import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recursive-display',
  templateUrl: './recursive-display.component.html',
  styleUrls: ['./recursive-display.component.scss']
})
export class RecursiveDisplayComponent {
  @Input() resultData: any;

  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  isObject(value: any): boolean {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
  }

  getKeys(value: any): string[] {
    return Object.keys(value);
  }
}
