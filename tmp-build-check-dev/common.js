"use strict";
(self["webpackChunkfrontend_e_Sueldos_angular"] = self["webpackChunkfrontend_e_Sueldos_angular"] || []).push([["common"],{

/***/ 5228:
/*!**************************************************!*\
  !*** ./src/app/core/guards/admin/admin.guard.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminGuard": () => (/* binding */ AdminGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth/auth.service */ 7990);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class AdminGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    const user = this.authService.currentUserValue;
    // Verifica que exista el usuario y que su rol sea admin
    if (user && user.role === 'admin') {
      return true;
    }
    // Si no es admin, lo devolvemos a una ruta segura
    this.router.navigate(['/']);
    return false;
  }
  static {
    this.ɵfac = function AdminGuard_Factory(t) {
      return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AdminGuard,
      factory: AdminGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=common.js.map