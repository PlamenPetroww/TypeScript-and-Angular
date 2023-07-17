import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { appEmailValidator } from './app-email-validator';

@Directive({
  selector: '[appEmail]',
})
export class AppEmailDirective implements Validator, OnChanges {

  @Input() appEmail: string[] = [];

  validator: ValidatorFn = () => null;

  constructor() {}

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }

  ngOnChanges(changes: SimpleChanges): void {
   const currentEmailChanges =  changes['appEmail'];
   if(currentEmailChanges) {

    this.validate = appEmailValidator(currentEmailChanges.currentValue);
   }

  }
}
