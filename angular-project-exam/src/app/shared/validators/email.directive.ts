import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Validator, ValidationErrors, AbstractControl } from '@angular/forms';
import { emailValidator } from './email-validator';

@Directive({
  selector: '[appEmail]',
})
export class EmailDirective implements Validator, OnChanges {

  @Input() appEmail: string[] = []

  constructor() {}
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return null;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // emailValidator() {}
  }
}
