import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const matchPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  // Si ambos campos existen y sus valores son distintos, asignamos el error
  if (password && confirmPassword && password.value !== confirmPassword.value) {
    // Seteamos el error en el input específico de confirmPassword para que la UI (Material) reaccione
    confirmPassword.setErrors({ passwordMismatch: true });
    return { passwordMismatch: true };
  }

  // Si todo está bien y el campo tenía el error previo, lo limpiamos
  if (confirmPassword?.hasError('passwordMismatch')) {
    delete confirmPassword.errors?.['passwordMismatch'];
    if (!Object.keys(confirmPassword.errors || {}).length) {
      confirmPassword.setErrors(null);
    }
  }

  return null;
};