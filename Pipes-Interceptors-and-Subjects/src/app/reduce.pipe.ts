import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  pure: true
  //pure: false => not pure function will re-render
  //pure: true => pure function will be memoized - Default
})
export class ReducePipe<T> implements PipeTransform {
  transform(
    array: T[],
    reduceFn: (acc: any, curr: T) => any,
    initialValue: T
  ): unknown {
    // console.log('Involked from reducePipe')
    return array.reduce(reduceFn, initialValue);
  }
}
