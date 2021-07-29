import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noscript'
})
export class NoScriptPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let str = '';
    for (const char of value){
      if (char === '-') {
        str += ' ';
      } else {
        str += char;
      }
    }
    str += '  ';
    return str;
  }

}
