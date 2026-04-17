import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, User } from '../../core/services/auth/auth.service';
import { ProfileService, UpdateProfileRequest } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  user: User | null = null;
  loading = false;
  successMessage = '';
  errorMessage = '';

  passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private profileService: ProfileService,
    private router: Router
  ) {
    this.profileForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.pattern(this.passwordPattern)]],
      confirmPassword: ['']
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    this.user = this.authService.currentUserValue;
    if (this.user) {
      this.loadProfile();
    }
  }

  loadProfile(): void {
    if (!this.user) return;
    this.loading = true;
    this.profileService.getProfile(this.user.id).subscribe({
      next: (userData) => {
        this.profileForm.patchValue({
          name: userData.name,
          email: userData.email
        });
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error al cargar el perfil';
        this.loading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.profileForm.invalid) return;

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const formValue = this.profileForm.value;
    const updateData: UpdateProfileRequest = {};

    if (formValue.name !== this.user?.name) {
      updateData.name = formValue.name;
    }
    if (formValue.email !== this.user?.email) {
      updateData.email = formValue.email;
    }
    if (formValue.password) {
      updateData.password = formValue.password;
    }

    if (Object.keys(updateData).length === 0) {
      this.errorMessage = 'No hay cambios para guardar';
      this.loading = false;
      return;
    }

    this.profileService.updateProfile(this.user!.id, updateData).subscribe({
      next: (updatedUser) => {
        // Actualizar el estado local del usuario
        this.authService['currentUserSubject'].next(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
        this.user = updatedUser;
        this.successMessage = 'Perfil actualizado correctamente';
        this.loading = false;
        // Limpiar campos de contraseña
        this.profileForm.patchValue({ password: '', confirmPassword: '' });
      },
      error: (error) => {
        this.errorMessage = error.error?.message || 'Error al actualizar el perfil';
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/principal']);
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: any } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password && confirmPassword && password !== confirmPassword ? { passwordMismatch: true } : null;
  }
}
