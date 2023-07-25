import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ice'
})
export class IcePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
