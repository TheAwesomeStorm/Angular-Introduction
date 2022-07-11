import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

export const SafePasswordValidator: ValidatorFn = (control: AbstractControl) => {
  const userName = control.get('userName')?.value;
  const password = control.get('password')?.value;

  if (userName.trim() + password.trim()) {
    return userName !== password ? null : {passwordNotSafe: true}
  }

  return null;
};
