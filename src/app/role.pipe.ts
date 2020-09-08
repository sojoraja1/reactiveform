import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {
  transform(value: String, ...args: unknown[]): String {
    console.log(...args);
    
    return value==='sundar'?"admin":"user";
  }

}
