import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clickableUrl'
})
export class ClickableUrlPipe implements PipeTransform {

  transform(value: string): string {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return value.toString().replace(urlRegex, '<a href="$1" target="_blank">$1</a>');
  }

}
