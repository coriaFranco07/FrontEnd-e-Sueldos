import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize } from 'rxjs/operators';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { CreateUserRequest, UpdateUserRequest, User, UserService } from '../../services/user.service';

export interface UserFormDialogData {
  mode: 'create' | 'edit';
  user?: User;
}

@Component({
  selector: 'app-user-form-dialog',
  templateUrl: './user-form-dialog.component.html',
  styleUrls: ['./user-form-dialog.component.css']
})
export class UserFormDialogComponent implements OnInit {
  userForm: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;
  isLoading = false;
  isFetchingUser = false;
  readonly passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  readonly canManageRole: boolean;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<UserFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserFormDialogData
  ) {
    this.canManageRole = this.authService.currentUserValue?.role === 'admin';
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.pattern(this.passwordPattern)]],
      confirmPassword: [''],
      role: ['user', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    this.configureRoleControl();

    if (this.isEditMode) {
      this.configureEditMode();

      if (!this.data.user?.id) {
        this.snackBar.open('No se pudo identificar el usuario a editar', 'Cerrar', { duration: 3000 });
        this.dialogRef.close();
        return;
      }

      this.loadUserForEdit(this.data.user.id);
      return;
    }

    this.configureCreateMode();
  }

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    if (!password && !confirmPassword) {
      return null;
    }
    if (password && !confirmPassword) {
      return { confirmPasswordRequired: true };
    }
    if (!password && confirmPassword) {
      return { passwordRequired: true };
    }

    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  get isEditMode(): boolean {
    return this.data.mode === 'edit';
  }

  get title(): string {
    return this.isEditMode ? 'Editar usuario' : 'Nuevo usuario';
  }

  get submitLabel(): string {
    return this.isEditMode ? 'Actualizar' : 'Crear';
  }

  get isBusy(): boolean {
    return this.isLoading || this.isFetchingUser;
  }

  private configureCreateMode(): void {
    this.userForm.get('password')?.setValidators([
      Validators.required,
      Validators.pattern(this.passwordPattern)
    ]);
    this.userForm.get('confirmPassword')?.setValidators([Validators.required]);
    this.userForm.get('password')?.updateValueAndValidity();
    this.userForm.get('confirmPassword')?.updateValueAndValidity();
  }

  private configureEditMode(): void {
    this.userForm.get('password')?.setValidators([
      Validators.pattern(this.passwordPattern)
    ]);
    this.userForm.get('confirmPassword')?.clearValidators();
    this.userForm.get('password')?.updateValueAndValidity();
    this.userForm.get('confirmPassword')?.updateValueAndValidity();
  }

  private configureRoleControl(): void {
    const roleControl = this.userForm.get('role');

    if (!roleControl) {
      return;
    }

    if (this.canManageRole) {
      roleControl.enable({ emitEvent: false });
      roleControl.setValidators([Validators.required]);
    } else {
      roleControl.clearValidators();
      roleControl.disable({ emitEvent: false });
    }

    roleControl.updateValueAndValidity({ emitEvent: false });
  }

  private loadUserForEdit(userId: string): void {
    this.isFetchingUser = true;
    this.userForm.disable({ emitEvent: false });

    this.userService.getUserById(userId).pipe(
      finalize(() => {
        this.isFetchingUser = false;
        this.userForm.enable({ emitEvent: false });
        this.configureRoleControl();
      })
    ).subscribe({
      next: (user) => {
        this.userForm.patchValue({
          name: user.name,
          email: user.email,
          role: user.role,
          password: '',
          confirmPassword: ''
        });
        this.userForm.markAsPristine();
      },
      error: (error) => {
        console.error('Error cargando usuario:', error);
        this.snackBar.open(error.error?.message || 'Error al cargar el usuario', 'Cerrar', { duration: 3000 });
        this.dialogRef.close();
      }
    });
  }

  submit(): void {
    if (this.userForm.invalid || this.isFetchingUser) {
      this.userForm.markAllAsTouched();
      return;
    }

    const formValue = { ...this.userForm.value };
    delete formValue.confirmPassword;

    this.isLoading = true;
    this.userForm.disable({ emitEvent: false });

    if (this.isEditMode && this.data.user) {
      const updateData: UpdateUserRequest = {
        name: formValue.name,
        email: formValue.email
      };

      if (this.canManageRole && formValue.role) {
        updateData.role = formValue.role;
      }

      if (formValue.password?.trim()) {
        updateData.password = formValue.password.trim();
      }

      this.userService.updateUser(this.data.user.id, updateData).pipe(
        finalize(() => {
          this.isLoading = false;
          this.userForm.enable({ emitEvent: false });
          this.configureRoleControl();
        })
      ).subscribe({
        next: () => {
          this.dialogRef.close(true);
        },
        error: (error) => {
          console.error('Error actualizando usuario:', error);
          this.snackBar.open(error.error?.message || 'Error al actualizar usuario', 'Cerrar', { duration: 3000 });
        }
      });
      return;
    }

    const createData: CreateUserRequest = {
      name: formValue.name,
      email: formValue.email,
      password: formValue.password
    };

    if (this.canManageRole && formValue.role) {
      createData.role = formValue.role;
    }

    this.userService.createUser(createData).pipe(
      finalize(() => {
        this.isLoading = false;
        this.userForm.enable({ emitEvent: false });
        this.configureRoleControl();
      })
    ).subscribe({
      next: () => {
        this.dialogRef.close(true);
      },
      error: (error) => {
        console.error('Error creando usuario:', error);
        this.snackBar.open(error.error?.message || 'Error al crear usuario', 'Cerrar', { duration: 3000 });
      }
    });
  }
}
