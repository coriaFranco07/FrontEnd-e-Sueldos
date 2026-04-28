"use strict";
(self["webpackChunkfrontend_e_Sueldos_angular"] = self["webpackChunkfrontend_e_Sueldos_angular"] || []).push([["src_app_modules_users_users_module_ts"],{

/***/ 9855:
/*!***********************************************************************!*\
  !*** ./src/app/modules/users/components/profile/profile.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ProfileComponent {
  static {
    this.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 2,
      vars: 0,
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "profile works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy91c2Vycy9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvS0FBb0siLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7952:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/users/components/user-form-dialog/user-form-dialog.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserFormDialogComponent": () => (/* binding */ UserFormDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/user.service */ 7247);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 9121);















function UserFormDialogComponent_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El nombre es obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UserFormDialogComponent_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " M\u00EDnimo 3 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UserFormDialogComponent_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El email es obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UserFormDialogComponent_mat_error_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ingresa un email v\u00E1lido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UserFormDialogComponent_p_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Dej\u00E1 en blanco si no quer\u00E9s cambiar la contrase\u00F1a actual. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UserFormDialogComponent_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " La contrase\u00F1a es obligatoria ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UserFormDialogComponent_mat_error_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " M\u00EDnimo 8 caracteres, con letra y n\u00FAmero ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UserFormDialogComponent_mat_error_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Debe confirmar la contrase\u00F1a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UserFormDialogComponent_mat_error_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Las contrase\u00F1as no coinciden ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UserFormDialogComponent_mat_error_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El rol es obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UserFormDialogComponent_mat_icon_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.isEditMode ? "edit" : "check_circle");
  }
}
function UserFormDialogComponent_mat_spinner_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 27);
  }
}
class UserFormDialogComponent {
  constructor(fb, userService, snackBar, dialogRef, data) {
    this.fb = fb;
    this.userService = userService;
    this.snackBar = snackBar;
    this.dialogRef = dialogRef;
    this.data = data;
    this.hidePassword = true;
    this.hideConfirmPassword = true;
    this.isLoading = false;
    this.userForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]],
      confirmPassword: [''],
      role: ['user', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }
  ngOnInit() {
    if (this.data.mode === 'edit' && this.data.user) {
      this.userForm.patchValue({
        name: this.data.user.name,
        email: this.data.user.email,
        role: this.data.user.role
      });
      // En edición, la contraseña es opcional
      this.userForm.get('password')?.clearValidators();
      this.userForm.get('password')?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]);
      this.userForm.get('password')?.updateValueAndValidity();
      this.userForm.get('confirmPassword')?.clearValidators();
      this.userForm.get('confirmPassword')?.updateValueAndValidity();
    } else {
      // En creación, la contraseña es obligatoria
      this.userForm.get('password')?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]);
      this.userForm.get('confirmPassword')?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
      this.userForm.get('password')?.updateValueAndValidity();
      this.userForm.get('confirmPassword')?.updateValueAndValidity();
    }
  }
  passwordMatchValidator(group) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    if (!password && !confirmPassword) return null;
    if (!password || !confirmPassword) return null;
    return password === confirmPassword ? null : {
      passwordMismatch: true
    };
  }
  get isEditMode() {
    return this.data.mode === 'edit';
  }
  get title() {
    return this.data.mode === 'edit' ? 'Editar usuario' : 'Nuevo usuario';
  }
  get submitLabel() {
    return this.data.mode === 'edit' ? 'Actualizar' : 'Crear';
  }
  submit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    const formValue = {
      ...this.userForm.value
    };
    delete formValue.confirmPassword;
    if (this.data.mode === 'edit' && this.data.user) {
      // Si no se ingresó contraseña nueva, no la enviamos
      if (!formValue.password) {
        delete formValue.password;
      }
      this.userService.updateUser(this.data.user.id, formValue).subscribe({
        next: () => {
          this.isLoading = false;
          this.dialogRef.close(true);
        },
        error: error => {
          console.error('Error actualizando usuario:', error);
          this.snackBar.open(error.error?.message || 'Error al actualizar usuario', 'Cerrar', {
            duration: 3000
          });
          this.isLoading = false;
        }
      });
    } else {
      this.userService.createUser(formValue).subscribe({
        next: () => {
          this.isLoading = false;
          this.dialogRef.close(true);
        },
        error: error => {
          console.error('Error creando usuario:', error);
          this.snackBar.open(error.error?.message || 'Error al crear usuario', 'Cerrar', {
            duration: 3000
          });
          this.isLoading = false;
        }
      });
    }
  }
  static {
    this.ɵfac = function UserFormDialogComponent_Factory(t) {
      return new (t || UserFormDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UserFormDialogComponent,
      selectors: [["app-user-form-dialog"]],
      decls: 78,
      vars: 28,
      consts: [[1, "user-form-dialog-container"], [1, "user-form-dialog", 3, "formGroup"], [1, "dialog-header"], ["mat-dialog-title", "", 1, "dialog-title"], [1, "header-icon"], [1, "form-section"], [1, "section-label"], ["appearance", "fill", 1, "full-width", "form-field-custom"], ["matInput", "", "formControlName", "name", "placeholder", "Ej. Juan Perez"], ["matPrefix", "", 1, "prefix-icon"], ["class", "error-message", 4, "ngIf"], ["matInput", "", "formControlName", "email", "placeholder", "Ej. juan@ejemplo.com", "type", "email"], ["class", "section-hint", 4, "ngIf"], ["matInput", "", "formControlName", "password", "placeholder", "M\u00EDnimo 8 caracteres, letra y n\u00FAmero", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 1, "toggle-password", 3, "click"], ["matInput", "", "formControlName", "confirmPassword", "placeholder", "Repite la contrase\u00F1a", 3, "type"], ["formControlName", "role"], ["value", "user"], [2, "vertical-align", "middle", "margin-right", "6px"], ["value", "admin"], ["align", "end", 1, "dialog-actions"], ["mat-button", "", "type", "button", 1, "btn-cancel", 3, "disabled", "click"], ["mat-flat-button", "", "type", "button", 1, "btn-submit", 3, "disabled", "click"], [4, "ngIf"], ["diameter", "20", "class", "spinner", 4, "ngIf"], [1, "error-message"], [1, "section-hint"], ["diameter", "20", 1, "spinner"]],
      template: function UserFormDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2)(3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-dialog-content")(8, "div", 5)(9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Informaci\u00F3n Personal");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field", 7)(12, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Nombre completo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "person");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, UserFormDialogComponent_mat_error_17_Template, 2, 0, "mat-error", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, UserFormDialogComponent_mat_error_18_Template, 2, 0, "mat-error", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-form-field", 7)(20, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, UserFormDialogComponent_mat_error_25_Template, 2, 0, "mat-error", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, UserFormDialogComponent_mat_error_26_Template, 2, 0, "mat-error", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 5)(28, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, UserFormDialogComponent_p_30_Template, 2, 0, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-form-field", 7)(32, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "lock");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserFormDialogComponent_Template_button_click_37_listener() {
            return ctx.hidePassword = !ctx.hidePassword;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, UserFormDialogComponent_mat_error_40_Template, 2, 0, "mat-error", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, UserFormDialogComponent_mat_error_41_Template, 2, 0, "mat-error", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-form-field", 7)(43, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Confirmar contrase\u00F1a");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "lock_outline");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserFormDialogComponent_Template_button_click_48_listener() {
            return ctx.hideConfirmPassword = !ctx.hideConfirmPassword;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, UserFormDialogComponent_mat_error_51_Template, 2, 0, "mat-error", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, UserFormDialogComponent_mat_error_52_Template, 2, 0, "mat-error", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 5)(54, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Configuraci\u00F3n de Rol");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-form-field", 7)(57, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Rol de Usuario");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-select", 16)(60, "mat-option", 17)(61, "mat-icon", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "person");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " Usuario Regular ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "mat-option", 19)(65, "mat-icon", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "admin_panel_settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " Administrador ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, UserFormDialogComponent_mat_error_68_Template, 2, 0, "mat-error", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "mat-dialog-actions", 20)(70, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserFormDialogComponent_Template_button_click_70_listener() {
            return ctx.dialogRef.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, " Cancelar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserFormDialogComponent_Template_button_click_74_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, UserFormDialogComponent_mat_icon_75_Template, 2, 1, "mat-icon", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, UserFormDialogComponent_mat_spinner_76_Template, 1, 0, "mat-spinner", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          let tmp_5_0;
          let tmp_6_0;
          let tmp_7_0;
          let tmp_8_0;
          let tmp_14_0;
          let tmp_15_0;
          let tmp_18_0;
          let tmp_19_0;
          let tmp_20_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("edit-icon", ctx.isEditMode)("create-icon", !ctx.isEditMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isEditMode ? "edit" : "person_add", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.userForm.get("name")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx.userForm.get("name")) == null ? null : tmp_5_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.userForm.get("name")) == null ? null : tmp_6_0.hasError("minlength")) && ((tmp_6_0 = ctx.userForm.get("name")) == null ? null : tmp_6_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.userForm.get("email")) == null ? null : tmp_7_0.hasError("required")) && ((tmp_7_0 = ctx.userForm.get("email")) == null ? null : tmp_7_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.userForm.get("email")) == null ? null : tmp_8_0.hasError("email")) && ((tmp_8_0 = ctx.userForm.get("email")) == null ? null : tmp_8_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isEditMode ? "Cambiar Contrase\u00F1a (opcional)" : "Credenciales de Seguridad", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isEditMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.isEditMode ? "Nueva contrase\u00F1a" : "Contrase\u00F1a");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hidePassword ? "password" : "text");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hidePassword ? "visibility_off" : "visibility");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_14_0 = ctx.userForm.get("password")) == null ? null : tmp_14_0.hasError("required")) && ((tmp_14_0 = ctx.userForm.get("password")) == null ? null : tmp_14_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_15_0 = ctx.userForm.get("password")) == null ? null : tmp_15_0.hasError("pattern")) && ((tmp_15_0 = ctx.userForm.get("password")) == null ? null : tmp_15_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hideConfirmPassword ? "password" : "text");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hideConfirmPassword ? "visibility_off" : "visibility");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_18_0 = ctx.userForm.get("confirmPassword")) == null ? null : tmp_18_0.hasError("required")) && ((tmp_18_0 = ctx.userForm.get("confirmPassword")) == null ? null : tmp_18_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userForm.hasError("passwordMismatch") && ((tmp_19_0 = ctx.userForm.get("confirmPassword")) == null ? null : tmp_19_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_20_0 = ctx.userForm.get("role")) == null ? null : tmp_20_0.hasError("required")) && ((tmp_20_0 = ctx.userForm.get("role")) == null ? null : tmp_20_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.userForm.invalid || ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.submitLabel, " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinner, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions],
      styles: [".user-form-dialog-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0;\r\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n}\r\n\r\n.user-form-dialog[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0;\r\n}\r\n\r\n.dialog-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 24px 24px 20px 24px;\r\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n  border-bottom: 3px solid #5a67d8;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 22px;\r\n  font-weight: 600;\r\n  color: white;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\n.section-hint[_ngcontent-%COMP%] {\r\n  margin: -8px 0 8px 0;\r\n  font-size: 12px;\r\n  color: #9ca3af;\r\n  font-style: italic;\r\n}\r\n\r\n.header-icon[_ngcontent-%COMP%] {\r\n  font-size: 32px;\r\n  width: 32px;\r\n  height: 32px;\r\n  opacity: 0.9;\r\n  color: white;\r\n}\r\n\r\n.header-icon.edit-icon[_ngcontent-%COMP%] {\r\n  color: #fbbf24;\r\n}\r\n\r\n.header-icon.create-icon[_ngcontent-%COMP%] {\r\n  color: #34d399;\r\n}\r\n\r\nmat-dialog-content[_ngcontent-%COMP%] {\r\n  padding: 28px 24px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 28px;\r\n  min-width: 440px;\r\n  max-height: 550px;\r\n  overflow-y: auto;\r\n  background: #f8f9fa;\r\n}\r\n\r\n.form-section[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n  background: white;\r\n  padding: 20px;\r\n  border-radius: 12px;\r\n  border-left: 4px solid #667eea;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\r\n}\r\n\r\n.section-label[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  color: #667eea;\r\n  letter-spacing: 1px;\r\n  margin: 0 0 4px 0;\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.form-field-custom[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n  .form-field-custom .mat-form-field-wrapper {\r\n  padding-bottom: 1.25em;\r\n}\r\n\r\n  .form-field-custom .mat-form-field-infix {\r\n  border-top: none !important;\r\n}\r\n\r\n  .form-field-custom .mat-form-field-flex {\r\n  padding-bottom: 0 !important;\r\n}\r\n\r\n  .form-field-custom.mat-focused .mat-form-field-flex {\r\n  background: linear-gradient(to right, #f3f4f6, #ffffff) !important;\r\n}\r\n\r\n.prefix-icon[_ngcontent-%COMP%] {\r\n  color: #667eea;\r\n  font-weight: 500;\r\n}\r\n\r\n  .form-field-custom .mat-form-field-label {\r\n  color: #6b7280 !important;\r\n}\r\n\r\n  .form-field-custom.mat-focused .mat-form-field-label {\r\n  color: #667eea !important;\r\n}\r\n\r\n  .form-field-custom.mat-form-field-invalid .mat-form-field-label {\r\n  color: #ef4444 !important;\r\n}\r\n\r\n.toggle-password[_ngcontent-%COMP%] {\r\n  color: #9ca3af !important;\r\n  transition: color 0.2s ease;\r\n}\r\n\r\n.toggle-password[_ngcontent-%COMP%]:hover {\r\n  color: #667eea !important;\r\n}\r\n\r\n.error-message[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-size: 12px;\r\n  color: #ef4444;\r\n  margin: 4px 0 0 0;\r\n  font-weight: 500;\r\n}\r\n\r\n.full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n\r\n.dialog-actions[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 12px;\r\n  padding: 20px 24px;\r\n  border-top: 1px solid #e5e7eb;\r\n  background: linear-gradient(to bottom, #ffffff, #f8f9fa);\r\n}\r\n\r\nmat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  min-width: 110px;\r\n}\r\n\r\n.btn-cancel[_ngcontent-%COMP%] {\r\n  color: #6b7280 !important;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.btn-cancel[_ngcontent-%COMP%]:hover:not([disabled]) {\r\n  background-color: #f3f4f6 !important;\r\n  color: #111827 !important;\r\n}\r\n\r\n.btn-submit[_ngcontent-%COMP%] {\r\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;\r\n  color: white !important;\r\n  font-weight: 600;\r\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.btn-submit[_ngcontent-%COMP%]:hover:not([disabled]) {\r\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.6);\r\n  transform: translateY(-1px);\r\n}\r\n\r\n.btn-submit[_ngcontent-%COMP%]:disabled {\r\n  opacity: 0.6;\r\n  cursor: not-allowed;\r\n  background: linear-gradient(135deg, #9ca3af 0%, #6b7280 100%) !important;\r\n  box-shadow: none;\r\n}\r\n\r\n\r\n.spinner[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin-right: 8px;\r\n}\r\n\r\n\r\nmat-dialog-content[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n}\r\n\r\nmat-dialog-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #f3f4f6;\r\n  border-radius: 3px;\r\n}\r\n\r\nmat-dialog-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #d1d5db;\r\n  border-radius: 3px;\r\n}\r\n\r\nmat-dialog-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #9ca3af;\r\n}\r\n\r\n\r\n@media (max-width: 600px) {\r\n  mat-dialog-content[_ngcontent-%COMP%] {\r\n    min-width: auto;\r\n    max-width: 100%;\r\n    padding: 20px;\r\n  }\r\n\r\n  .user-form-dialog-container[_ngcontent-%COMP%] {\r\n    border-radius: 0;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZm9ybS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsTUFBTTtFQUNOLDZEQUE2RDtFQUM3RCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixNQUFNO0FBQ1I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIsNkRBQTZEO0VBQzdELGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0VBQWtFO0FBQ3BFOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsU0FBUztFQUNULGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0Isd0RBQXdEO0FBQzFEOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx3RUFBd0U7RUFDeEUsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQiwrQ0FBK0M7RUFDL0MseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsK0NBQStDO0VBQy9DLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsd0VBQXdFO0VBQ3hFLGdCQUFnQjtBQUNsQjs7QUFFQSxZQUFZO0FBQ1o7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBLDRCQUE0QjtBQUM1QjtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLGVBQWU7QUFDZjtFQUNFO0lBQ0UsZUFBZTtJQUNmLGVBQWU7SUFDZixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJ1c2VyLWZvcm0tZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1mb3JtLWRpYWxvZy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnVzZXItZm9ybS1kaWFsb2cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDA7XHJcbn1cclxuXHJcbi5kaWFsb2ctaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDI0cHggMjRweCAyMHB4IDI0cHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzVhNjdkODtcclxufVxyXG5cclxuLmRpYWxvZy10aXRsZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhpbnQge1xyXG4gIG1hcmdpbjogLThweCAwIDhweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzljYTNhZjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5oZWFkZXItaWNvbiB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZGVyLWljb24uZWRpdC1pY29uIHtcclxuICBjb2xvcjogI2ZiYmYyNDtcclxufVxyXG5cclxuLmhlYWRlci1pY29uLmNyZWF0ZS1pY29uIHtcclxuICBjb2xvcjogIzM0ZDM5OTtcclxufVxyXG5cclxubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICBwYWRkaW5nOiAyOHB4IDI0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMjhweDtcclxuICBtaW4td2lkdGg6IDQ0MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDU1MHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxufVxyXG5cclxuLmZvcm0tc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTZweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjNjY3ZWVhO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG59XHJcblxyXG4uc2VjdGlvbi1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogIzY2N2VlYTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIG1hcmdpbjogMCAwIDRweCAwO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkLWN1c3RvbSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZm9ybS1maWVsZC1jdXN0b20gLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxLjI1ZW07XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZm9ybS1maWVsZC1jdXN0b20gLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZm9ybS1maWVsZC1jdXN0b20gLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZm9ybS1maWVsZC1jdXN0b20ubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2YzZjRmNiwgI2ZmZmZmZikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByZWZpeC1pY29uIHtcclxuICBjb2xvcjogIzY2N2VlYTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmZvcm0tZmllbGQtY3VzdG9tIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgY29sb3I6ICM2YjcyODAgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5mb3JtLWZpZWxkLWN1c3RvbS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiAjNjY3ZWVhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZm9ybS1maWVsZC1jdXN0b20ubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiAjZWY0NDQ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50b2dnbGUtcGFzc3dvcmQge1xyXG4gIGNvbG9yOiAjOWNhM2FmICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4udG9nZ2xlLXBhc3N3b3JkOmhvdmVyIHtcclxuICBjb2xvcjogIzY2N2VlYSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjZWY0NDQ0O1xyXG4gIG1hcmdpbjogNHB4IDAgMCAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogRGlhbG9nIGFjdGlvbnMgKi9cclxuLmRpYWxvZy1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDIwcHggMjRweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U1ZTdlYjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmZmZmLCAjZjhmOWZhKTtcclxufVxyXG5cclxubWF0LWRpYWxvZy1hY3Rpb25zIGJ1dHRvbiB7XHJcbiAgbWluLXdpZHRoOiAxMTBweDtcclxufVxyXG5cclxuLmJ0bi1jYW5jZWwge1xyXG4gIGNvbG9yOiAjNmI3MjgwICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmJ0bi1jYW5jZWw6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY2ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMxMTE4MjcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1zdWJtaXQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSkgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjQpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5idG4tc3VibWl0OmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XHJcbiAgYm94LXNoYWRvdzogMCA2cHggMTZweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNik7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcblxyXG4uYnRuLXN1Ym1pdDpkaXNhYmxlZCB7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzljYTNhZiAwJSwgIzZiNzI4MCAxMDAlKSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFNwaW5uZXIgKi9cclxuLnNwaW5uZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLyogU2Nyb2xsYmFyIHBlcnNvbmFsaXphZG8gKi9cclxubWF0LWRpYWxvZy1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDZweDtcclxufVxyXG5cclxubWF0LWRpYWxvZy1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogI2YzZjRmNjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbm1hdC1kaWFsb2ctY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNkMWQ1ZGI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG5tYXQtZGlhbG9nLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjOWNhM2FmO1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIG1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnVzZXItZm9ybS1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy91c2Vycy9jb21wb25lbnRzL3VzZXItZm9ybS1kaWFsb2cvdXNlci1mb3JtLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixNQUFNO0VBQ04sNkRBQTZEO0VBQzdELGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLE1BQU07QUFDUjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1Qiw2REFBNkQ7RUFDN0QsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrRUFBa0U7QUFDcEU7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsbUJBQW1CO0FBQ25CO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3Qix3REFBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHdFQUF3RTtFQUN4RSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLCtDQUErQztFQUMvQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwrQ0FBK0M7RUFDL0MsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix3RUFBd0U7RUFDeEUsZ0JBQWdCO0FBQ2xCOztBQUVBLFlBQVk7QUFDWjtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUEsZUFBZTtBQUNmO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBLHc0UkFBdzRSIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItZm9ybS1kaWFsb2ctY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAwO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi51c2VyLWZvcm0tZGlhbG9nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAwO1xyXG59XHJcblxyXG4uZGlhbG9nLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAyNHB4IDI0cHggMjBweCAyNHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM1YTY3ZDg7XHJcbn1cclxuXHJcbi5kaWFsb2ctdGl0bGUge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi1oaW50IHtcclxuICBtYXJnaW46IC04cHggMCA4cHggMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM5Y2EzYWY7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uaGVhZGVyLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhlYWRlci1pY29uLmVkaXQtaWNvbiB7XHJcbiAgY29sb3I6ICNmYmJmMjQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaWNvbi5jcmVhdGUtaWNvbiB7XHJcbiAgY29sb3I6ICMzNGQzOTk7XHJcbn1cclxuXHJcbm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgcGFkZGluZzogMjhweCAyNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDI4cHg7XHJcbiAgbWluLXdpZHRoOiA0NDBweDtcclxuICBtYXgtaGVpZ2h0OiA1NTBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbn1cclxuXHJcbi5mb3JtLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzY2N2VlYTtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxufVxyXG5cclxuLnNlY3Rpb24tbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6ICM2NjdlZWE7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBtYXJnaW46IDAgMCA0cHggMDtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZm9ybS1maWVsZC1jdXN0b20ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmZvcm0tZmllbGQtY3VzdG9tIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMS4yNWVtO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmZvcm0tZmllbGQtY3VzdG9tIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmZvcm0tZmllbGQtY3VzdG9tIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmZvcm0tZmllbGQtY3VzdG9tLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmM2Y0ZjYsICNmZmZmZmYpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcmVmaXgtaWNvbiB7XHJcbiAgY29sb3I6ICM2NjdlZWE7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5mb3JtLWZpZWxkLWN1c3RvbSAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiAjNmI3MjgwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZm9ybS1maWVsZC1jdXN0b20ubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogIzY2N2VlYSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmZvcm0tZmllbGQtY3VzdG9tLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogI2VmNDQ0NCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udG9nZ2xlLXBhc3N3b3JkIHtcclxuICBjb2xvcjogIzljYTNhZiAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLnRvZ2dsZS1wYXNzd29yZDpob3ZlciB7XHJcbiAgY29sb3I6ICM2NjdlZWEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2Uge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogI2VmNDQ0NDtcclxuICBtYXJnaW46IDRweCAwIDAgMDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIERpYWxvZyBhY3Rpb25zICovXHJcbi5kaWFsb2ctYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGdhcDogMTJweDtcclxuICBwYWRkaW5nOiAyMHB4IDI0cHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU3ZWI7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZmZmZiwgI2Y4ZjlmYSk7XHJcbn1cclxuXHJcbm1hdC1kaWFsb2ctYWN0aW9ucyBidXR0b24ge1xyXG4gIG1pbi13aWR0aDogMTEwcHg7XHJcbn1cclxuXHJcbi5idG4tY2FuY2VsIHtcclxuICBjb2xvcjogIzZiNzI4MCAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5idG4tY2FuY2VsOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMTExODI3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tc3VibWl0IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC40KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uYnRuLXN1Ym1pdDpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xyXG4gIGJveC1zaGFkb3c6IDAgNnB4IDE2cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjYpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxufVxyXG5cclxuLmJ0bi1zdWJtaXQ6ZGlzYWJsZWQge1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM5Y2EzYWYgMCUsICM2YjcyODAgMTAwJSkgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4vKiBTcGlubmVyICovXHJcbi5zcGlubmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi8qIFNjcm9sbGJhciBwZXJzb25hbGl6YWRvICovXHJcbm1hdC1kaWFsb2ctY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA2cHg7XHJcbn1cclxuXHJcbm1hdC1kaWFsb2ctY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNmM2Y0ZjY7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG5tYXQtZGlhbG9nLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjZDFkNWRiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxubWF0LWRpYWxvZy1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzljYTNhZjtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICBtYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcblxyXG4gIC51c2VyLWZvcm0tZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 3099:
/*!***************************************************************************!*\
  !*** ./src/app/modules/users/components/user-list/user-list.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListComponent": () => (/* binding */ UserListComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/confirm-dialog/confirm-dialog.component */ 9077);
/* harmony import */ var _user_form_dialog_user_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-form-dialog/user-form-dialog.component */ 7952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ 7247);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);


























function UserListComponent_button_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserListComponent_button_51_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.nameFilter.reset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function UserListComponent_table_85_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserListComponent_table_85_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r18.name);
  }
}
function UserListComponent_table_85_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserListComponent_table_85_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r19.email);
  }
}
function UserListComponent_table_85_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Rol");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserListComponent_table_85_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 62)(1, "mat-chip", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", user_r20.role === "admin" ? "role-chip admin" : "role-chip user");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", user_r20.role === "admin" ? "Admin" : "Usuario", " ");
  }
}
function UserListComponent_table_85_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Verificado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserListComponent_table_85_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 62)(1, "div", 63)(2, "mat-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", user_r21.isEmailVerified ? "verification-badge verified" : "verification-badge unverified");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r21.isEmailVerified ? "check_circle" : "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r21.isEmailVerified ? "Verificado" : "No verificado");
  }
}
function UserListComponent_table_85_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserListComponent_table_85_td_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 62)(1, "div", 66)(2, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserListComponent_table_85_td_15_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24);
      const user_r22 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r23.editUser(user_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Editar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserListComponent_table_85_td_15_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24);
      const user_r22 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r25.deleteUser(user_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function UserListComponent_table_85_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 69);
  }
}
function UserListComponent_table_85_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 70);
  }
}
function UserListComponent_table_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](1, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, UserListComponent_table_85_th_2_Template, 2, 0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, UserListComponent_table_85_td_3_Template, 2, 1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, UserListComponent_table_85_th_5_Template, 2, 0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, UserListComponent_table_85_td_6_Template, 2, 1, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](7, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, UserListComponent_table_85_th_8_Template, 2, 0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, UserListComponent_table_85_td_9_Template, 3, 2, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](10, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, UserListComponent_table_85_th_11_Template, 2, 0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, UserListComponent_table_85_td_12_Template, 6, 3, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](13, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, UserListComponent_table_85_th_14_Template, 2, 0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, UserListComponent_table_85_td_15_Template, 10, 0, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, UserListComponent_table_85_tr_16_Template, 1, 0, "tr", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, UserListComponent_table_85_tr_17_Template, 1, 0, "tr", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx_r1.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
  }
}
function UserListComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-progress-spinner", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Cargando usuarios...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function UserListComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 73)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "people_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "No se encontraron usuarios");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Ajusta los filtros o nombre exacto para ver resultados.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return [5, 10, 20, 50];
};
class UserListComponent {
  constructor(userService, snackBar, dialog, router) {
    this.userService = userService;
    this.snackBar = snackBar;
    this.dialog = dialog;
    this.router = router;
    this.displayedColumns = ['name', 'email', 'role', 'isEmailVerified', 'actions'];
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource([]);
    this.isLoading = false;
    this.totalResults = 0;
    this.pageSize = 10;
    this.currentPage = 0;
    // Filtros
    this.nameFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('');
    this.roleFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('');
  }
  ngOnInit() {
    this.loadUsers();
    // Filtros con debounce - resetear página al filtrar
    this.nameFilter.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)()).subscribe(() => {
      this.currentPage = 0; // Reset a primera página
      this.loadUsers();
    });
    this.roleFilter.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)()).subscribe(() => {
      this.currentPage = 0; // Reset a primera página
      this.loadUsers();
    });
  }
  ngAfterViewInit() {
    this.sort.sortChange.subscribe(sort => {
      this.currentPage = 0; // Reset a primera página
      this.loadUsers();
    });
  }
  loadUsers() {
    this.isLoading = true;
    // Formatear sortBy en el formato esperado por el backend: campo:asc o campo:desc
    let sortBy;
    if (this.sort?.active) {
      const direction = this.sort.direction === 'desc' ? 'desc' : 'asc';
      sortBy = `${this.sort.active}:${direction}`;
    }
    const searchTerm = this.nameFilter.value?.trim() || undefined;
    const role = this.roleFilter.value?.trim() || undefined;
    console.log('📤 Enviando solicitud con:', {
      page: this.currentPage + 1,
      limit: this.pageSize,
      sortBy,
      role,
      name: searchTerm
    });
    this.userService.getUsers(this.currentPage + 1,
    // API usa 1-based
    this.pageSize, sortBy, role, searchTerm).subscribe({
      next: response => {
        this.dataSource.data = response.results;
        this.totalResults = response.totalResults;
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading users:', error);
        this.snackBar.open('Error al cargar usuarios', 'Cerrar', {
          duration: 3000
        });
        this.isLoading = false;
      }
    });
  }
  onPageChange(event) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadUsers();
  }
  resetFilters() {
    this.nameFilter.reset();
    this.roleFilter.reset();
    this.currentPage = 0;
    this.loadUsers();
    this.snackBar.open('Filtros limpiados', 'Cerrar', {
      duration: 2000
    });
  }
  getRoleColor(role) {
    return role === 'admin' ? 'accent' : 'primary'; // Naranja para admin, azul para user
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(_user_form_dialog_user_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__.UserFormDialogComponent, {
      width: '500px',
      data: {
        mode: 'create'
      }
    });
    dialogRef.afterClosed().subscribe(created => {
      if (created) {
        this.snackBar.open('Usuario creado correctamente', 'Cerrar', {
          duration: 3000
        });
        this.loadUsers();
      }
    });
  }
  editUser(user) {
    const dialogRef = this.dialog.open(_user_form_dialog_user_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__.UserFormDialogComponent, {
      width: '500px',
      data: {
        mode: 'edit',
        user
      }
    });
    dialogRef.afterClosed().subscribe(updated => {
      if (updated) {
        this.snackBar.open('Usuario actualizado correctamente', 'Cerrar', {
          duration: 3000
        });
        this.loadUsers();
      }
    });
  }
  deleteUser(user) {
    const dialogRef = this.dialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent, {
      data: {
        title: 'Eliminar Usuario',
        message: `¿Estás seguro que deseás eliminar a ${user.name}?`,
        confirmText: 'Eliminar',
        cancelText: 'Cancelar'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.deleteUser(user.id).subscribe({
          next: () => {
            this.snackBar.open('Usuario eliminado exitosamente', 'Cerrar', {
              duration: 3000
            });
            this.loadUsers();
          },
          error: error => {
            console.error('Error deleting user:', error);
            this.snackBar.open('Error al eliminar usuario', 'Cerrar', {
              duration: 3000
            });
          }
        });
      }
    });
  }
  exportToCSV() {
    let sortBy;
    if (this.sort?.active) {
      const direction = this.sort.direction === 'desc' ? 'desc' : 'asc';
      sortBy = `${this.sort.active}:${direction}`;
    }
    const searchTerm = this.nameFilter.value?.trim() || undefined;
    const role = this.roleFilter.value?.trim() || undefined;
    const limit = this.totalResults > 0 ? this.totalResults : 1000;
    this.isLoading = true;
    this.userService.getUsers(1, limit, sortBy, role, searchTerm).subscribe({
      next: response => {
        this.isLoading = false;
        const users = response.results;
        if (!users || users.length === 0) {
          this.snackBar.open('No hay datos para exportar', 'Cerrar', {
            duration: 3000
          });
          return;
        }
        const csvRows = [];
        csvRows.push(['Nombre', 'Email', 'Rol', 'Verificado'].join(','));
        for (const user of users) {
          const row = [`"${user.name || ''}"`, `"${user.email || ''}"`, `"${user.role === 'admin' ? 'Admin' : 'Usuario'}"`, `"${user.isEmailVerified ? 'Si' : 'No'}"`];
          csvRows.push(row.join(','));
        }
        const csvString = csvRows.join('\n');
        const blob = new Blob([csvString], {
          type: 'text/csv;charset=utf-8;'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `reporte_usuarios_${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        URL.revokeObjectURL(url);
        this.snackBar.open('Reporte descargado correctamente', 'Cerrar', {
          duration: 3000
        });
      },
      error: error => {
        this.isLoading = false;
        console.error('Error exportando usuarios:', error);
        this.snackBar.open('Error al exportar a CSV', 'Cerrar', {
          duration: 3000
        });
      }
    });
  }
  goBack() {
    this.router.navigate(['/principal']);
  }
  static {
    this.ɵfac = function UserListComponent_Factory(t) {
      return new (t || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: UserListComponent,
      selectors: [["app-user-list"]],
      viewQuery: function UserListComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      decls: 90,
      vars: 13,
      consts: [[1, "user-list-shell"], [1, "navbar"], [1, "navbar-inner"], [1, "brand-block"], ["routerLink", "/principal", "aria-label", "Ir al inicio", 1, "brand-logo"], ["src", "https://media.licdn.com/dms/image/v2/D4D0BAQGibhoMeCL-mg/company-logo_200_200/company-logo_200_200/0/1667320508791/e_sueldos_logo?e=2147483647&v=beta&t=6BpHD4ZVbBNymqB5aEkJNEXyJ-0qGr2At_F6mEePRAw", "alt", "Logo eSueldos"], [1, "brand-kicker"], [1, "brand-title"], ["aria-label", "Navegaci\u00F3n principal", 1, "nav-links"], ["routerLink", "/principal"], ["routerLink", "/products"], ["routerLink", "/profile"], [1, "topbar-actions"], ["mat-stroked-button", "", "matTooltip", "Volver atr\u00E1s", 1, "header-button", "secondary-button", 3, "click"], [1, "user-list-container"], [1, "page-header"], [1, "eyebrow"], [1, "page-description"], [1, "header-actions"], [1, "header-badge"], [1, "filters-section"], ["appearance", "outline", 1, "search-field"], ["matInput", "", "placeholder", "Ej. Juan Perez", 3, "formControl"], ["matPrefix", ""], ["mat-icon-button", "", "matSuffix", "", "matTooltip", "Limpiar", 3, "click", 4, "ngIf"], ["appearance", "outline"], [3, "formControl"], ["value", ""], ["value", "admin"], ["value", "user"], ["mat-stroked-button", "", "color", "primary", "matTooltip", "Resetear filtros", 1, "reset-btn", 3, "click"], [1, "table-panel"], [1, "table-toolbar"], [1, "toolbar-title"], [1, "toolbar-subtitle"], [1, "toolbar-actions"], ["mat-stroked-button", "", "color", "primary", "matTooltip", "Exportar a CSV", 1, "export-btn", 3, "disabled", "click"], ["mat-flat-button", "", "color", "primary", 1, "create-btn", 3, "click"], [1, "toolbar-chip"], [1, "table-scroll"], ["mat-table", "", "matSort", "", "class", "user-table", 3, "dataSource", 4, "ngIf"], ["class", "empty-state loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "paginator-wrapper"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions", "page"], ["mat-icon-button", "", "matSuffix", "", "matTooltip", "Limpiar", 3, "click"], ["mat-table", "", "matSort", "", 1, "user-table", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "user-name", 4, "matCellDef"], ["matColumnDef", "email"], ["mat-cell", "", "class", "user-email", 4, "matCellDef"], ["matColumnDef", "role"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "isEmailVerified"], ["matColumnDef", "actions"], ["mat-header-cell", "", "class", "actions-header", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "user-name"], ["mat-cell", "", 1, "user-email"], ["mat-cell", ""], [3, "ngClass"], ["aria-hidden", "false"], ["mat-header-cell", "", 1, "actions-header"], [1, "actions-cell"], ["mat-flat-button", "", "color", "primary", "matTooltip", "Editar usuario", 1, "action-btn", "edit", 3, "click"], ["mat-flat-button", "", "color", "warn", "matTooltip", "Eliminar usuario", 1, "action-btn", "delete", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-state", "loading-state"], ["diameter", "50", "mode", "indeterminate"], [1, "empty-state"], [1, "empty-text"]],
      template: function UserListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div")(7, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Plataforma empresarial");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h1", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "eSueldos");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "nav", 8)(12, "a", 9)(13, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "space_dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Inicio ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 10)(17, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "inventory_2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Productos ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "a", 11)(21, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "person");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Perfil ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "nav", 12)(25, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_25_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "arrow_back");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " Volver ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 14)(30, "section", 15)(31, "div")(32, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Panel administrativo");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Gesti\u00F3n de usuarios");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "p", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Filtra por nombre o rol, revisa el estado de verificaci\u00F3n y administra usuarios desde una tabla clara y moderna.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 18)(39, "div", 19)(40, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Usuarios");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "section", 20)(45, "mat-form-field", 21)(46, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Nombre exacto");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "mat-icon", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, UserListComponent_button_51_Template, 3, 0, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "mat-form-field", 25)(53, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Rol");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "mat-select", 26)(56, "mat-option", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Todos los roles");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "mat-option", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "mat-option", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Usuario");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_62_listener() {
            return ctx.resetFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "refresh");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, " Limpiar filtros ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "section", 31)(67, "div", 32)(68, "div")(69, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Usuarios activos");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "p", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Ordenados por los valores que elijas en la tabla.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 35)(74, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_74_listener() {
            return ctx.exportToCSV();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "download");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, " Exportar CSV ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "button", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_78_listener() {
            return ctx.openCreateDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "person_add");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, " Nuevo usuario ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "span", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](85, UserListComponent_table_85_Template, 18, 3, "table", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](86, UserListComponent_div_86_Template, 4, 0, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](87, UserListComponent_div_87_Template, 8, 0, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 43)(89, "mat-paginator", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("page", function UserListComponent_Template_mat_paginator_page_89_listener($event) {
            return ctx.onPageChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](43);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.totalResults || 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.nameFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nameFilter.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.roleFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isLoading || ctx.totalResults === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Total: ", ctx.totalResults || 0, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading || ctx.dataSource.data.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading && ctx.dataSource.data.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.dataSource.data.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("length", ctx.totalResults)("pageSize", ctx.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c0));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinner, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortHeader, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatOption, _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__.MatChip, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltip],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.user-list-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 24px;\n  background:\n    radial-gradient(circle at top left, rgba(59, 130, 246, 0.18), transparent 28%),\n    radial-gradient(circle at right center, rgba(14, 165, 233, 0.16), transparent 24%),\n    linear-gradient(180deg, #eef4ff 0%, #f8fbff 46%, #edf3fb 100%);\n}\n\n.navbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 16px;\n  z-index: 20;\n  margin-bottom: 24px;\n}\n\n.navbar-inner[_ngcontent-%COMP%] {\n  max-width: 1240px;\n  margin: 0 auto;\n  padding: 18px 22px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 18px;\n  border: 1px solid var(--border-color);\n  border-radius: 28px;\n  background: var(--bg-surface);\n  backdrop-filter: blur(20px);\n  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);\n}\n\n.brand-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n.brand-logo[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 56px;\n  border-radius: 16px;\n  overflow: hidden;\n  background: #fff;\n  box-shadow: 0 10px 24px rgba(37, 99, 235, 0.16);\n  padding: 8px 14px;\n  display: flex;\n  align-items: center;\n}\n\n.brand-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  display: block;\n}\n\n.brand-kicker[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n}\n\n.brand-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  line-height: 1;\n  font-weight: 800;\n  color: var(--text-main);\n}\n\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  min-height: 42px;\n  padding: 0 14px;\n  border-radius: 999px;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: #475569;\n  text-decoration: none;\n  font-weight: 700;\n  border: 1px solid transparent;\n  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;\n}\n\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.08);\n  color: #1d4ed8;\n  border-color: rgba(37, 99, 235, 0.12);\n  transform: translateY(-1px);\n}\n\n.topbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.header-button[_ngcontent-%COMP%] {\n  height: 44px;\n  border-radius: 14px;\n}\n\n[_nghost-%COMP%]     .secondary-button {\n  border-color: #cbd5e1 !important;\n  color: #1e293b !important;\n}\n\n.user-list-container[_ngcontent-%COMP%] {\n  max-width: 1240px;\n  margin: 0 auto;\n  min-height: 100vh;\n  padding: 8px 20px 0;\n  background: transparent;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: 18px;\n  margin-bottom: 32px;\n  flex-wrap: wrap;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.18em;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--text-main);\n  font-size: 40px;\n  margin: 0;\n  line-height: 1.05;\n  font-weight: 800;\n}\n\n.page-description[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  color: var(--text-muted);\n  max-width: 640px;\n  line-height: 1.6;\n  font-weight: 500;\n}\n\n.header-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--bg-surface);\n  backdrop-filter: blur(10px);\n  color: var(--text-main);\n  padding: 16px 24px;\n  border-radius: 16px;\n  font-weight: 700;\n  min-width: 160px;\n  justify-content: center;\n  border: 1px solid var(--border-color);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);\n}\n\n.header-badge[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n\n.filters-section[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  padding: 28px;\n  border-radius: 16px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);\n  margin-bottom: 28px;\n  display: grid;\n  grid-template-columns: minmax(260px, 1.4fr) minmax(220px, 1fr) auto;\n  gap: 18px;\n  align-items: end;\n  border-top: 4px solid #6366f1;\n}\n\n.filters-section[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.search-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n\n.reset-btn[_ngcontent-%COMP%] {\n  min-width: 168px;\n  height: 56px;\n  align-self: stretch;\n  border-radius: 14px !important;\n  background: #fff !important;\n  color: #4f46e5 !important;\n  font-weight: 700 !important;\n  border: 1px solid rgba(79, 70, 229, 0.18) !important;\n  box-shadow: 0 8px 18px rgba(79, 70, 229, 0.08) !important;\n  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease !important;\n}\n\n.reset-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px) !important;\n  border-color: rgba(79, 70, 229, 0.35) !important;\n  box-shadow: 0 12px 22px rgba(79, 70, 229, 0.14) !important;\n}\n\n.table-panel[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border-radius: 16px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  margin-bottom: 24px;\n  border-top: 4px solid #6366f1;\n}\n\n.table-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  padding: 24px 28px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--bg-surface);\n}\n\n.toolbar-title[_ngcontent-%COMP%] {\n  display: block;\n  color: #667eea;\n  font-weight: 800;\n  margin-bottom: 4px;\n  font-size: 18px;\n}\n\n.toolbar-subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #9ca3af;\n  font-size: 13px;\n}\n\n.toolbar-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 12px 18px;\n  border-radius: 999px;\n  color: white;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  font-weight: 700;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);\n}\n\n.toolbar-actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n\n.export-btn[_ngcontent-%COMP%], .create-btn[_ngcontent-%COMP%] {\n  min-width: 160px;\n  min-height: 46px;\n  border-radius: 14px !important;\n  font-weight: 700 !important;\n  letter-spacing: 0.01em;\n  transition: transform 0.2s ease, box-shadow 0.2s ease !important;\n}\n\n.export-btn[_ngcontent-%COMP%] {\n  background: #fff !important;\n  color: #475569 !important;\n  border: 1px solid rgba(148, 163, 184, 0.32) !important;\n  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.06) !important;\n}\n\n.export-btn[_ngcontent-%COMP%]:hover:not([disabled]) {\n  transform: translateY(-1px) !important;\n  border-color: rgba(37, 99, 235, 0.3) !important;\n  color: #1d4ed8 !important;\n  box-shadow: 0 12px 24px rgba(37, 99, 235, 0.1) !important;\n}\n\n.create-btn[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #16a34a 0%, #059669 100%) !important;\n  color: white !important;\n  box-shadow: 0 10px 24px rgba(5, 150, 105, 0.24) !important;\n}\n\n.create-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px) !important;\n  box-shadow: 0 14px 28px rgba(5, 150, 105, 0.32) !important;\n}\n\n.table-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.user-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-spacing: 0;\n  min-width: 760px;\n}\n\nth[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #f3f4f6, #ffffff);\n  color: #667eea;\n  font-weight: 800;\n  padding: 18px 18px !important;\n  text-align: left;\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  border-bottom: 2px solid #e5e7eb;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding: 18px 18px !important;\n  border-bottom: 1px solid #f1f5f9;\n  color: #374151;\n  font-size: 14px;\n  vertical-align: middle;\n}\n\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background-color: #f8fafb;\n}\n\n.user-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #111827;\n}\n\n.user-email[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n\n.role-chip[_ngcontent-%COMP%] {\n  border-radius: 999px !important;\n  font-weight: 700 !important;\n  padding: 6px 14px !important;\n  height: 32px !important;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px !important;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n}\n\n.role-chip.admin[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%) !important;\n  color: #78350f !important;\n}\n\n.role-chip.user[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%) !important;\n  color: white !important;\n}\n\n.verification-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 700;\n  padding: 4px 8px;\n  border-radius: 6px;\n}\n\n.verification-badge.verified[_ngcontent-%COMP%] {\n  color: #059669;\n  background: #d1fae5;\n}\n\n.verification-badge.unverified[_ngcontent-%COMP%] {\n  color: #dc2626;\n  background: #fee2e2;\n}\n\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: nowrap;\n}\n\n.mat-column-isEmailVerified[_ngcontent-%COMP%], .mat-column-actions[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.actions-header[_ngcontent-%COMP%] {\n  width: 260px;\n  text-align: center !important;\n}\n\n  th.actions-header .mat-sort-header-container {\n  justify-content: center !important;\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  min-width: 118px !important;\n  height: 38px !important;\n  border-radius: 999px !important;\n  font-weight: 700 !important;\n  box-shadow: none !important;\n  transition: all 0.2s ease !important;\n  text-transform: none;\n  font-size: 12px !important;\n  letter-spacing: 0.01em;\n  padding: 0 14px !important;\n}\n\n.action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  margin-right: 4px;\n}\n\n.action-btn.edit[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.08) !important;\n  color: #1d4ed8 !important;\n  border: 1px solid rgba(37, 99, 235, 0.18) !important;\n}\n\n.action-btn.edit[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.14) !important;\n  border-color: rgba(37, 99, 235, 0.32) !important;\n  transform: translateY(-1px);\n}\n\n.action-btn.delete[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.08) !important;\n  color: #dc2626 !important;\n  border: 1px solid rgba(239, 68, 68, 0.18) !important;\n}\n\n.action-btn.delete[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.14) !important;\n  border-color: rgba(239, 68, 68, 0.3) !important;\n  transform: translateY(-1px);\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 56px 24px;\n  color: #6b7280;\n}\n\n.empty-state.loading-state[_ngcontent-%COMP%] {\n  padding: 48px 24px;\n}\n\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 56px;\n  width: 56px;\n  height: 56px;\n  color: #e5e7eb;\n  margin-bottom: 16px;\n}\n\n.empty-text[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  color: #9ca3af;\n}\n\n.paginator-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding: 16px 20px;\n  background: var(--bg-card);\n  border-radius: 0 0 16px 16px;\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);\n}\n\n  .mat-paginator {\n  background-color: transparent !important;\n}\n\n  .mat-paginator-container {\n  background-color: transparent !important;\n}\n\n  .mat-paginator-page-size-label {\n  color: #667eea !important;\n}\n\n  .mat-paginator-range-label {\n  color: #667eea !important;\n}\n\n  .mat-form-field-appearance-fill .mat-form-field-flex {\n  background-color: #f3f4f6 !important;\n}\n\n  .mat-form-field-appearance-fill.mat-focused .mat-form-field-flex {\n  background-color: #f0f4ff !important;\n}\n\n  .mat-sort-header-container {\n  align-items: center;\n  display: flex;\n}\n\n  .mat-sort-header-button {\n  border: none;\n  background: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding: 0;\n  color: #334155;\n  font-weight: 700;\n}\n\nmat-progress-spinner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n@media (max-width: 1024px) {\n  .filters-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n\n  .reset-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n\n  .action-btn[_ngcontent-%COMP%] {\n    min-width: 96px !important;\n    font-size: 11px !important;\n  }\n}\n\n@media (max-width: 720px) {\n  .user-list-shell[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n\n  .navbar[_ngcontent-%COMP%] {\n    top: 10px;\n  }\n\n  .navbar-inner[_ngcontent-%COMP%] {\n    padding: 18px;\n    border-radius: 24px;\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .nav-links[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-start;\n  }\n\n  .nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    flex: 1 1 140px;\n    justify-content: center;\n  }\n\n  .topbar-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n  }\n\n  .topbar-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .brand-title[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n\n  .brand-logo[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 48px;\n  }\n\n  .page-header[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n\n  .header-badge[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n  }\n\n  .table-toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .toolbar-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .export-btn[_ngcontent-%COMP%], .create-btn[_ngcontent-%COMP%] {\n    flex: 1 1 180px;\n  }\n\n  .toolbar-title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .toolbar-subtitle[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .user-table[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n\n  .actions-cell[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n\n.dark-theme[_nghost-%COMP%]   .user-list-shell[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .user-list-shell[_ngcontent-%COMP%] {\n  background: var(--bg-app);\n}\n\n.dark-theme[_nghost-%COMP%]   .nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n\n.dark-theme[_nghost-%COMP%]   .nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(96, 165, 250, 0.12);\n  color: #bfdbfe;\n  border-color: rgba(96, 165, 250, 0.18);\n}\n\n.dark-theme[_nghost-%COMP%]   .toolbar-chip[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .toolbar-chip[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #4f46e5 0%, #3730a3 100%);\n}\n\n.dark-theme[_nghost-%COMP%]   .user-name[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  color: #f1f5f9;\n}\n\n.dark-theme[_nghost-%COMP%]   th[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   th[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  color: #818cf8;\n}\n\n.dark-theme[_nghost-%COMP%]   td[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n\n.dark-theme[_nghost-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n\n.dark-theme[_nghost-%COMP%]   .empty-state[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n\n.dark-theme[_nghost-%COMP%]   .verification-badge.verified[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .verification-badge.verified[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.2);\n  color: #4ade80;\n}\n\n.dark-theme[_nghost-%COMP%]   .verification-badge.unverified[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .verification-badge.unverified[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.2);\n  color: #f87171;\n}\n\n.dark-theme[_nghost-%COMP%]     .mat-mdc-form-field-label, .dark-theme   [_nghost-%COMP%]     .mat-mdc-form-field-label, .dark-theme[_nghost-%COMP%]     .mat-mdc-floating-label, .dark-theme   [_nghost-%COMP%]     .mat-mdc-floating-label, .dark-theme[_nghost-%COMP%]     .mdc-floating-label, .dark-theme   [_nghost-%COMP%]     .mdc-floating-label, .dark-theme[_nghost-%COMP%]     .mat-mdc-select-value-text, .dark-theme   [_nghost-%COMP%]     .mat-mdc-select-value-text, .dark-theme[_nghost-%COMP%]     input.mat-mdc-input-element, .dark-theme   [_nghost-%COMP%]     input.mat-mdc-input-element {\n  color: white !important;\n}\n\n.dark-theme[_nghost-%COMP%]     .mat-mdc-select-arrow, .dark-theme   [_nghost-%COMP%]     .mat-mdc-select-arrow {\n  color: white !important;\n}\n\n.dark-theme[_nghost-%COMP%]     .secondary-button, .dark-theme   [_nghost-%COMP%]     .secondary-button {\n  color: white !important;\n  border-color: rgba(255, 255, 255, 0.3) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2I7OztrRUFHZ0U7QUFDbEU7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiwrQ0FBK0M7RUFDL0MsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIs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LHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsY0FBYztFQUNkLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLDZEQUE2RDtBQUMvRDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxjQUFjO0FBQ2hCOztBQUVBOzs7OztFQUtFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixpREFBaUQ7QUFDbkQiLCJmaWxlIjoidXNlci1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udXNlci1saXN0LXNoZWxsIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJhY2tncm91bmQ6XG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCB0b3AgbGVmdCwgcmdiYSg1OSwgMTMwLCAyNDYsIDAuMTgpLCB0cmFuc3BhcmVudCAyOCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgcmlnaHQgY2VudGVyLCByZ2JhKDE0LCAxNjUsIDIzMywgMC4xNiksIHRyYW5zcGFyZW50IDI0JSksXG4gICAgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2VlZjRmZiAwJSwgI2Y4ZmJmZiA0NiUsICNlZGYzZmIgMTAwJSk7XG59XG5cbi5uYXZiYXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDE2cHg7XG4gIHotaW5kZXg6IDIwO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4ubmF2YmFyLWlubmVyIHtcbiAgbWF4LXdpZHRoOiAxMjQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxOHB4IDIycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAyOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zdXJmYWNlKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICBib3gtc2hhZG93OiAwIDE4cHggNDVweCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xufVxuXG4uYnJhbmQtYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG59XG5cbi5icmFuZC1sb2dvIHtcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyNHB4IHJnYmEoMzcsIDk5LCAyMzUsIDAuMTYpO1xuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJyYW5kLWxvZ28gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5icmFuZC1raWNrZXIge1xuICBtYXJnaW46IDAgMCA0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xufVxuXG4uYnJhbmQtdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW1haW4pO1xufVxuXG4ubmF2LWxpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5uYXYtbGlua3MgYSB7XG4gIG1pbi1oZWlnaHQ6IDQycHg7XG4gIHBhZGRpbmc6IDAgMTRweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgY29sb3I6ICM0NzU1Njk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLCBjb2xvciAwLjJzIGVhc2UsIGJvcmRlci1jb2xvciAwLjJzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2U7XG59XG5cbi5uYXYtbGlua3MgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzcsIDk5LCAyMzUsIDAuMDgpO1xuICBjb2xvcjogIzFkNGVkODtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDM3LCA5OSwgMjM1LCAwLjEyKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuXG4udG9wYmFyLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG59XG5cbi5oZWFkZXItYnV0dG9uIHtcbiAgaGVpZ2h0OiA0NHB4O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnNlY29uZGFyeS1idXR0b24ge1xuICBib3JkZXItY29sb3I6ICNjYmQ1ZTEgIWltcG9ydGFudDtcbiAgY29sb3I6ICMxZTI5M2IgIWltcG9ydGFudDtcbn1cblxuLnVzZXItbGlzdC1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyNDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiA4cHggMjBweCAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnBhZ2UtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGdhcDogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZXllYnJvdyB7XG4gIG1hcmdpbjogMCAwIDhweDtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4xOGVtO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5wYWdlLWhlYWRlciBoMSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW1haW4pO1xuICBmb250LXNpemU6IDQwcHg7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDEuMDU7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5wYWdlLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBtYXgtd2lkdGg6IDY0MHB4O1xuICBsaW5lLWhlaWdodDogMS42O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uaGVhZGVyLWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc3VyZmFjZSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgY29sb3I6IHZhcigtLXRleHQtbWFpbik7XG4gIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLmhlYWRlci1iYWRnZSBzdHJvbmcge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5oZWFkZXItYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTRweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZmlsdGVycy1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY2FyZCk7XG4gIHBhZGRpbmc6IDI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgMjBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDI2MHB4LCAxLjRmcikgbWlubWF4KDIyMHB4LCAxZnIpIGF1dG87XG4gIGdhcDogMThweDtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICM2MzY2ZjE7XG59XG5cbi5maWx0ZXJzLXNlY3Rpb24gbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNlYXJjaC1maWVsZCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4ucmVzZXQtYnRuIHtcbiAgbWluLXdpZHRoOiAxNjhweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICBib3JkZXItcmFkaXVzOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgY29sb3I6ICM0ZjQ2ZTUgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDc5LCA3MCwgMjI5LCAwLjE4KSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDhweCAxOHB4IHJnYmEoNzksIDcwLCAyMjksIDAuMDgpICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UsIGJveC1zaGFkb3cgMC4ycyBlYXNlLCBib3JkZXItY29sb3IgMC4ycyBlYXNlICFpbXBvcnRhbnQ7XG59XG5cbi5yZXNldC1idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCkgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDc5LCA3MCwgMjI5LCAwLjM1KSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDEycHggMjJweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjE0KSAhaW1wb3J0YW50O1xufVxuXG4udGFibGUtcGFuZWwge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jYXJkKTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICM2MzY2ZjE7XG59XG5cbi50YWJsZS10b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDI0cHggMjhweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXN1cmZhY2UpO1xufVxuXG4udG9vbGJhci10aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzY2N2VlYTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi50b29sYmFyLXN1YnRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzljYTNhZjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4udG9vbGJhci1jaGlwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjQpO1xufVxuXG4udG9vbGJhci1hY3Rpb25zIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZXhwb3J0LWJ0bixcbi5jcmVhdGUtYnRuIHtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgbWluLWhlaWdodDogNDZweDtcbiAgYm9yZGVyLXJhZGl1czogMTRweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UsIGJveC1zaGFkb3cgMC4ycyBlYXNlICFpbXBvcnRhbnQ7XG59XG5cbi5leHBvcnQtYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICBjb2xvcjogIzQ3NTU2OSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE0OCwgMTYzLCAxODQsIDAuMzIpICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE4cHggcmdiYSgxNSwgMjMsIDQyLCAwLjA2KSAhaW1wb3J0YW50O1xufVxuXG4uZXhwb3J0LWJ0bjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCkgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDM3LCA5OSwgMjM1LCAwLjMpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMWQ0ZWQ4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMTJweCAyNHB4IHJnYmEoMzcsIDk5LCAyMzUsIDAuMSkgIWltcG9ydGFudDtcbn1cblxuLmNyZWF0ZS1idG4ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTZhMzRhIDAlLCAjMDU5NjY5IDEwMCUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDEwcHggMjRweCByZ2JhKDUsIDE1MCwgMTA1LCAwLjI0KSAhaW1wb3J0YW50O1xufVxuXG4uY3JlYXRlLWJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDUsIDE1MCwgMTA1LCAwLjMyKSAhaW1wb3J0YW50O1xufVxuXG4udGFibGUtc2Nyb2xsIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxuLnVzZXItdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIG1pbi13aWR0aDogNzYwcHg7XG59XG5cbnRoIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjNmNGY2LCAjZmZmZmZmKTtcbiAgY29sb3I6ICM2NjdlZWE7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHBhZGRpbmc6IDE4cHggMThweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTVlN2ViO1xufVxuXG50ZCB7XG4gIHBhZGRpbmc6IDE4cHggMThweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjVmOTtcbiAgY29sb3I6ICMzNzQxNTE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxudHI6aG92ZXIgdGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZiO1xufVxuXG4udXNlci1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMxMTE4Mjc7XG59XG5cbi51c2VyLWVtYWlsIHtcbiAgY29sb3I6ICM2YjcyODA7XG59XG5cbi5yb2xlLWNoaXAge1xuICBib3JkZXItcmFkaXVzOiA5OTlweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDZweCAxNHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzJweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5yb2xlLWNoaXAuYWRtaW4ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmJiZjI0IDAlLCAjZjU5ZTBiIDEwMCUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzgzNTBmICFpbXBvcnRhbnQ7XG59XG5cbi5yb2xlLWNoaXAudXNlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2MGE1ZmEgMCUsICMzYjgyZjYgMTAwJSkgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi52ZXJpZmljYXRpb24tYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLnZlcmlmaWNhdGlvbi1iYWRnZS52ZXJpZmllZCB7XG4gIGNvbG9yOiAjMDU5NjY5O1xuICBiYWNrZ3JvdW5kOiAjZDFmYWU1O1xufVxuXG4udmVyaWZpY2F0aW9uLWJhZGdlLnVudmVyaWZpZWQge1xuICBjb2xvcjogI2RjMjYyNjtcbiAgYmFja2dyb3VuZDogI2ZlZTJlMjtcbn1cblxuLmFjdGlvbnMtY2VsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4ubWF0LWNvbHVtbi1pc0VtYWlsVmVyaWZpZWQsXG4ubWF0LWNvbHVtbi1hY3Rpb25zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWN0aW9ucy1oZWFkZXIge1xuICB3aWR0aDogMjYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgdGguYWN0aW9ucy1oZWFkZXIgLm1hdC1zb3J0LWhlYWRlci1jb250YWluZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uYWN0aW9uLWJ0biB7XG4gIG1pbi13aWR0aDogMTE4cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzOHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgcGFkZGluZzogMCAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hY3Rpb24tYnRuIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLmFjdGlvbi1idG4uZWRpdCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzcsIDk5LCAyMzUsIDAuMDgpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMWQ0ZWQ4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzcsIDk5LCAyMzUsIDAuMTgpICFpbXBvcnRhbnQ7XG59XG5cbi5hY3Rpb24tYnRuLmVkaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDM3LCA5OSwgMjM1LCAwLjE0KSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHJnYmEoMzcsIDk5LCAyMzUsIDAuMzIpICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuLmFjdGlvbi1idG4uZGVsZXRlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzksIDY4LCA2OCwgMC4wOCkgIWltcG9ydGFudDtcbiAgY29sb3I6ICNkYzI2MjYgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzksIDY4LCA2OCwgMC4xOCkgIWltcG9ydGFudDtcbn1cblxuLmFjdGlvbi1idG4uZGVsZXRlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzksIDY4LCA2OCwgMC4xNCkgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjMpICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuLmVtcHR5LXN0YXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDU2cHggMjRweDtcbiAgY29sb3I6ICM2YjcyODA7XG59XG5cbi5lbXB0eS1zdGF0ZS5sb2FkaW5nLXN0YXRlIHtcbiAgcGFkZGluZzogNDhweCAyNHB4O1xufVxuXG4uZW1wdHktc3RhdGUgbWF0LWljb24ge1xuICBmb250LXNpemU6IDU2cHg7XG4gIHdpZHRoOiA1NnB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGNvbG9yOiAjZTVlN2ViO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uZW1wdHktdGV4dCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgY29sb3I6ICM5Y2EzYWY7XG59XG5cbi5wYWdpbmF0b3Itd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY2FyZCk7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxNnB4IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgLTJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtcGFnaW5hdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtcGFnaW5hdG9yLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUtbGFiZWwge1xuICBjb2xvcjogIzY2N2VlYSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1wYWdpbmF0b3ItcmFuZ2UtbGFiZWwge1xuICBjb2xvcjogIzY2N2VlYSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjYgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmNGZmICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbjo6bmctZGVlcCAubWF0LXNvcnQtaGVhZGVyLWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogIzMzNDE1NTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxubWF0LXByb2dyZXNzLXNwaW5uZXIge1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuZmlsdGVycy1zZWN0aW9uIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDEycHg7XG4gIH1cblxuICAucmVzZXQtYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnBhZ2UtaGVhZGVyIGgxIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cblxuICAuYWN0aW9uLWJ0biB7XG4gICAgbWluLXdpZHRoOiA5NnB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC51c2VyLWxpc3Qtc2hlbGwge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICAubmF2YmFyIHtcbiAgICB0b3A6IDEwcHg7XG4gIH1cblxuICAubmF2YmFyLWlubmVyIHtcbiAgICBwYWRkaW5nOiAxOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgfVxuXG4gIC5uYXYtbGlua3Mge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG4gIC5uYXYtbGlua3MgYSB7XG4gICAgZmxleDogMSAxIDE0MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLnRvcGJhci1hY3Rpb25zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnRvcGJhci1hY3Rpb25zIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuYnJhbmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuXG4gIC5icmFuZC1sb2dvIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICB9XG5cbiAgLnBhZ2UtaGVhZGVyIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuXG4gIC5oZWFkZXItYmFkZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC50YWJsZS10b29sYmFyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgLnRvb2xiYXItYWN0aW9ucyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZXhwb3J0LWJ0bixcbiAgLmNyZWF0ZS1idG4ge1xuICAgIGZsZXg6IDEgMSAxODBweDtcbiAgfVxuXG4gIC50b29sYmFyLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAudG9vbGJhci1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLnVzZXItdGFibGUge1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5hY3Rpb25zLWNlbGwge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxufVxuXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSAudXNlci1saXN0LXNoZWxsIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctYXBwKTtcbn1cblxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgLm5hdi1saW5rcyBhIHtcbiAgY29sb3I6ICNjYmQ1ZTE7XG59XG5cbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIC5uYXYtbGlua3MgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoOTYsIDE2NSwgMjUwLCAwLjEyKTtcbiAgY29sb3I6ICNiZmRiZmU7XG4gIGJvcmRlci1jb2xvcjogcmdiYSg5NiwgMTY1LCAyNTAsIDAuMTgpO1xufVxuXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSAudG9vbGJhci1jaGlwIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzRmNDZlNSAwJSwgIzM3MzBhMyAxMDAlKTtcbn1cblxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgLnVzZXItbmFtZSB7XG4gIGNvbG9yOiAjZjFmNWY5O1xufVxuXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB0aCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gIGNvbG9yOiAjODE4Y2Y4O1xufVxuXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB0ZCB7XG4gIGNvbG9yOiAjY2JkNWUxO1xufVxuXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB0cjpob3ZlciB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG59XG5cbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIC5lbXB0eS1zdGF0ZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbn1cblxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgLnZlcmlmaWNhdGlvbi1iYWRnZS52ZXJpZmllZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzQsIDE5NywgOTQsIDAuMik7XG4gIGNvbG9yOiAjNGFkZTgwO1xufVxuXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSAudmVyaWZpY2F0aW9uLWJhZGdlLnVudmVyaWZpZWQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjIpO1xuICBjb2xvcjogI2Y4NzE3MTtcbn1cblxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgOjpuZy1kZWVwIC5tYXQtbWRjLWZvcm0tZmllbGQtbGFiZWwsXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSA6Om5nLWRlZXAgLm1hdC1tZGMtZmxvYXRpbmctbGFiZWwsXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSA6Om5nLWRlZXAgLm1kYy1mbG9hdGluZy1sYWJlbCxcbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIDo6bmctZGVlcCAubWF0LW1kYy1zZWxlY3QtdmFsdWUtdGV4dCxcbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIDo6bmctZGVlcCBpbnB1dC5tYXQtbWRjLWlucHV0LWVsZW1lbnQge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgOjpuZy1kZWVwIC5tYXQtbWRjLXNlbGVjdC1hcnJvdyB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSA6Om5nLWRlZXAgLnNlY29uZGFyeS1idXR0b24ge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgIWltcG9ydGFudDtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy91c2Vycy9jb21wb25lbnRzL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiOzs7a0VBR2dFO0FBQ2xFOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQiw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsK0NBQStDO0VBQy9DLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsOEZBQThGO0FBQ2hHOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGNBQWM7RUFDZCxxQ0FBcUM7RUFDckMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsU0FBUztFQUNULGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixxQ0FBcUM7RUFDckMsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQ0FBMkM7RUFDM0MsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtRUFBbUU7RUFDbkUsU0FBUztFQUNULGdCQUFnQjtFQUNoQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0Isb0RBQW9EO0VBQ3BELHlEQUF5RDtFQUN6RCx3RkFBd0Y7QUFDMUY7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsZ0RBQWdEO0VBQ2hELDBEQUEwRDtBQUM1RDs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsMkNBQTJDO0VBQzNDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFDNUMsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWiw2REFBNkQ7RUFDN0QsZ0JBQWdCO0VBQ2hCLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixnRUFBZ0U7QUFDbEU7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLHNEQUFzRDtFQUN0RCx3REFBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsK0NBQStDO0VBQy9DLHlCQUF5QjtFQUN6Qix5REFBeUQ7QUFDM0Q7O0FBRUE7RUFDRSx3RUFBd0U7RUFDeEUsdUJBQXVCO0VBQ3ZCLDBEQUEwRDtBQUM1RDs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QywwREFBMEQ7QUFDNUQ7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVEQUF1RDtFQUN2RCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSx3RUFBd0U7RUFDeEUseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usd0VBQXdFO0VBQ3hFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0IsMkJBQTJCO0VBQzNCLG9DQUFvQztFQUNwQyxvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLHlCQUF5QjtFQUN6QixvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsZ0RBQWdEO0VBQ2hELDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDhDQUE4QztFQUM5Qyx5QkFBeUI7RUFDekIsb0RBQW9EO0FBQ3REOztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLCtDQUErQztFQUMvQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0lBQzFCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBOztJQUVFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSw2REFBNkQ7QUFDL0Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsY0FBYztBQUNoQjs7QUFFQTs7Ozs7RUFLRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsaURBQWlEO0FBQ25EOztBQUVBLGdoMUJBQWdoMUIiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udXNlci1saXN0LXNoZWxsIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJhY2tncm91bmQ6XG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCB0b3AgbGVmdCwgcmdiYSg1OSwgMTMwLCAyNDYsIDAuMTgpLCB0cmFuc3BhcmVudCAyOCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgcmlnaHQgY2VudGVyLCByZ2JhKDE0LCAxNjUsIDIzMywgMC4xNiksIHRyYW5zcGFyZW50IDI0JSksXG4gICAgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2VlZjRmZiAwJSwgI2Y4ZmJmZiA0NiUsICNlZGYzZmIgMTAwJSk7XG59XG5cbi5uYXZiYXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDE2cHg7XG4gIHotaW5kZXg6IDIwO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4ubmF2YmFyLWlubmVyIHtcbiAgbWF4LXdpZHRoOiAxMjQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxOHB4IDIycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAyOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zdXJmYWNlKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICBib3gtc2hhZG93OiAwIDE4cHggNDVweCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xufVxuXG4uYnJhbmQtYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG59XG5cbi5icmFuZC1sb2dvIHtcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyNHB4IHJnYmEoMzcsIDk5LCAyMzUsIDAuMTYpO1xuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJyYW5kLWxvZ28gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5icmFuZC1raWNrZXIge1xuICBtYXJnaW46IDAgMCA0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xufVxuXG4uYnJhbmQtdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW1haW4pO1xufVxuXG4ubmF2LWxpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5uYXYtbGlua3MgYSB7XG4gIG1pbi1oZWlnaHQ6IDQycHg7XG4gIHBhZGRpbmc6IDAgMTRweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgY29sb3I6ICM0NzU1Njk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLCBjb2xvciAwLjJzIGVhc2UsIGJvcmRlci1jb2xvciAwLjJzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2U7XG59XG5cbi5uYXYtbGlua3MgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzcsIDk5LCAyMzUsIDAuMDgpO1xuICBjb2xvcjogIzFkNGVkODtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDM3LCA5OSwgMjM1LCAwLjEyKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuXG4udG9wYmFyLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG59XG5cbi5oZWFkZXItYnV0dG9uIHtcbiAgaGVpZ2h0OiA0NHB4O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnNlY29uZGFyeS1idXR0b24ge1xuICBib3JkZXItY29sb3I6ICNjYmQ1ZTEgIWltcG9ydGFudDtcbiAgY29sb3I6ICMxZTI5M2IgIWltcG9ydGFudDtcbn1cblxuLnVzZXItbGlzdC1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyNDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiA4cHggMjBweCAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnBhZ2UtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGdhcDogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZXllYnJvdyB7XG4gIG1hcmdpbjogMCAwIDhweDtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4xOGVtO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5wYWdlLWhlYWRlciBoMSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW1haW4pO1xuICBmb250LXNpemU6IDQwcHg7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDEuMDU7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5wYWdlLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBtYXgtd2lkdGg6IDY0MHB4O1xuICBsaW5lLWhlaWdodDogMS42O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uaGVhZGVyLWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc3VyZmFjZSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgY29sb3I6IHZhcigtLXRleHQtbWFpbik7XG4gIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLmhlYWRlci1iYWRnZSBzdHJvbmcge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5oZWFkZXItYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTRweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZmlsdGVycy1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY2FyZCk7XG4gIHBhZGRpbmc6IDI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgMjBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDI2MHB4LCAxLjRmcikgbWlubWF4KDIyMHB4LCAxZnIpIGF1dG87XG4gIGdhcDogMThweDtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICM2MzY2ZjE7XG59XG5cbi5maWx0ZXJzLXNlY3Rpb24gbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNlYXJjaC1maWVsZCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4ucmVzZXQtYnRuIHtcbiAgbWluLXdpZHRoOiAxNjhweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICBib3JkZXItcmFkaXVzOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgY29sb3I6ICM0ZjQ2ZTUgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDc5LCA3MCwgMjI5LCAwLjE4KSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDhweCAxOHB4IHJnYmEoNzksIDcwLCAyMjksIDAuMDgpICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UsIGJveC1zaGFkb3cgMC4ycyBlYXNlLCBib3JkZXItY29sb3IgMC4ycyBlYXNlICFpbXBvcnRhbnQ7XG59XG5cbi5yZXNldC1idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCkgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDc5LCA3MCwgMjI5LCAwLjM1KSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDEycHggMjJweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjE0KSAhaW1wb3J0YW50O1xufVxuXG4udGFibGUtcGFuZWwge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jYXJkKTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICM2MzY2ZjE7XG59XG5cbi50YWJsZS10b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDI0cHggMjhweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXN1cmZhY2UpO1xufVxuXG4udG9vbGJhci10aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzY2N2VlYTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi50b29sYmFyLXN1YnRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzljYTNhZjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4udG9vbGJhci1jaGlwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjQpO1xufVxuXG4udG9vbGJhci1hY3Rpb25zIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZXhwb3J0LWJ0bixcbi5jcmVhdGUtYnRuIHtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgbWluLWhlaWdodDogNDZweDtcbiAgYm9yZGVyLXJhZGl1czogMTRweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UsIGJveC1zaGFkb3cgMC4ycyBlYXNlICFpbXBvcnRhbnQ7XG59XG5cbi5leHBvcnQtYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICBjb2xvcjogIzQ3NTU2OSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE0OCwgMTYzLCAxODQsIDAuMzIpICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE4cHggcmdiYSgxNSwgMjMsIDQyLCAwLjA2KSAhaW1wb3J0YW50O1xufVxuXG4uZXhwb3J0LWJ0bjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCkgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDM3LCA5OSwgMjM1LCAwLjMpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMWQ0ZWQ4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMTJweCAyNHB4IHJnYmEoMzcsIDk5LCAyMzUsIDAuMSkgIWltcG9ydGFudDtcbn1cblxuLmNyZWF0ZS1idG4ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTZhMzRhIDAlLCAjMDU5NjY5IDEwMCUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDEwcHggMjRweCByZ2JhKDUsIDE1MCwgMTA1LCAwLjI0KSAhaW1wb3J0YW50O1xufVxuXG4uY3JlYXRlLWJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDUsIDE1MCwgMTA1LCAwLjMyKSAhaW1wb3J0YW50O1xufVxuXG4udGFibGUtc2Nyb2xsIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxuLnVzZXItdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIG1pbi13aWR0aDogNzYwcHg7XG59XG5cbnRoIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjNmNGY2LCAjZmZmZmZmKTtcbiAgY29sb3I6ICM2NjdlZWE7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHBhZGRpbmc6IDE4cHggMThweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTVlN2ViO1xufVxuXG50ZCB7XG4gIHBhZGRpbmc6IDE4cHggMThweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjVmOTtcbiAgY29sb3I6ICMzNzQxNTE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxudHI6aG92ZXIgdGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZiO1xufVxuXG4udXNlci1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMxMTE4Mjc7XG59XG5cbi51c2VyLWVtYWlsIHtcbiAgY29sb3I6ICM2YjcyODA7XG59XG5cbi5yb2xlLWNoaXAge1xuICBib3JkZXItcmFkaXVzOiA5OTlweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDZweCAxNHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzJweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5yb2xlLWNoaXAuYWRtaW4ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmJiZjI0IDAlLCAjZjU5ZTBiIDEwMCUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzgzNTBmICFpbXBvcnRhbnQ7XG59XG5cbi5yb2xlLWNoaXAudXNlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2MGE1ZmEgMCUsICMzYjgyZjYgMTAwJSkgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi52ZXJpZmljYXRpb24tYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLnZlcmlmaWNhdGlvbi1iYWRnZS52ZXJpZmllZCB7XG4gIGNvbG9yOiAjMDU5NjY5O1xuICBiYWNrZ3JvdW5kOiAjZDFmYWU1O1xufVxuXG4udmVyaWZpY2F0aW9uLWJhZGdlLnVudmVyaWZpZWQge1xuICBjb2xvcjogI2RjMjYyNjtcbiAgYmFja2dyb3VuZDogI2ZlZTJlMjtcbn1cblxuLmFjdGlvbnMtY2VsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4ubWF0LWNvbHVtbi1pc0VtYWlsVmVyaWZpZWQsXG4ubWF0LWNvbHVtbi1hY3Rpb25zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWN0aW9ucy1oZWFkZXIge1xuICB3aWR0aDogMjYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgdGguYWN0aW9ucy1oZWFkZXIgLm1hdC1zb3J0LWhlYWRlci1jb250YWluZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uYWN0aW9uLWJ0biB7XG4gIG1pbi13aWR0aDogMTE4cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzOHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgcGFkZGluZzogMCAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hY3Rpb24tYnRuIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLmFjdGlvbi1idG4uZWRpdCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzcsIDk5LCAyMzUsIDAuMDgpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMWQ0ZWQ4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzcsIDk5LCAyMzUsIDAuMTgpICFpbXBvcnRhbnQ7XG59XG5cbi5hY3Rpb24tYnRuLmVkaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDM3LCA5OSwgMjM1LCAwLjE0KSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHJnYmEoMzcsIDk5LCAyMzUsIDAuMzIpICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuLmFjdGlvbi1idG4uZGVsZXRlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzksIDY4LCA2OCwgMC4wOCkgIWltcG9ydGFudDtcbiAgY29sb3I6ICNkYzI2MjYgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzksIDY4LCA2OCwgMC4xOCkgIWltcG9ydGFudDtcbn1cblxuLmFjdGlvbi1idG4uZGVsZXRlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzksIDY4LCA2OCwgMC4xNCkgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjMpICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuLmVtcHR5LXN0YXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDU2cHggMjRweDtcbiAgY29sb3I6ICM2YjcyODA7XG59XG5cbi5lbXB0eS1zdGF0ZS5sb2FkaW5nLXN0YXRlIHtcbiAgcGFkZGluZzogNDhweCAyNHB4O1xufVxuXG4uZW1wdHktc3RhdGUgbWF0LWljb24ge1xuICBmb250LXNpemU6IDU2cHg7XG4gIHdpZHRoOiA1NnB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGNvbG9yOiAjZTVlN2ViO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uZW1wdHktdGV4dCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgY29sb3I6ICM5Y2EzYWY7XG59XG5cbi5wYWdpbmF0b3Itd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY2FyZCk7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxNnB4IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgLTJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtcGFnaW5hdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtcGFnaW5hdG9yLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUtbGFiZWwge1xuICBjb2xvcjogIzY2N2VlYSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1wYWdpbmF0b3ItcmFuZ2UtbGFiZWwge1xuICBjb2xvcjogIzY2N2VlYSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjYgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmNGZmICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbjo6bmctZGVlcCAubWF0LXNvcnQtaGVhZGVyLWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogIzMzNDE1NTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxubWF0LXByb2dyZXNzLXNwaW5uZXIge1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuZmlsdGVycy1zZWN0aW9uIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDEycHg7XG4gIH1cblxuICAucmVzZXQtYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnBhZ2UtaGVhZGVyIGgxIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cblxuICAuYWN0aW9uLWJ0biB7XG4gICAgbWluLXdpZHRoOiA5NnB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC51c2VyLWxpc3Qtc2hlbGwge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICAubmF2YmFyIHtcbiAgICB0b3A6IDEwcHg7XG4gIH1cblxuICAubmF2YmFyLWlubmVyIHtcbiAgICBwYWRkaW5nOiAxOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgfVxuXG4gIC5uYXYtbGlua3Mge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG4gIC5uYXYtbGlua3MgYSB7XG4gICAgZmxleDogMSAxIDE0MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLnRvcGJhci1hY3Rpb25zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnRvcGJhci1hY3Rpb25zIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuYnJhbmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuXG4gIC5icmFuZC1sb2dvIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICB9XG5cbiAgLnBhZ2UtaGVhZGVyIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuXG4gIC5oZWFkZXItYmFkZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC50YWJsZS10b29sYmFyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgLnRvb2xiYXItYWN0aW9ucyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZXhwb3J0LWJ0bixcbiAgLmNyZWF0ZS1idG4ge1xuICAgIGZsZXg6IDEgMSAxODBweDtcbiAgfVxuXG4gIC50b29sYmFyLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAudG9vbGJhci1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLnVzZXItdGFibGUge1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5hY3Rpb25zLWNlbGwge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxufVxuXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSAudXNlci1saXN0LXNoZWxsIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctYXBwKTtcbn1cblxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgLm5hdi1saW5rcyBhIHtcbiAgY29sb3I6ICNjYmQ1ZTE7XG59XG5cbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIC5uYXYtbGlua3MgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoOTYsIDE2NSwgMjUwLCAwLjEyKTtcbiAgY29sb3I6ICNiZmRiZmU7XG4gIGJvcmRlci1jb2xvcjogcmdiYSg5NiwgMTY1LCAyNTAsIDAuMTgpO1xufVxuXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSAudG9vbGJhci1jaGlwIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzRmNDZlNSAwJSwgIzM3MzBhMyAxMDAlKTtcbn1cblxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgLnVzZXItbmFtZSB7XG4gIGNvbG9yOiAjZjFmNWY5O1xufVxuXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB0aCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gIGNvbG9yOiAjODE4Y2Y4O1xufVxuXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB0ZCB7XG4gIGNvbG9yOiAjY2JkNWUxO1xufVxuXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB0cjpob3ZlciB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG59XG5cbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIC5lbXB0eS1zdGF0ZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbn1cblxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgLnZlcmlmaWNhdGlvbi1iYWRnZS52ZXJpZmllZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzQsIDE5NywgOTQsIDAuMik7XG4gIGNvbG9yOiAjNGFkZTgwO1xufVxuXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSAudmVyaWZpY2F0aW9uLWJhZGdlLnVudmVyaWZpZWQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjIpO1xuICBjb2xvcjogI2Y4NzE3MTtcbn1cblxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgOjpuZy1kZWVwIC5tYXQtbWRjLWZvcm0tZmllbGQtbGFiZWwsXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSA6Om5nLWRlZXAgLm1hdC1tZGMtZmxvYXRpbmctbGFiZWwsXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSA6Om5nLWRlZXAgLm1kYy1mbG9hdGluZy1sYWJlbCxcbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIDo6bmctZGVlcCAubWF0LW1kYy1zZWxlY3QtdmFsdWUtdGV4dCxcbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIDo6bmctZGVlcCBpbnB1dC5tYXQtbWRjLWlucHV0LWVsZW1lbnQge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgOjpuZy1kZWVwIC5tYXQtbWRjLXNlbGVjdC1hcnJvdyB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSA6Om5nLWRlZXAgLnNlY29uZGFyeS1idXR0b24ge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgIWltcG9ydGFudDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7247:
/*!********************************************************!*\
  !*** ./src/app/modules/users/services/user.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class UserService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'http://localhost:3000/v1/users';
  }
  // Obtener usuarios con paginación y filtros del servidor
  getUsers(page, limit, sortBy, role, name) {
    // Construir params objeto siguiendo el patrón del backend
    const paramsObj = {
      page: String(page),
      limit: String(limit)
    };
    // Solo agregar parámetros opcionales si tienen valor
    if (name && name.trim().length > 0) {
      paramsObj['name'] = name.trim();
      console.log('✅ Agregando name:', name.trim());
    }
    if (role && role.trim().length > 0) {
      paramsObj['role'] = role.trim();
      console.log('✅ Agregando role:', role.trim());
    }
    if (sortBy && sortBy.trim().length > 0) {
      paramsObj['sortBy'] = sortBy.trim();
      console.log('✅ Agregando sortBy:', sortBy.trim());
    }
    console.log('📡 Parámetros finales:', paramsObj);
    // Construir HttpParams
    let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    Object.keys(paramsObj).forEach(key => {
      httpParams = httpParams.set(key, paramsObj[key]);
    });
    return this.http.get(this.apiUrl, {
      params: httpParams
    });
  }
  // Crear usuario
  createUser(userData) {
    return this.http.post(this.apiUrl, userData);
  }
  // Actualizar usuario
  updateUser(id, userData) {
    return this.http.patch(`${this.apiUrl}/${id}`, userData);
  }
  // Eliminar usuario
  deleteUser(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static {
    this.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5323:
/*!*******************************************************!*\
  !*** ./src/app/modules/users/users-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersRoutingModule": () => (/* binding */ UsersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.component */ 7893);
/* harmony import */ var _core_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/guards/auth/auth.guard */ 6310);
/* harmony import */ var _core_guards_admin_admin_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/guards/admin/admin.guard */ 5228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [{
  path: '',
  component: _users_component__WEBPACK_IMPORTED_MODULE_0__.UsersComponent,
  canActivate: [_core_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard, _core_guards_admin_admin_guard__WEBPACK_IMPORTED_MODULE_2__.AdminGuard]
}];
class UsersRoutingModule {
  static {
    this.ɵfac = function UsersRoutingModule_Factory(t) {
      return new (t || UsersRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: UsersRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UsersRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 7893:
/*!**************************************************!*\
  !*** ./src/app/modules/users/users.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersComponent": () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/user-list/user-list.component */ 3099);


class UsersComponent {
  static {
    this.ɵfac = function UsersComponent_Factory(t) {
      return new (t || UsersComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UsersComponent,
      selectors: [["app-users"]],
      decls: 1,
      vars: 0,
      template: function UsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-user-list");
        }
      },
      dependencies: [_components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_0__.UserListComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8233:
/*!***********************************************!*\
  !*** ./src/app/modules/users/users.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersModule": () => (/* binding */ UsersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-routing.module */ 5323);
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.component */ 7893);
/* harmony import */ var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user-list/user-list.component */ 3099);
/* harmony import */ var _components_user_form_dialog_user_form_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user-form-dialog/user-form-dialog.component */ 7952);
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/profile/profile.component */ 9855);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);








class UsersModule {
  static {
    this.ɵfac = function UsersModule_Factory(t) {
      return new (t || UsersModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: UsersModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](UsersModule, {
    declarations: [_users_component__WEBPACK_IMPORTED_MODULE_1__.UsersComponent, _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__.UserListComponent, _components_user_form_dialog_user_form_dialog_component__WEBPACK_IMPORTED_MODULE_3__.UserFormDialogComponent, _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__.ProfileComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_users_users_module_ts.js.map