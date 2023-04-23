import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'prettySentiment'
})
export class PrettySentimentPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value: number, ...args: unknown[]): unknown {
    let output: string;
    switch (true) {
      case (value < -0.25):
        output = 'Strong negative';
        break;
      case (value >= -0.25 && value < -0.1):
        output = 'Slightly negative';
        break;
      case (value > 0.25):
        output = 'Strong positive';
        break;
      case (value <= 0.25 && value > 0.1):
        output = 'Slightly positive';
        break;
      default:
        output = 'Neutral';
        break;
    }

    return  this.sanitizer.bypassSecurityTrustHtml(output);
  }

}
