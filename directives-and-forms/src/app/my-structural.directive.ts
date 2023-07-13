import { Directive, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appMyStructural]',
})
export class MyStructuralDirective implements OnChanges {
  @Input() appMyStructural: boolean = false;

  constructor() {}


  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.appMyStructural);
  }
}
