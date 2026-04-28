"use strict";
(self["webpackChunkfrontend_e_Sueldos_angular"] = self["webpackChunkfrontend_e_Sueldos_angular"] || []).push([["src_app_modules_auth_auth_module_ts"],{

/***/ 9988:
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/auth-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login/login.component */ 1999);
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/register/register.component */ 8612);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: 'login',
  component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'register',
  component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent
}, {
  // Si alguien entra a /auth directamente, lo mandamos al login por defecto
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}];
class AuthRoutingModule {
  static {
    this.ɵfac = function AuthRoutingModule_Factory(t) {
      return new (t || AuthRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AuthRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 3970:
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 9988);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ 1999);
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/register/register.component */ 8612);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);




// ReactiveFormsModule para que funcionen los formularios

// SharedModule que trae el MatSnackBar


class AuthModule {
  static {
    this.ɵfac = function AuthModule_Factory(t) {
      return new (t || AuthModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AuthModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
})();

/***/ }),

/***/ 1999:
/*!******************************************************************!*\
  !*** ./src/app/modules/auth/components/login/login.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/auth/auth.service */ 7990);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);











function LoginComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El correo es obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ingresa un correo v\u00E1lido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " La contrase\u00F1a es obligatoria ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Debe tener al menos 6 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ingresar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_mat_spinner_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 26);
  }
}
class LoginComponent {
  constructor(fb, authService, router, snackBar) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.snackBar = snackBar;
    this.isLoading = false;
    this.hidePassword = true;
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]]
    });
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    const {
      email,
      password
    } = this.loginForm.value;
    this.authService.login(email, password).subscribe({
      next: () => {
        this.isLoading = false;
        this.snackBar.open('¡Login exitoso!', 'Cerrar', {
          duration: 3000
        });
        // 🔥 Mejor redirigir a principal
        this.router.navigate(['/principal']);
      },
      error: err => {
        this.isLoading = false;
        const errorMessage = err.error?.message || 'Error al iniciar sesión. Verifica tus credenciales.';
        this.snackBar.open(errorMessage, 'Cerrar', {
          duration: 4000,
          panelClass: ['error-snackbar']
        });
      }
    });
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 45,
      vars: 10,
      consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "bg-gradient-to-br", "from-blue-600", "to-indigo-700", "px-4"], [1, "w-full", "max-w-md", "!rounded-3xl", "!shadow-2xl", "p-6", "bg-white/95", "backdrop-blur"], [1, "flex", "flex-col", "items-center", "mb-6"], [1, "mb-4"], ["src", "https://media.licdn.com/dms/image/v2/D4D0BAQGibhoMeCL-mg/company-logo_200_200/company-logo_200_200/0/1667320508791/e_sueldos_logo?e=2147483647&v=beta&t=6BpHD4ZVbBNymqB5aEkJNEXyJ-0qGr2At_F6mEePRAw", "alt", "eSueldos Logo", 1, "auth-logo", 2, "background", "white"], [1, "text-3xl", "font-bold", "text-gray-800"], [1, "text-gray-500", "text-sm", "mt-1"], [1, "flex", "flex-col", "items-center", "mb-4"], [1, "!text-2xl", "!font-semibold", "text-gray-800"], [1, "mt-1", "text-center", "text-gray-500"], [1, "flex", "flex-col", "gap-5", 3, "formGroup", "ngSubmit"], [1, "input-wrapper"], [1, "input-label"], [1, "input-container"], [1, "input-icon"], ["type", "email", "formControlName", "email", "placeholder", "ejemplo@correo.com", 1, "custom-input"], ["class", "input-error", 4, "ngIf"], ["formControlName", "password", "placeholder", "********", 1, "custom-input", 3, "type"], ["mat-icon-button", "", "type", "button", 1, "toggle-btn", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "!py-6", "mt-2", "flex", "justify-center", "items-center", "w-full", "!rounded-xl", "!text-lg", "hover:scale-105", "transition-all", "duration-200", 3, "disabled"], [4, "ngIf"], ["diameter", "26", 4, "ngIf"], [1, "text-center", "mt-6"], [1, "text-gray-600", "text-sm"], ["routerLink", "/auth/register", 1, "text-blue-600", "font-semibold", "hover:underline", "ml-1"], [1, "input-error"], ["diameter", "26"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " eSueldos ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Sistema de gesti\u00F3n de sueldos ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card-header", 7)(10, "mat-card-title", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Iniciar Sesi\u00F3n ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-card-subtitle", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Ingresa tus credenciales para continuar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-card-content")(15, "form", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_15_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11)(17, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Correo Electr\u00F3nico");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13)(20, "mat-icon", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, LoginComponent_div_23_Template, 2, 0, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, LoginComponent_div_24_Template, 2, 0, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 11)(26, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Contrase\u00F1a");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13)(29, "mat-icon", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "lock");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_32_listener() {
            return ctx.hidePassword = !ctx.hidePassword;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, LoginComponent_div_35_Template, 2, 0, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, LoginComponent_div_36_Template, 2, 0, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, LoginComponent_span_38_Template, 2, 0, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, LoginComponent_mat_spinner_39_Template, 1, 0, "mat-spinner", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-card-footer", 22)(41, "p", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " \u00BFNo tienes una cuenta? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " Reg\u00EDstrate aqu\u00ED ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          let tmp_5_0;
          let tmp_6_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.hasError("required")));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.hasError("email")));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hidePassword ? "password" : "text");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.hidePassword ? "visibility_off" : "visibility", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.hasError("required")));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.loginForm.get("password")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx.loginForm.get("password")) == null ? null : tmp_6_0.hasError("minlength")));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loginForm.invalid || ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardFooter, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinner],
      styles: [".auth-logo[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 56px;\n  display: block;\n  object-fit: contain;\n  border-radius: 16px;\n  box-shadow: 0 12px 28px rgba(37, 99, 235, 0.14);\n  padding: 10px 16px;\n  background: #fff;\n}\n\n.input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\r\n\r\n.input-label[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  color: #374151;\r\n}\r\n\r\n\r\n.input-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: #f3f4f6;\r\n  border-radius: 12px;\r\n  padding: 0 12px;\r\n  transition: background-color 0.2s ease, box-shadow 0.2s ease;\r\n}\r\n\r\n.input-container[_ngcontent-%COMP%]:focus-within {\r\n  background-color: #eff6ff;\r\n  box-shadow: 0 0 0 2px #3b82f6;\r\n}\r\n\r\n\r\n.input-icon[_ngcontent-%COMP%] {\r\n  color: #9ca3af;\r\n  font-size: 20px;\r\n  margin-right: 8px;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.input-container[_ngcontent-%COMP%]:focus-within   .input-icon[_ngcontent-%COMP%] {\r\n  color: #3b82f6;\r\n}\r\n\r\n\r\n.custom-input[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  border: none;\r\n  outline: none;\r\n  background: transparent;\r\n  padding: 14px 0;\r\n  font-size: 15px;\r\n  color: #111827;\r\n  font-family: inherit;\r\n}\r\n\r\n.custom-input[_ngcontent-%COMP%]::placeholder {\r\n  color: #d1d5db;\r\n}\r\n\r\n\r\n.toggle-btn[_ngcontent-%COMP%] {\r\n  color: #9ca3af !important;\r\n  margin-right: -8px;\r\n}\r\n\r\n.toggle-btn[_ngcontent-%COMP%]:hover {\r\n  color: #3b82f6 !important;\r\n}\r\n\r\n\r\n.input-error[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  color: #ef4444;\r\n  margin-top: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNCO0FBQ3RCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiwrQ0FBK0M7RUFDL0Msa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBLFVBQVU7QUFDVjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDREQUE0RDtBQUM5RDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7QUFDL0I7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUEsaUNBQWlDO0FBQ2pDO0VBQ0UsT0FBTztFQUNQLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUEscUNBQXFDO0FBQ3JDO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7QUFDakIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFdyYXBwZXIgZGVsIGlucHV0ICovXG4uYXV0aC1sb2dvIHtcbiAgd2lkdGg6IDIyMHB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDEycHggMjhweCByZ2JhKDM3LCA5OSwgMjM1LCAwLjE0KTtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uaW5wdXQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNnB4O1xufVxuXHJcbi8qIExhYmVsICovXHJcbi5pbnB1dC1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMzNzQxNTE7XHJcbn1cclxuXHJcbi8qIENvbnRlbmVkb3IgZGVsIGlucHV0IGNvbiDDrWNvbm8gKi9cclxuLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAwIDEycHg7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UsIGJveC1zaGFkb3cgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uaW5wdXQtY29udGFpbmVyOmZvY3VzLXdpdGhpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjZmZjtcclxuICBib3gtc2hhZG93OiAwIDAgMCAycHggIzNiODJmNjtcclxufVxyXG5cclxuLyogw41jb25vIGRlbnRybyBkZWwgaW5wdXQgKi9cclxuLmlucHV0LWljb24ge1xyXG4gIGNvbG9yOiAjOWNhM2FmO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLmlucHV0LWNvbnRhaW5lcjpmb2N1cy13aXRoaW4gLmlucHV0LWljb24ge1xyXG4gIGNvbG9yOiAjM2I4MmY2O1xyXG59XHJcblxyXG4vKiBJbnB1dCBzaW4gZXN0aWxvcyBkZSBicm93c2VyICovXHJcbi5jdXN0b20taW5wdXQge1xyXG4gIGZsZXg6IDE7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogMTRweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzExMTgyNztcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxufVxyXG5cclxuLmN1c3RvbS1pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjZDFkNWRiO1xyXG59XHJcblxyXG4vKiBCb3TDs24gbW9zdHJhci9vY3VsdGFyIGNvbnRyYXNlw7FhICovXHJcbi50b2dnbGUtYnRuIHtcclxuICBjb2xvcjogIzljYTNhZiAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogLThweDtcclxufVxyXG5cclxuLnRvZ2dsZS1idG46aG92ZXIge1xyXG4gIGNvbG9yOiAjM2I4MmY2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIE1lbnNhamUgZGUgZXJyb3IgKi9cclxuLmlucHV0LWVycm9yIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICNlZjQ0NDQ7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hdXRoL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQkFBc0I7QUFDdEI7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLCtDQUErQztFQUMvQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUEsVUFBVTtBQUNWO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBLG1DQUFtQztBQUNuQztFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsNERBQTREO0FBQzlEOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSxpQ0FBaUM7QUFDakM7RUFDRSxPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjO0VBQ2Qsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSxxQ0FBcUM7QUFDckM7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQSx3d0dBQXd3RyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFdyYXBwZXIgZGVsIGlucHV0ICovXG4uYXV0aC1sb2dvIHtcbiAgd2lkdGg6IDIyMHB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDEycHggMjhweCByZ2JhKDM3LCA5OSwgMjM1LCAwLjE0KTtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uaW5wdXQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNnB4O1xufVxuXHJcbi8qIExhYmVsICovXHJcbi5pbnB1dC1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMzNzQxNTE7XHJcbn1cclxuXHJcbi8qIENvbnRlbmVkb3IgZGVsIGlucHV0IGNvbiDDg8KtY29ubyAqL1xyXG4uaW5wdXQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDAgMTJweDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5pbnB1dC1jb250YWluZXI6Zm9jdXMtd2l0aGluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmNmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjM2I4MmY2O1xyXG59XHJcblxyXG4vKiDDg8KNY29ubyBkZW50cm8gZGVsIGlucHV0ICovXHJcbi5pbnB1dC1pY29uIHtcclxuICBjb2xvcjogIzljYTNhZjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5pbnB1dC1jb250YWluZXI6Zm9jdXMtd2l0aGluIC5pbnB1dC1pY29uIHtcclxuICBjb2xvcjogIzNiODJmNjtcclxufVxyXG5cclxuLyogSW5wdXQgc2luIGVzdGlsb3MgZGUgYnJvd3NlciAqL1xyXG4uY3VzdG9tLWlucHV0IHtcclxuICBmbGV4OiAxO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDE0cHggMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICMxMTE4Mjc7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5jdXN0b20taW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2QxZDVkYjtcclxufVxyXG5cclxuLyogQm90w4PCs24gbW9zdHJhci9vY3VsdGFyIGNvbnRyYXNlw4PCsWEgKi9cclxuLnRvZ2dsZS1idG4ge1xyXG4gIGNvbG9yOiAjOWNhM2FmICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xyXG59XHJcblxyXG4udG9nZ2xlLWJ0bjpob3ZlciB7XHJcbiAgY29sb3I6ICMzYjgyZjYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogTWVuc2FqZSBkZSBlcnJvciAqL1xyXG4uaW5wdXQtZXJyb3Ige1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogI2VmNDQ0NDtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8612:
/*!************************************************************************!*\
  !*** ./src/app/modules/auth/components/register/register.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _auth_validators_match_password_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../auth/validators/match-password.validator */ 8760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/auth/auth.service */ 7990);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);












function RegisterComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " El nombre es obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " M\u00EDnimo 3 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " El correo es obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Correo inv\u00E1lido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Contrase\u00F1a obligatoria ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " M\u00EDnimo 6 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Debes confirmar tu contrase\u00F1a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Las contrase\u00F1as no coinciden ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_span_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Registrarse");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_mat_spinner_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-spinner", 24);
  }
}
class RegisterComponent {
  constructor(fb, authService, router, snackBar) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.snackBar = snackBar;
    this.isLoading = false;
    this.hidePassword = true;
    this.hideConfirmPassword = true;
  }
  ngOnInit() {
    // Inicializamos el formulario con la validación personalizada en la raíz del group
    this.registerForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]],
      confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
    }, {
      validators: _auth_validators_match_password_validator__WEBPACK_IMPORTED_MODULE_0__.matchPasswordValidator
    }); // <-- Aplicación del custom validator
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.isLoading = true;
    // Extraemos los datos, omitiendo el confirmPassword ya que el backend no lo necesita
    const {
      confirmPassword,
      ...userData
    } = this.registerForm.value;
    this.authService.register(userData).subscribe({
      next: () => {
        this.isLoading = false;
        this.snackBar.open('¡Registro exitoso!', 'Cerrar', {
          duration: 3000
        });
        this.router.navigate(['/']); // Redirigir al inicio o dashboard
      },

      error: err => {
        this.isLoading = false;
        const errorMessage = err.error?.message || 'Error al registrar el usuario. El correo podría ya estar en uso.';
        this.snackBar.open(errorMessage, 'Cerrar', {
          duration: 4000,
          panelClass: ['error-snackbar']
        });
      }
    });
  }
  static {
    this.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 60,
      vars: 16,
      consts: [[1, "register-container"], [1, "register-card"], [1, "register-header"], [1, "logo-circle"], ["src", "https://media.licdn.com/dms/image/v2/D4D0BAQGibhoMeCL-mg/company-logo_200_200/company-logo_200_200/0/1667320508791/e_sueldos_logo?e=2147483647&v=beta&t=6BpHD4ZVbBNymqB5aEkJNEXyJ-0qGr2At_F6mEePRAw", "alt", "e-Sueldos Logo", 1, "logo-img"], [1, "register-title"], [1, "register-subtitle"], [1, "register-form", 3, "formGroup", "ngSubmit"], [1, "input-wrapper"], [1, "input-label"], [1, "input-container"], [1, "input-icon"], ["type", "text", "formControlName", "name", "placeholder", "Ej. Juan P\u00E9rez", 1, "custom-input"], ["class", "input-error", 4, "ngIf"], ["type", "email", "formControlName", "email", "placeholder", "ejemplo@correo.com", 1, "custom-input"], ["formControlName", "password", "placeholder", "********", 1, "custom-input", 3, "type"], ["mat-icon-button", "", "type", "button", 1, "toggle-btn", 3, "click"], ["formControlName", "confirmPassword", "placeholder", "********", 1, "custom-input", 3, "type"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "submit-button", 3, "disabled"], [4, "ngIf"], ["diameter", "26", 4, "ngIf"], [1, "register-footer"], ["routerLink", "/auth/login"], [1, "input-error"], ["diameter", "26"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Crear Cuenta");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Completa tus datos para registrarte ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "form", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_9_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Nombre Completo");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10)(14, "mat-icon", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "person");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, RegisterComponent_div_17_Template, 2, 0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, RegisterComponent_div_18_Template, 2, 0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 8)(20, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Correo Electr\u00F3nico");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 10)(23, "mat-icon", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "email");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, RegisterComponent_div_26_Template, 2, 0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, RegisterComponent_div_27_Template, 2, 0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 8)(29, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Contrase\u00F1a");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 10)(32, "mat-icon", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "lock");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_35_listener() {
            return ctx.hidePassword = !ctx.hidePassword;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, RegisterComponent_div_38_Template, 2, 0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, RegisterComponent_div_39_Template, 2, 0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 8)(41, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Confirmar Contrase\u00F1a");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 10)(44, "mat-icon", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "lock_outline");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_47_listener() {
            return ctx.hideConfirmPassword = !ctx.hideConfirmPassword;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, RegisterComponent_div_50_Template, 2, 0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, RegisterComponent_div_51_Template, 2, 0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, RegisterComponent_span_53_Template, 2, 0, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, RegisterComponent_mat_spinner_54_Template, 1, 0, "mat-spinner", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 21)(56, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, " \u00BFYa tienes cuenta? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Iniciar sesi\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          let tmp_3_0;
          let tmp_4_0;
          let tmp_7_0;
          let tmp_8_0;
          let tmp_11_0;
          let tmp_12_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.registerForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.registerForm.get("name")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx.registerForm.get("name")) == null ? null : tmp_1_0.hasError("required")));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.registerForm.get("name")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.registerForm.get("name")) == null ? null : tmp_2_0.hasError("minlength")));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.registerForm.get("email")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.registerForm.get("email")) == null ? null : tmp_3_0.hasError("required")));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.registerForm.get("email")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.registerForm.get("email")) == null ? null : tmp_4_0.hasError("email")));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hidePassword ? "password" : "text");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.hidePassword ? "visibility_off" : "visibility", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.registerForm.get("password")) == null ? null : tmp_7_0.touched) && ((tmp_7_0 = ctx.registerForm.get("password")) == null ? null : tmp_7_0.hasError("required")));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.registerForm.get("password")) == null ? null : tmp_8_0.touched) && ((tmp_8_0 = ctx.registerForm.get("password")) == null ? null : tmp_8_0.hasError("minlength")));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hideConfirmPassword ? "password" : "text");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.hideConfirmPassword ? "visibility_off" : "visibility", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_11_0.touched) && ((tmp_11_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_11_0.hasError("required")));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_12_0.touched) && ((tmp_12_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_12_0.hasError("passwordMismatch")));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.registerForm.invalid || ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinner],
      styles: [".register-container[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 20px;\r\n  background: linear-gradient(135deg, #667eea, #764ba2);\r\n}\r\n\r\n.register-card[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 420px;\r\n  border-radius: 20px !important;\r\n  padding: 20px;\r\n  box-shadow: 0 15px 35px rgba(0,0,0,0.2);\r\n}\r\n\r\n\r\n.register-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.logo-circle[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 64px;\n  border-radius: 18px;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 14px;\n  box-shadow: 0 10px 24px rgba(0,0,0,0.12);\n  padding: 10px 16px;\n}\n\r\n.logo-circle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-size: 36px;\r\n}\r\n\r\n.register-title[_ngcontent-%COMP%] {\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n\r\n.register-subtitle[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  color: #666;\r\n}\r\n\r\n\r\n.register-form[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n}\r\n\r\n\r\n.input-wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 6px;\r\n}\r\n\r\n.input-label[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  color: #374151;\r\n}\r\n\r\n.input-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: #f3f4f6;\r\n  border-radius: 12px;\r\n  padding: 0 12px;\r\n  transition: 0.2s ease;\r\n}\r\n\r\n.input-container[_ngcontent-%COMP%]:focus-within {\r\n  background-color: #eff6ff;\r\n  box-shadow: 0 0 0 2px #3b82f6;\r\n}\r\n\r\n.input-icon[_ngcontent-%COMP%] {\r\n  color: #9ca3af;\r\n  font-size: 20px;\r\n  margin-right: 8px;\r\n}\r\n\r\n.input-container[_ngcontent-%COMP%]:focus-within   .input-icon[_ngcontent-%COMP%] {\r\n  color: #3b82f6;\r\n}\r\n\r\n.custom-input[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  border: none;\r\n  outline: none;\r\n  background: transparent;\r\n  padding: 14px 0;\r\n  font-size: 15px;\r\n}\r\n\r\n.custom-input[_ngcontent-%COMP%]::placeholder {\r\n  color: #d1d5db;\r\n}\r\n\r\n\r\n.toggle-btn[_ngcontent-%COMP%] {\r\n  color: #9ca3af !important;\r\n  margin-right: -8px;\r\n}\r\n\r\n.toggle-btn[_ngcontent-%COMP%]:hover {\r\n  color: #3b82f6 !important;\r\n}\r\n\r\n\r\n.input-error[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  color: #ef4444;\r\n}\r\n\r\n\r\n.submit-button[_ngcontent-%COMP%] {\r\n  height: 48px;\r\n  font-size: 16px;\r\n  border-radius: 12px;\r\n  margin-top: 10px;\r\n}\r\n\r\n\r\n.register-footer[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-top: 20px;\r\n}\r\n\r\n.register-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #3f51b5;\r\n  font-weight: bold;\r\n  text-decoration: none;\r\n}\r\n\r\n.register-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.logo-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLGFBQWE7RUFDYix1Q0FBdUM7QUFDekM7O0FBRUEsV0FBVztBQUNYO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUEsU0FBUztBQUNUO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsVUFBVTtBQUNWO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUEsV0FBVztBQUNYO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBLFdBQVc7QUFDWDtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXItY29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhLCAjNzY0YmEyKTtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWNhcmQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAxNXB4IDM1cHggcmdiYSgwLDAsMCwwLjIpO1xyXG59XHJcblxyXG4vKiBIRUFERVIgKi9cclxuLnJlZ2lzdGVyLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmxvZ28tY2lyY2xlIHtcbiAgd2lkdGg6IDIyMHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDI0cHggcmdiYSgwLDAsMCwwLjEyKTtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xufVxuXHJcbi5sb2dvLWNpcmNsZSBtYXQtaWNvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxufVxyXG5cclxuLnJlZ2lzdGVyLXRpdGxlIHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItc3VidGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzY2NjtcclxufVxyXG5cclxuLyogRk9STSAqL1xyXG4ucmVnaXN0ZXItZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTZweDtcclxufVxyXG5cclxuLyogSU5QVVRTIChJR1VBTCBMT0dJTikgKi9cclxuLmlucHV0LXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDZweDtcclxufVxyXG5cclxuLmlucHV0LWxhYmVsIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzM3NDE1MTtcclxufVxyXG5cclxuLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAwIDEycHg7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uaW5wdXQtY29udGFpbmVyOmZvY3VzLXdpdGhpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjZmZjtcclxuICBib3gtc2hhZG93OiAwIDAgMCAycHggIzNiODJmNjtcclxufVxyXG5cclxuLmlucHV0LWljb24ge1xyXG4gIGNvbG9yOiAjOWNhM2FmO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLmlucHV0LWNvbnRhaW5lcjpmb2N1cy13aXRoaW4gLmlucHV0LWljb24ge1xyXG4gIGNvbG9yOiAjM2I4MmY2O1xyXG59XHJcblxyXG4uY3VzdG9tLWlucHV0IHtcclxuICBmbGV4OiAxO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDE0cHggMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5jdXN0b20taW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2QxZDVkYjtcclxufVxyXG5cclxuLyogdG9nZ2xlIHBhc3N3b3JkICovXHJcbi50b2dnbGUtYnRuIHtcclxuICBjb2xvcjogIzljYTNhZiAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogLThweDtcclxufVxyXG5cclxuLnRvZ2dsZS1idG46aG92ZXIge1xyXG4gIGNvbG9yOiAjM2I4MmY2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIEVSUk9SICovXHJcbi5pbnB1dC1lcnJvciB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjZWY0NDQ0O1xyXG59XHJcblxyXG4vKiBCVVRUT04gKi9cclxuLnN1Ym1pdC1idXR0b24ge1xyXG4gIGhlaWdodDogNDhweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4vKiBGT09URVIgKi9cclxuLnJlZ2lzdGVyLWZvb3RlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1mb290ZXIgYSB7XHJcbiAgY29sb3I6ICMzZjUxYjU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItZm9vdGVyIGE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4ubG9nby1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hdXRoL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLHVDQUF1QztBQUN6Qzs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQSxTQUFTO0FBQ1Q7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQSx5QkFBeUI7QUFDekI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUEsV0FBVztBQUNYO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUEsdy9LQUF3L0siLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXItY29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhLCAjNzY0YmEyKTtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWNhcmQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAxNXB4IDM1cHggcmdiYSgwLDAsMCwwLjIpO1xyXG59XHJcblxyXG4vKiBIRUFERVIgKi9cclxuLnJlZ2lzdGVyLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmxvZ28tY2lyY2xlIHtcbiAgd2lkdGg6IDIyMHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDI0cHggcmdiYSgwLDAsMCwwLjEyKTtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xufVxuXHJcbi5sb2dvLWNpcmNsZSBtYXQtaWNvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxufVxyXG5cclxuLnJlZ2lzdGVyLXRpdGxlIHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItc3VidGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzY2NjtcclxufVxyXG5cclxuLyogRk9STSAqL1xyXG4ucmVnaXN0ZXItZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTZweDtcclxufVxyXG5cclxuLyogSU5QVVRTIChJR1VBTCBMT0dJTikgKi9cclxuLmlucHV0LXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDZweDtcclxufVxyXG5cclxuLmlucHV0LWxhYmVsIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzM3NDE1MTtcclxufVxyXG5cclxuLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAwIDEycHg7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uaW5wdXQtY29udGFpbmVyOmZvY3VzLXdpdGhpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjZmZjtcclxuICBib3gtc2hhZG93OiAwIDAgMCAycHggIzNiODJmNjtcclxufVxyXG5cclxuLmlucHV0LWljb24ge1xyXG4gIGNvbG9yOiAjOWNhM2FmO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLmlucHV0LWNvbnRhaW5lcjpmb2N1cy13aXRoaW4gLmlucHV0LWljb24ge1xyXG4gIGNvbG9yOiAjM2I4MmY2O1xyXG59XHJcblxyXG4uY3VzdG9tLWlucHV0IHtcclxuICBmbGV4OiAxO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDE0cHggMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5jdXN0b20taW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2QxZDVkYjtcclxufVxyXG5cclxuLyogdG9nZ2xlIHBhc3N3b3JkICovXHJcbi50b2dnbGUtYnRuIHtcclxuICBjb2xvcjogIzljYTNhZiAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogLThweDtcclxufVxyXG5cclxuLnRvZ2dsZS1idG46aG92ZXIge1xyXG4gIGNvbG9yOiAjM2I4MmY2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIEVSUk9SICovXHJcbi5pbnB1dC1lcnJvciB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjZWY0NDQ0O1xyXG59XHJcblxyXG4vKiBCVVRUT04gKi9cclxuLnN1Ym1pdC1idXR0b24ge1xyXG4gIGhlaWdodDogNDhweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4vKiBGT09URVIgKi9cclxuLnJlZ2lzdGVyLWZvb3RlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1mb290ZXIgYSB7XHJcbiAgY29sb3I6ICMzZjUxYjU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItZm9vdGVyIGE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4ubG9nby1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8760:
/*!*********************************************************************!*\
  !*** ./src/app/modules/auth/validators/match-password.validator.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchPasswordValidator": () => (/* binding */ matchPasswordValidator)
/* harmony export */ });
const matchPasswordValidator = control => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  // Si ambos campos existen y sus valores son distintos, asignamos el error
  if (password && confirmPassword && password.value !== confirmPassword.value) {
    // Seteamos el error en el input específico de confirmPassword para que la UI (Material) reaccione
    confirmPassword.setErrors({
      passwordMismatch: true
    });
    return {
      passwordMismatch: true
    };
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

/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_auth_module_ts.js.map