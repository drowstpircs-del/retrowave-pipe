import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatText'
})
export class FormatTextPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    
    // Split the string into individual characters and join them with a space
    return value.split('').join(' ');
  }
}
