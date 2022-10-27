import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function PasswordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const longEnough = value.length >= 8;
    const hasBothCases = /([a-z].*[A-Z])|([A-Z].*[a-z])/.test(value);
    const hasDigitsAndLetters = /(?=.*[A-Za-z])(?=.*\d)/.test(value);
    const hasSpecialChars = /.[@$!%*#?&]/.test(value);

    if (!longEnough) {
      return { passRec: 'at least 8 characters' };
    } else if (!hasBothCases) {
      return { passRec: 'a mixture of both uppercase and lowercase letters' };
    } else if (!hasDigitsAndLetters) {
      return { passRec: 'a mixture of letters and numbers' };
    } else if (!hasSpecialChars) {
      return { passRec: 'inclusion of at least one special character, e.g., ! @ # ?' };
    }

    return null;
  };
}
