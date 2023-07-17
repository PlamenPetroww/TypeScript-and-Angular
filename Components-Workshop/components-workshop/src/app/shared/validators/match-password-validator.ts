import { ValidatorFn } from '@angular/forms';

export function matchPasswordsValidator(
  passwordOneValue: string,
  passwordTwoValue: string
): ValidatorFn {
  return (control) => {
    return null;
  };
}
