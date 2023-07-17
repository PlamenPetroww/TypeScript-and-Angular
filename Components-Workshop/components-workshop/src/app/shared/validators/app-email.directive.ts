import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appEmail]',
})
export class AppEmailDirective implements Validator {

  

  constructor() {}

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return null;
  }
}
