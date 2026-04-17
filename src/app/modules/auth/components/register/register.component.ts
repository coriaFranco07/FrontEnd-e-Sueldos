import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { matchPasswordValidator } from '../../../auth/validators/match-password.validator'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  isLoading = false;

  hidePassword = true;
  hideConfirmPassword = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    // Inicializamos el formulario con la validación personalizada en la raíz del group
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: matchPasswordValidator }); // <-- Aplicación del custom validator
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    this.isLoading = true;
    // Extraemos los datos, omitiendo el confirmPassword ya que el backend no lo necesita
    const { confirmPassword, ...userData } = this.registerForm.value;

    this.authService.register(userData).subscribe({
      next: () => {
        this.isLoading = false;
        this.snackBar.open('¡Registro exitoso!', 'Cerrar', { duration: 3000 });
        this.router.navigate(['/']); // Redirigir al inicio o dashboard
      },
      error: (err) => {
        this.isLoading = false;
        const errorMessage = err.error?.message || 'Error al registrar el usuario. El correo podría ya estar en uso.';
        this.snackBar.open(errorMessage, 'Cerrar', { duration: 4000, panelClass: ['error-snackbar'] });
      }
    });
  }
}