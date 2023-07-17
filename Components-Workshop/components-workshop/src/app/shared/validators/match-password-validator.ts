import { ValidatorFn, FormGroup } from '@angular/forms';

export function matchPasswordsValidator(
  passwordControlOne: string,
  passwordControlTwo: string
): ValidatorFn {
  return (control) => {
    const group = control as FormGroup;
    const passControl1 = group.get(passwordControlOne);
    const passControl2 = group.get(passwordControlTwo);


    return passControl1?.value === passControl2?.value ? null : {
        matchPasswordsValidator: true
    }
  };
}
