import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  isLoading = false;

  hidePassword = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {

    this.loginForm = this.fb.group({

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ]

    });

  }

  onSubmit(): void {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({

      next: () => {

        this.isLoading = false;

        this.snackBar.open(
          '¡Login exitoso!',
          'Cerrar',
          { duration: 3000 }
        );

        // 🔥 Mejor redirigir a principal
        this.router.navigate(['/principal']);

      },

      error: (err) => {

        this.isLoading = false;

        const errorMessage =
          err.error?.message ||
          'Error al iniciar sesión. Verifica tus credenciales.';

        this.snackBar.open(
          errorMessage,
          'Cerrar',
          {
            duration: 4000,
            panelClass: ['error-snackbar']
          }
        );

      }

    });

  }

}