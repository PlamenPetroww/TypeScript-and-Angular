import { ValidatorFn } from '@angular/forms';

export function appEmailValidator(domains: string[]): ValidatorFn {
  //[^@]{6,}gmail\.(bg|com)$
  const domainStrigs = domains.join('|');
  const regExp = new RegExp(`[^@]{6,}gmail\.(${domainStrigs}$`);

  return (control) => {
    return control.value === '' || regExp.test(control.value)
      ? null
      : { appEmailValidator: true };
  };
}
