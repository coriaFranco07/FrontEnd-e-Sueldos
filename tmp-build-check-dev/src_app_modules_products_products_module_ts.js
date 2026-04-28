"use strict";
(self["webpackChunkfrontend_e_Sueldos_angular"] = self["webpackChunkfrontend_e_Sueldos_angular"] || []).push([["src_app_modules_products_products_module_ts"],{

/***/ 9534:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/products/components/product-form-dialog/product-form-dialog.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductFormDialogComponent": () => (/* binding */ ProductFormDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../product.service */ 219);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 9121);















function ProductFormDialogComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "El nombre es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProductFormDialogComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "M\u00C3\u00ADnimo 2 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProductFormDialogComponent_mat_error_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "El precio es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProductFormDialogComponent_mat_error_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "El precio no puede ser negativo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProductFormDialogComponent_mat_error_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "El stock no puede ser negativo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProductFormDialogComponent_mat_option_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cat_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", cat_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cat_r14);
  }
}
function ProductFormDialogComponent_img_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 36);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r6.displayedImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ((tmp_1_0 = ctx_r6.productForm.get("name")) == null ? null : tmp_1_0.value) || "Preview del producto");
  }
}
function ProductFormDialogComponent_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Sin imagen seleccionada");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ProductFormDialogComponent_p_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Se mostrar\u00E1 la imagen actual guardada hasta que elijas una nueva. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProductFormDialogComponent_p_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Vista previa local lista para subir. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProductFormDialogComponent_p_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r11.imageError, " ");
  }
}
function ProductFormDialogComponent_mat_spinner_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 40);
  }
}
function ProductFormDialogComponent_mat_icon_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r13.isEditMode ? "save" : "add_circle");
  }
}
class ProductFormDialogComponent {
  constructor(fb, productService, snackBar, dialogRef, data) {
    this.fb = fb;
    this.productService = productService;
    this.snackBar = snackBar;
    this.dialogRef = dialogRef;
    this.data = data;
    this.isLoading = false;
    this.imageError = '';
    this.selectedImageFile = null;
    this.previewUrl = null;
    this.currentImageUrl = null;
    this.categories = ['ElectrÃ³nica', 'Ropa', 'Alimentos', 'Hogar', 'Deportes', 'Libros', 'Juguetes', 'Salud', 'Automotriz', 'Otros'];
    this.productForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]],
      price: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
      description: [''],
      category: [''],
      stock: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]]
    });
  }
  ngOnInit() {
    if (this.data.mode === 'edit' && this.data.product) {
      this.productForm.patchValue({
        name: this.data.product.name,
        price: this.data.product.price,
        description: this.data.product.description || '',
        category: this.data.product.category || '',
        stock: this.data.product.stock ?? null
      });
      this.currentImageUrl = this.productService.getImageUrl(this.data.product.image);
    }
  }
  ngOnDestroy() {
    this.revokePreviewUrl();
  }
  get isEditMode() {
    return this.data.mode === 'edit';
  }
  get title() {
    return this.isEditMode ? 'Editar Producto' : 'Nuevo Producto';
  }
  get submitLabel() {
    return this.isEditMode ? 'Guardar cambios' : 'Crear producto';
  }
  get displayedImageUrl() {
    return this.previewUrl || this.currentImageUrl;
  }
  onImageSelected(event) {
    const input = event.target;
    const file = input.files?.[0] ?? null;
    this.imageError = '';
    if (!file) {
      this.selectedImageFile = null;
      this.revokePreviewUrl();
      return;
    }
    if (!file.type.startsWith('image/')) {
      this.selectedImageFile = null;
      this.revokePreviewUrl();
      this.imageError = 'Seleccioná un archivo de imagen válido.';
      input.value = '';
      return;
    }
    this.selectedImageFile = file;
    this.revokePreviewUrl();
    this.previewUrl = URL.createObjectURL(file);
  }
  submit() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.imageError = '';
    const payload = {
      ...this.productForm.value,
      imageFile: this.selectedImageFile
    };
    Object.keys(payload).forEach(key => {
      const typedKey = key;
      if (payload[typedKey] === '' || payload[typedKey] === null) {
        delete payload[typedKey];
      }
    });
    const request$ = this.isEditMode ? this.productService.updateProduct(this.data.product.id, payload) : this.productService.createProduct(payload);
    request$.subscribe({
      next: () => {
        this.isLoading = false;
        this.dialogRef.close(true);
      },
      error: err => {
        this.isLoading = false;
        if (err.status === 400 || err.status === 413) {
          this.imageError = err.error?.message || 'No se pudo subir la imagen seleccionada.';
        }
        this.snackBar.open(err.error?.message || `Error al ${this.isEditMode ? 'actualizar' : 'crear'} producto`, 'Cerrar', {
          duration: 3000
        });
      }
    });
  }
  revokePreviewUrl() {
    if (this.previewUrl) {
      URL.revokeObjectURL(this.previewUrl);
      this.previewUrl = null;
    }
  }
  static {
    this.ɵfac = function ProductFormDialogComponent_Factory(t) {
      return new (t || ProductFormDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProductFormDialogComponent,
      selectors: [["app-product-form-dialog"]],
      decls: 84,
      vars: 28,
      consts: [[1, "dialog-wrapper"], [1, "product-dialog-form", 3, "formGroup"], [1, "dialog-header"], [1, "dialog-header-left"], [1, "dialog-icon"], [1, "dialog-title"], [1, "dialog-subtitle"], [1, "dialog-content"], ["appearance", "outline", 1, "full-width"], ["matPrefix", ""], ["matInput", "", "formControlName", "name", "placeholder", "Ej. Auriculares Bluetooth"], [4, "ngIf"], [1, "two-cols"], ["appearance", "outline"], ["matInput", "", "type", "number", "formControlName", "price", "placeholder", "0.00", "min", "0"], ["matInput", "", "type", "number", "formControlName", "stock", "placeholder", "0", "min", "0"], ["formControlName", "category"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "description", "rows", "3", "placeholder", "Descripci\u00C3\u00B3n del producto..."], [1, "image-field"], [1, "image-field-header"], [1, "image-field-title"], [1, "image-field-hint"], [1, "image-preview-card"], [3, "src", "alt", 4, "ngIf", "ngIfElse"], ["imagePlaceholder", ""], [1, "image-upload-box"], ["type", "file", "accept", "image/*", 3, "disabled", "change"], ["class", "image-current-note", 4, "ngIf"], ["class", "image-error", 4, "ngIf"], [1, "dialog-actions"], ["mat-button", "", "type", "button", 1, "btn-cancel", 3, "disabled", "click"], ["mat-flat-button", "", "type", "button", 1, "btn-submit", 3, "disabled", "click"], ["diameter", "18", "class", "inline-spinner", 4, "ngIf"], [3, "value"], [3, "src", "alt"], [1, "image-preview-placeholder"], [1, "image-current-note"], [1, "image-error"], ["diameter", "18", 1, "inline-spinner"]],
      template: function ProductFormDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div")(8, "h2", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Complet\u00C3\u00A1 los datos del producto");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-dialog-content", 7)(13, "mat-form-field", 8)(14, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Nombre del producto");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "inventory_2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ProductFormDialogComponent_mat_error_19_Template, 2, 0, "mat-error", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ProductFormDialogComponent_mat_error_20_Template, 2, 0, "mat-error", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12)(22, "mat-form-field", 13)(23, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Precio ($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "attach_money");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ProductFormDialogComponent_mat_error_28_Template, 2, 0, "mat-error", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ProductFormDialogComponent_mat_error_29_Template, 2, 0, "mat-error", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-form-field", 13)(31, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Stock");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "warehouse");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ProductFormDialogComponent_mat_error_36_Template, 2, 0, "mat-error", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-form-field", 8)(38, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Categor\u00C3\u00ADa");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "category");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-select", 16)(43, "mat-option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Sin categor\u00C3\u00ADa");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, ProductFormDialogComponent_mat_option_45_Template, 2, 2, "mat-option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-form-field", 8)(47, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Descripci\u00C3\u00B3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "description");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "textarea", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 20)(53, "div", 21)(54, "div")(55, "p", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Imagen");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, ProductFormDialogComponent_img_60_Template, 1, 2, "img", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, ProductFormDialogComponent_ng_template_61_Template, 5, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "label", 27)(64, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProductFormDialogComponent_Template_input_change_64_listener($event) {
            return ctx.onImageSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "upload_file");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div")(68, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Formatos permitidos: JPG, PNG, WEBP, GIF");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, ProductFormDialogComponent_p_72_Template, 2, 0, "p", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, ProductFormDialogComponent_p_73_Template, 2, 0, "p", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, ProductFormDialogComponent_p_74_Template, 2, 1, "p", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "mat-dialog-actions", 31)(76, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductFormDialogComponent_Template_button_click_76_listener() {
            return ctx.dialogRef.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, " Cancelar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductFormDialogComponent_Template_button_click_80_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, ProductFormDialogComponent_mat_spinner_81_Template, 1, 0, "mat-spinner", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, ProductFormDialogComponent_mat_icon_82_Template, 2, 1, "mat-icon", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](62);
          let tmp_4_0;
          let tmp_5_0;
          let tmp_6_0;
          let tmp_7_0;
          let tmp_8_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.productForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("edit", ctx.isEditMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.isEditMode ? "edit" : "add_shopping_cart");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.productForm.get("name")) == null ? null : tmp_4_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.productForm.get("name")) == null ? null : tmp_5_0.hasError("minlength"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx.productForm.get("price")) == null ? null : tmp_6_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx.productForm.get("price")) == null ? null : tmp_7_0.hasError("min"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx.productForm.get("stock")) == null ? null : tmp_8_0.hasError("min"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isEditMode ? "Pod\u00E9s mantener la imagen actual o reemplazarla con una nueva." : "Seleccion\u00E1 una imagen para el producto.", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-image", ctx.displayedImageUrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayedImageUrl)("ngIfElse", _r7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("loading", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedImageFile ? ctx.selectedImageFile.name : "Seleccionar imagen");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentImageUrl && !ctx.previewUrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.previewUrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imageError);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.productForm.invalid || ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.submitLabel, " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinner, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions],
      styles: [".dialog-wrapper[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  border-radius: 12px;\r\n  overflow: hidden;\r\n}\r\n\r\n.product-dialog-form[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n\r\n.dialog-header[_ngcontent-%COMP%] {\r\n  background: linear-gradient(135deg, #131921 0%, #1a2636 100%);\r\n  padding: 20px 24px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-bottom: 3px solid #f0a500;\r\n}\r\n\r\n.dialog-header-left[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 14px;\r\n}\r\n\r\n.dialog-icon[_ngcontent-%COMP%] {\r\n  width: 46px;\r\n  height: 46px;\r\n  border-radius: 10px;\r\n  background: #f0a500;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.dialog-icon.edit[_ngcontent-%COMP%] {\r\n  background: #00a8e1;\r\n}\r\n\r\n.dialog-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n  color: #131921;\r\n  font-size: 24px;\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  color: #fff;\r\n}\r\n\r\n.dialog-subtitle[_ngcontent-%COMP%] {\r\n  margin: 2px 0 0;\r\n  font-size: 12px;\r\n  color: rgba(255,255,255,0.55);\r\n}\r\n\r\n\r\n.dialog-content[_ngcontent-%COMP%] {\r\n  padding: 24px !important;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 4px;\r\n  min-width: 460px;\r\n  max-height: 480px;\r\n  overflow-y: auto;\r\n  background: #f8f9fa;\r\n}\r\n\r\n.full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.two-cols[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n\n.image-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 8px;\n}\n\n.image-field-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 700;\n  color: #131921;\n}\n\n.image-field-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #667085;\n}\n\n.image-preview-card[_ngcontent-%COMP%] {\n  min-height: 180px;\n  border-radius: 14px;\n  border: 1px dashed #cbd5e1;\n  background: linear-gradient(135deg, #ffffff 0%, #f3f6f9 100%);\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.image-preview-card.has-image[_ngcontent-%COMP%] {\n  border-style: solid;\n}\n\n.image-preview-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 220px;\n  object-fit: cover;\n  display: block;\n}\n\n.image-preview-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  color: #7a8594;\n}\n\n.image-preview-placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 42px;\n  width: 42px;\n  height: 42px;\n}\n\n.image-preview-placeholder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n}\n\n.image-upload-box[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 16px;\n  border-radius: 12px;\n  border: 1px solid #d5d9d9;\n  background: #fff;\n  cursor: pointer;\n  transition: border-color 0.2s ease, background 0.2s ease;\n}\n\n.image-upload-box[_ngcontent-%COMP%]:hover {\n  border-color: #f0a500;\n  background: #fffaf0;\n}\n\n.image-upload-box.loading[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n\n.image-upload-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n\n.image-upload-box[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #f0a500;\n}\n\n.image-upload-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .image-upload-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.image-upload-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #131921;\n  font-size: 13px;\n}\n\n.image-upload-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #667085;\n  font-size: 12px;\n}\n\n.image-current-note[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #475467;\n}\n\n.image-error[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #c62828;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n\n.dialog-actions[_ngcontent-%COMP%] {\n  padding: 16px 24px !important;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 10px;\r\n  border-top: 1px solid #e0e0e0;\r\n  background: #fff;\r\n}\r\n\r\n.btn-cancel[_ngcontent-%COMP%] {\r\n  color: #555 !important;\r\n  font-weight: 600 !important;\r\n}\r\n\r\n.btn-submit[_ngcontent-%COMP%] {\r\n  background: #f0a500 !important;\r\n  color: #131921 !important;\r\n  font-weight: 700 !important;\r\n  border-radius: 8px !important;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n  box-shadow: 0 4px 12px rgba(240, 165, 0, 0.4) !important;\r\n}\r\n\r\n.btn-submit[_ngcontent-%COMP%]:hover:not([disabled]) {\r\n  background: #e69500 !important;\r\n  box-shadow: 0 6px 16px rgba(240, 165, 0, 0.6) !important;\r\n}\r\n\r\n.btn-submit[disabled][_ngcontent-%COMP%] {\r\n  opacity: 0.6;\r\n}\r\n\r\n.inline-spinner[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .dialog-content[_ngcontent-%COMP%] {\r\n    min-width: auto;\r\n    padding: 16px !important;\r\n  }\r\n\r\n  .two-cols[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZm9ybS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSw2REFBNkQ7RUFDN0Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7O0FBRUEsWUFBWTtBQUNaO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLDZEQUE2RDtFQUM3RCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysd0RBQXdEO0FBQzFEOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQSxZQUFZO0FBQ1o7RUFDRSw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1Isd0RBQXdEO0FBQzFEOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHdEQUF3RDtBQUMxRDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGIiwiZmlsZSI6InByb2R1Y3QtZm9ybS1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wcm9kdWN0LWRpYWxvZy1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi8qIEhFQURFUiAqL1xyXG4uZGlhbG9nLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzEzMTkyMSAwJSwgIzFhMjYzNiAxMDAlKTtcclxuICBwYWRkaW5nOiAyMHB4IDI0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2YwYTUwMDtcclxufVxyXG5cclxuLmRpYWxvZy1oZWFkZXItbGVmdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTRweDtcclxufVxyXG5cclxuLmRpYWxvZy1pY29uIHtcclxuICB3aWR0aDogNDZweDtcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZjBhNTAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmRpYWxvZy1pY29uLmVkaXQge1xyXG4gIGJhY2tncm91bmQ6ICMwMGE4ZTE7XHJcbn1cclxuXHJcbi5kaWFsb2ctaWNvbiBtYXQtaWNvbiB7XHJcbiAgY29sb3I6ICMxMzE5MjE7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxufVxyXG5cclxuLmRpYWxvZy10aXRsZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZGlhbG9nLXN1YnRpdGxlIHtcclxuICBtYXJnaW46IDJweCAwIDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNTUpO1xyXG59XHJcblxyXG4vKiBDT05URU5UICovXHJcbi5kaWFsb2ctY29udGVudCB7XHJcbiAgcGFkZGluZzogMjRweCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDRweDtcclxuICBtaW4td2lkdGg6IDQ2MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDQ4MHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxufVxyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udHdvLWNvbHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMTZweDtcbn1cblxuLmltYWdlLWZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5pbWFnZS1maWVsZC10aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzEzMTkyMTtcbn1cblxuLmltYWdlLWZpZWxkLWhpbnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNjY3MDg1O1xufVxuXG4uaW1hZ2UtcHJldmlldy1jYXJkIHtcbiAgbWluLWhlaWdodDogMTgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjY2JkNWUxO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZmZmZmIDAlLCAjZjNmNmY5IDEwMCUpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmltYWdlLXByZXZpZXctY2FyZC5oYXMtaW1hZ2Uge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4uaW1hZ2UtcHJldmlldy1jYXJkIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIyMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pbWFnZS1wcmV2aWV3LXBsYWNlaG9sZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBjb2xvcjogIzdhODU5NDtcbn1cblxuLmltYWdlLXByZXZpZXctcGxhY2Vob2xkZXIgbWF0LWljb24ge1xuICBmb250LXNpemU6IDQycHg7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG59XG5cbi5pbWFnZS1wcmV2aWV3LXBsYWNlaG9sZGVyIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmltYWdlLXVwbG9hZC1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDVkOWQ5O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2UsIGJhY2tncm91bmQgMC4ycyBlYXNlO1xufVxuXG4uaW1hZ2UtdXBsb2FkLWJveDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2YwYTUwMDtcbiAgYmFja2dyb3VuZDogI2ZmZmFmMDtcbn1cblxuLmltYWdlLXVwbG9hZC1ib3gubG9hZGluZyB7XG4gIG9wYWNpdHk6IDAuNztcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmltYWdlLXVwbG9hZC1ib3ggaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbWFnZS11cGxvYWQtYm94IG1hdC1pY29uIHtcbiAgY29sb3I6ICNmMGE1MDA7XG59XG5cbi5pbWFnZS11cGxvYWQtYm94IHN0cm9uZyxcbi5pbWFnZS11cGxvYWQtYm94IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmltYWdlLXVwbG9hZC1ib3ggc3Ryb25nIHtcbiAgY29sb3I6ICMxMzE5MjE7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmltYWdlLXVwbG9hZC1ib3ggc3BhbiB7XG4gIGNvbG9yOiAjNjY3MDg1O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5pbWFnZS1jdXJyZW50LW5vdGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM0NzU0Njc7XG59XG5cbi5pbWFnZS1lcnJvciB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICNjNjI4Mjg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLyogQUNUSU9OUyAqL1xuLmRpYWxvZy1hY3Rpb25zIHtcbiAgcGFkZGluZzogMTZweCAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGdhcDogMTBweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4uYnRuLWNhbmNlbCB7XHJcbiAgY29sb3I6ICM1NTUgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tc3VibWl0IHtcclxuICBiYWNrZ3JvdW5kOiAjZjBhNTAwICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMxMzE5MjEgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgyNDAsIDE2NSwgMCwgMC40KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLXN1Ym1pdDpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xyXG4gIGJhY2tncm91bmQ6ICNlNjk1MDAgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAwIDZweCAxNnB4IHJnYmEoMjQwLCAxNjUsIDAsIDAuNikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1zdWJtaXRbZGlzYWJsZWRdIHtcclxuICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuXHJcbi5pbmxpbmUtc3Bpbm5lciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnR3by1jb2xzIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtZm9ybS1kaWFsb2cvcHJvZHVjdC1mb3JtLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBLFdBQVc7QUFDWDtFQUNFLDZEQUE2RDtFQUM3RCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjs7QUFFQSxZQUFZO0FBQ1o7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsNkRBQTZEO0VBQzdELGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix3REFBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsU0FBUztFQUNULGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBLFlBQVk7QUFDWjtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUix3REFBd0Q7QUFDMUQ7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsd0RBQXdEO0FBQzFEOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2Ysd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUEsNHVSQUE0dVIiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ucHJvZHVjdC1kaWFsb2ctZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4vKiBIRUFERVIgKi9cclxuLmRpYWxvZy1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxMzE5MjEgMCUsICMxYTI2MzYgMTAwJSk7XHJcbiAgcGFkZGluZzogMjBweCAyNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmMGE1MDA7XHJcbn1cclxuXHJcbi5kaWFsb2ctaGVhZGVyLWxlZnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE0cHg7XHJcbn1cclxuXHJcbi5kaWFsb2ctaWNvbiB7XHJcbiAgd2lkdGg6IDQ2cHg7XHJcbiAgaGVpZ2h0OiA0NnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2YwYTUwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaWFsb2ctaWNvbi5lZGl0IHtcclxuICBiYWNrZ3JvdW5kOiAjMDBhOGUxO1xyXG59XHJcblxyXG4uZGlhbG9nLWljb24gbWF0LWljb24ge1xyXG4gIGNvbG9yOiAjMTMxOTIxO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5kaWFsb2ctdGl0bGUge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmRpYWxvZy1zdWJ0aXRsZSB7XHJcbiAgbWFyZ2luOiAycHggMCAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjU1KTtcclxufVxyXG5cclxuLyogQ09OVEVOVCAqL1xyXG4uZGlhbG9nLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDI0cHggIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiA0cHg7XHJcbiAgbWluLXdpZHRoOiA0NjBweDtcclxuICBtYXgtaGVpZ2h0OiA0ODBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbn1cclxuXHJcbi5mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnR3by1jb2xzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDE2cHg7XG59XG5cbi5pbWFnZS1maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uaW1hZ2UtZmllbGQtdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMxMzE5MjE7XG59XG5cbi5pbWFnZS1maWVsZC1oaW50IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzY2NzA4NTtcbn1cblxuLmltYWdlLXByZXZpZXctY2FyZCB7XG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBib3JkZXI6IDFweCBkYXNoZWQgI2NiZDVlMTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZmZmZiAwJSwgI2YzZjZmOSAxMDAlKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbWFnZS1wcmV2aWV3LWNhcmQuaGFzLWltYWdlIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLmltYWdlLXByZXZpZXctY2FyZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMjBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW1hZ2UtcHJldmlldy1wbGFjZWhvbGRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgY29sb3I6ICM3YTg1OTQ7XG59XG5cbi5pbWFnZS1wcmV2aWV3LXBsYWNlaG9sZGVyIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiA0MnB4O1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xufVxuXG4uaW1hZ2UtcHJldmlldy1wbGFjZWhvbGRlciBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5pbWFnZS11cGxvYWQtYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q1ZDlkOTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyBlYXNlLCBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcbn1cblxuLmltYWdlLXVwbG9hZC1ib3g6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNmMGE1MDA7XG4gIGJhY2tncm91bmQ6ICNmZmZhZjA7XG59XG5cbi5pbWFnZS11cGxvYWQtYm94LmxvYWRpbmcge1xuICBvcGFjaXR5OiAwLjc7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5pbWFnZS11cGxvYWQtYm94IGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW1hZ2UtdXBsb2FkLWJveCBtYXQtaWNvbiB7XG4gIGNvbG9yOiAjZjBhNTAwO1xufVxuXG4uaW1hZ2UtdXBsb2FkLWJveCBzdHJvbmcsXG4uaW1hZ2UtdXBsb2FkLWJveCBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pbWFnZS11cGxvYWQtYm94IHN0cm9uZyB7XG4gIGNvbG9yOiAjMTMxOTIxO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5pbWFnZS11cGxvYWQtYm94IHNwYW4ge1xuICBjb2xvcjogIzY2NzA4NTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaW1hZ2UtY3VycmVudC1ub3RlIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNDc1NDY3O1xufVxuXG4uaW1hZ2UtZXJyb3Ige1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjYzYyODI4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi8qIEFDVElPTlMgKi9cbi5kaWFsb2ctYWN0aW9ucyB7XG4gIHBhZGRpbmc6IDE2cHggMjRweCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBnYXA6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLmJ0bi1jYW5jZWwge1xyXG4gIGNvbG9yOiAjNTU1ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLXN1Ym1pdCB7XHJcbiAgYmFja2dyb3VuZDogI2YwYTUwMCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMTMxOTIxICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDZweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMjQwLCAxNjUsIDAsIDAuNCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1zdWJtaXQ6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcclxuICBiYWNrZ3JvdW5kOiAjZTY5NTAwICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMCA2cHggMTZweCByZ2JhKDI0MCwgMTY1LCAwLCAwLjYpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tc3VibWl0W2Rpc2FibGVkXSB7XHJcbiAgb3BhY2l0eTogMC42O1xyXG59XHJcblxyXG4uaW5saW5lLXNwaW5uZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmRpYWxvZy1jb250ZW50IHtcclxuICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmc6IDE2cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50d28tY29scyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 219:
/*!*****************************************************!*\
  !*** ./src/app/modules/products/product.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class ProductService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'http://localhost:3000/v1/products';
    this.apiBaseUrl = this.apiUrl.replace(/\/v1\/products$/, '');
  }
  getProducts(query = {}) {
    const paramsObj = {
      page: String(query.page ?? 1),
      limit: String(query.limit ?? 12)
    };
    if (query.name?.trim()) {
      paramsObj['name'] = query.name.trim();
    }
    if (query.category?.trim()) {
      paramsObj['category'] = query.category.trim();
    }
    if (query.sortBy?.trim()) {
      paramsObj['sortBy'] = query.sortBy.trim();
    }
    if (query.stockStatus && query.stockStatus !== 'all') {
      paramsObj['stockStatus'] = query.stockStatus;
    }
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    Object.keys(paramsObj).forEach(key => {
      params = params.set(key, paramsObj[key]);
    });
    return this.http.get(this.apiUrl, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => ({
      ...response,
      results: response.results.map(p => this.normalizeProduct(p))
    })));
  }
  getProduct(id) {
    return this.http.get(`${this.apiUrl}/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(p => this.normalizeProduct(p)));
  }
  createProduct(data) {
    return this.http.post(this.apiUrl, this.buildPayload(data)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(p => this.normalizeProduct(p)));
  }
  updateProduct(id, data) {
    return this.http.patch(`${this.apiUrl}/${id}`, this.buildPayload(data)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(p => this.normalizeProduct(p)));
  }
  deleteProduct(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  createMercadoPagoPreference(payload) {
    return this.http.post(`${this.apiBaseUrl}/v1/payments/mercado-pago/preference`, payload);
  }
  getImageUrl(imagePath) {
    if (!imagePath) {
      return null;
    }
    if (/^https?:\/\//i.test(imagePath)) {
      return imagePath;
    }
    return `${this.apiBaseUrl}${imagePath.startsWith('/') ? imagePath : `/${imagePath}`}`;
  }
  normalizeProduct(product) {
    return {
      ...product,
      id: product._id || product.id
    };
  }
  buildPayload(data) {
    const payload = {
      name: data.name,
      price: data.price,
      description: data.description,
      category: data.category,
      stock: data.stock,
      imageFile: data.imageFile ?? null
    };
    const hasImage = payload.imageFile instanceof File;
    if (!hasImage) {
      delete payload.imageFile;
      Object.keys(payload).forEach(key => {
        const typedKey = key;
        if (payload[typedKey] === '' || payload[typedKey] === null || payload[typedKey] === undefined) {
          delete payload[typedKey];
        }
      });
      return payload;
    }
    const formData = new FormData();
    formData.append('name', payload.name);
    formData.append('price', String(payload.price));
    if (payload.description) {
      formData.append('description', payload.description);
    }
    if (payload.category) {
      formData.append('category', payload.category);
    }
    if (payload.stock !== null && payload.stock !== undefined) {
      formData.append('stock', String(payload.stock));
    }
    if (payload.imageFile) {
      formData.append('image', payload.imageFile);
    }
    return formData;
  }
  static {
    this.ɵfac = function ProductService_Factory(t) {
      return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ProductService,
      factory: ProductService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4166:
/*!*****************************************************************!*\
  !*** ./src/app/modules/products/products-checkout.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsCheckoutComponent": () => (/* binding */ ProductsCheckoutComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.service */ 219);
/* harmony import */ var _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/auth/auth.service */ 7990);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);









function ProductsCheckoutComponent_article_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "article", 21)(1, "div", 22)(2, "div", 23)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "inventory_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div")(6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", item_r2.quantity, " unidad", item_r2.quantity !== 1 ? "es" : "", " x ", ctx_r0.formatPrice(item_r2.price), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.formatPrice(item_r2.price * item_r2.quantity));
  }
}
function ProductsCheckoutComponent_mat_icon_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "credit_card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class ProductsCheckoutComponent {
  constructor(router, snackBar, productService, authService) {
    this.router = router;
    this.snackBar = snackBar;
    this.productService = productService;
    this.authService = authService;
    this.cartItems = [];
    this.isPaying = false;
  }
  ngOnInit() {
    this.loadCart();
    if (this.cartItems.length === 0) {
      this.router.navigate(['/products/shop']);
    }
  }
  loadCart() {
    const rawCart = localStorage.getItem('shopCart');
    this.cartItems = rawCart ? JSON.parse(rawCart) : [];
  }
  get subtotal() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  get totalItems() {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }
  formatPrice(price) {
    return price?.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2
    }) ?? '-';
  }
  goBack() {
    this.router.navigate(['/products/shop']);
  }
  pay() {
    if (this.cartItems.length === 0 || this.isPaying) {
      return;
    }
    this.isPaying = true;
    this.productService.createMercadoPagoPreference(this.buildPreferencePayload()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => {
      this.isPaying = false;
    })).subscribe({
      next: response => {
        const checkoutUrl = response.initPoint || response.sandboxInitPoint;
        if (!checkoutUrl) {
          this.snackBar.open('No se recibio una URL valida de Mercado Pago.', 'Cerrar', {
            duration: 4000
          });
          return;
        }
        window.location.href = checkoutUrl;
      },
      error: error => {
        console.error('Error creando preferencia de Mercado Pago:', error);
        this.snackBar.open(error?.error?.message || 'No se pudo iniciar el pago con Mercado Pago.', 'Cerrar', {
          duration: 4500
        });
      }
    });
  }
  buildPreferencePayload() {
    const user = this.authService.currentUserValue;
    const payer = this.buildPayer(user);
    return {
      external_reference: this.buildExternalReference(),
      payer: payer ?? undefined,
      items: this.cartItems.map(item => ({
        id: item.id,
        title: item.name,
        quantity: item.quantity,
        unit_price: item.price,
        currency_id: 'ARS'
      }))
    };
  }
  buildExternalReference() {
    return `ORDER-${Date.now()}`;
  }
  buildPayer(user) {
    if (!user?.name && !user?.email) {
      return null;
    }
    const fullName = user?.name?.trim() ?? '';
    const [firstName, ...rest] = fullName.split(/\s+/).filter(Boolean);
    const surname = rest.join(' ');
    return {
      name: firstName || undefined,
      surname: surname || undefined,
      email: user?.email || undefined
    };
  }
  static {
    this.ɵfac = function ProductsCheckoutComponent_Factory(t) {
      return new (t || ProductsCheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ProductsCheckoutComponent,
      selectors: [["app-products-checkout"]],
      decls: 47,
      vars: 8,
      consts: [[1, "checkout-shell"], [1, "checkout-navbar"], [1, "checkout-navbar-inner"], [1, "checkout-brand", 3, "click"], ["src", "https://media.licdn.com/dms/image/v2/D4D0BAQGibhoMeCL-mg/company-logo_200_200/company-logo_200_200/0/1667320508791/e_sueldos_logo?e=2147483647&v=beta&t=6BpHD4ZVbBNymqB5aEkJNEXyJ-0qGr2At_F6mEePRAw", "alt", "Logo eSueldos"], [1, "checkout-navbar-actions"], ["mat-stroked-button", "", 1, "checkout-back-btn", 3, "click"], [1, "checkout-container"], [1, "checkout-main"], [1, "checkout-header"], [1, "checkout-eyebrow"], [1, "checkout-list"], ["class", "checkout-item", 4, "ngFor", "ngForOf"], [1, "checkout-summary"], [1, "summary-card"], [1, "summary-kicker"], [1, "summary-row"], [1, "summary-row", "total-row"], ["mat-flat-button", "", 1, "pay-btn", 3, "disabled", "click"], [4, "ngIf"], [1, "summary-note"], [1, "checkout-item"], [1, "checkout-item-main"], [1, "checkout-item-icon"]],
      template: function ProductsCheckoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsCheckoutComponent_Template_div_click_3_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsCheckoutComponent_Template_button_click_6_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "arrow_back");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Volver a productos ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "section", 8)(12, "div", 9)(13, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Resumen de compra");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Confirma tu pedido");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Revisa productos, cantidades y precios antes de continuar con el pago.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ProductsCheckoutComponent_article_20_Template, 12, 5, "article", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "aside", 13)(22, "div", 14)(23, "p", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Tu pedido");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 16)(28, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Subtotal");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 16)(33, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Envio");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "A coordinar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 17)(38, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Total estimado");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsCheckoutComponent_Template_button_click_42_listener() {
            return ctx.pay();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, ProductsCheckoutComponent_mat_icon_43_Template, 2, 0, "mat-icon", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " Vas a ser redirigido al checkout de Mercado Pago para completar el pago. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.cartItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx.totalItems, " producto", ctx.totalItems !== 1 ? "s" : "", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.formatPrice(ctx.subtotal));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.formatPrice(ctx.subtotal));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isPaying || ctx.cartItems.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isPaying);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.isPaying ? "Redirigiendo a Mercado Pago..." : "Pagar con Mercado Pago", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon],
      styles: [".checkout-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 24px;\n  background:\n    radial-gradient(circle at top left, rgba(59, 130, 246, 0.18), transparent 28%),\n    radial-gradient(circle at right center, rgba(14, 165, 233, 0.16), transparent 24%),\n    linear-gradient(180deg, #eef4ff 0%, #f8fbff 46%, #edf3fb 100%);\n}\n\n.checkout-navbar[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n\n.checkout-navbar-inner[_ngcontent-%COMP%] {\n  max-width: 1240px;\n  margin: 0 auto;\n  padding: 18px 22px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 18px;\n  border: 1px solid var(--border-color);\n  border-radius: 28px;\n  background: var(--bg-surface);\n  backdrop-filter: blur(20px);\n  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);\n}\n\n.checkout-brand[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 56px;\n  border-radius: 16px;\n  overflow: hidden;\n  background: #fff;\n  box-shadow: 0 10px 24px rgba(37, 99, 235, 0.16);\n  padding: 8px 14px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.checkout-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.checkout-back-btn[_ngcontent-%COMP%] {\n  border-radius: 14px !important;\n  font-weight: 700 !important;\n}\n\n.checkout-container[_ngcontent-%COMP%] {\n  max-width: 1240px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 340px;\n  gap: 24px;\n}\n\n.checkout-main[_ngcontent-%COMP%], .summary-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 24px;\n  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.08);\n}\n\n.checkout-main[_ngcontent-%COMP%] {\n  padding: 28px;\n}\n\n.checkout-header[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n}\n\n.checkout-eyebrow[_ngcontent-%COMP%], .summary-kicker[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: #2563eb;\n}\n\n.checkout-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .summary-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0f172a;\n}\n\n.checkout-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  color: #64748b;\n}\n\n.checkout-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n\n.checkout-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 18px;\n  padding: 18px;\n  border-radius: 18px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n}\n\n.checkout-item-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n\n.checkout-item-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 16px;\n  background: linear-gradient(135deg, #dbeafe, #bfdbfe);\n  color: #1d4ed8;\n}\n\n.checkout-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  color: #111827;\n}\n\n.checkout-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  padding: 24px;\n  position: sticky;\n  top: 24px;\n}\n\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 14px 0;\n  border-bottom: 1px solid #e5e7eb;\n  color: #334155;\n}\n\n.total-row[_ngcontent-%COMP%] {\n  font-size: 18px;\n  border-bottom: 0;\n}\n\n.pay-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 20px;\n  background: linear-gradient(135deg, #009ee3, #005b96) !important;\n  color: white !important;\n  font-weight: 700 !important;\n  border-radius: 14px !important;\n  min-height: 48px;\n}\n\n.summary-note[_ngcontent-%COMP%] {\n  margin: 14px 0 0;\n  color: #64748b;\n  font-size: 13px;\n  line-height: 1.5;\n}\n\n@media (max-width: 960px) {\n  .checkout-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .summary-card[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLWNoZWNrb3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiOzs7a0VBR2dFO0FBQ2xFOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQiw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLCtDQUErQztFQUMvQyxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsMkNBQTJDO0VBQzNDLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsU0FBUztFQUNULGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixxREFBcUQ7RUFDckQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsU0FBUztFQUNULGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdFQUFnRTtFQUNoRSx1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InByb2R1Y3RzLWNoZWNrb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tvdXQtc2hlbGwge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMjRweDtcbiAgYmFja2dyb3VuZDpcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IHRvcCBsZWZ0LCByZ2JhKDU5LCAxMzAsIDI0NiwgMC4xOCksIHRyYW5zcGFyZW50IDI4JSksXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCByaWdodCBjZW50ZXIsIHJnYmEoMTQsIDE2NSwgMjMzLCAwLjE2KSwgdHJhbnNwYXJlbnQgMjQlKSxcbiAgICBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZWVmNGZmIDAlLCAjZjhmYmZmIDQ2JSwgI2VkZjNmYiAxMDAlKTtcbn1cblxuLmNoZWNrb3V0LW5hdmJhciB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi5jaGVja291dC1uYXZiYXItaW5uZXIge1xuICBtYXgtd2lkdGg6IDEyNDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDE4cHggMjJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDE4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXN1cmZhY2UpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gIGJveC1zaGFkb3c6IDAgMThweCA0NXB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG59XG5cbi5jaGVja291dC1icmFuZCB7XG4gIHdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDEwcHggMjRweCByZ2JhKDM3LCA5OSwgMjM1LCAwLjE2KTtcbiAgcGFkZGluZzogOHB4IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNoZWNrb3V0LWJyYW5kIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5jaGVja291dC1iYWNrLWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xufVxuXG4uY2hlY2tvdXQtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIDM0MHB4O1xuICBnYXA6IDI0cHg7XG59XG5cbi5jaGVja291dC1tYWluLFxuLnN1bW1hcnktY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBib3gtc2hhZG93OiAwIDE4cHggMzZweCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xufVxuXG4uY2hlY2tvdXQtbWFpbiB7XG4gIHBhZGRpbmc6IDI4cHg7XG59XG5cbi5jaGVja291dC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xufVxuXG4uY2hlY2tvdXQtZXllYnJvdyxcbi5zdW1tYXJ5LWtpY2tlciB7XG4gIG1hcmdpbjogMCAwIDhweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xNmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzI1NjNlYjtcbn1cblxuLmNoZWNrb3V0LWhlYWRlciBoMSxcbi5zdW1tYXJ5LWNhcmQgaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMGYxNzJhO1xufVxuXG4uY2hlY2tvdXQtaGVhZGVyIHAge1xuICBtYXJnaW46IDEwcHggMCAwO1xuICBjb2xvcjogIzY0NzQ4Yjtcbn1cblxuLmNoZWNrb3V0LWxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDE0cHg7XG59XG5cbi5jaGVja291dC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDE4cHg7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGJhY2tncm91bmQ6ICNmOGZhZmM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG59XG5cbi5jaGVja291dC1pdGVtLW1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE0cHg7XG59XG5cbi5jaGVja291dC1pdGVtLWljb24ge1xuICB3aWR0aDogNTJweDtcbiAgaGVpZ2h0OiA1MnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNkYmVhZmUsICNiZmRiZmUpO1xuICBjb2xvcjogIzFkNGVkODtcbn1cblxuLmNoZWNrb3V0LWl0ZW0gaDMge1xuICBtYXJnaW46IDAgMCA2cHg7XG4gIGNvbG9yOiAjMTExODI3O1xufVxuXG4uY2hlY2tvdXQtaXRlbSBwIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzY0NzQ4Yjtcbn1cblxuLnN1bW1hcnktY2FyZCB7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMjRweDtcbn1cblxuLnN1bW1hcnktcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDE0cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU3ZWI7XG4gIGNvbG9yOiAjMzM0MTU1O1xufVxuXG4udG90YWwtcm93IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuXG4ucGF5LWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA5ZWUzLCAjMDA1Yjk2KSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XG59XG5cbi5zdW1tYXJ5LW5vdGUge1xuICBtYXJnaW46IDE0cHggMCAwO1xuICBjb2xvcjogIzY0NzQ4YjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLmNoZWNrb3V0LWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuc3VtbWFyeS1jYXJkIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9wcm9kdWN0cy9wcm9kdWN0cy1jaGVja291dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYjs7O2tFQUdnRTtBQUNsRTs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiwrQ0FBK0M7RUFDL0MsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsYUFBYTtFQUNiLDJDQUEyQztFQUMzQyxTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLFNBQVM7RUFDVCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscURBQXFEO0VBQ3JELGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnRUFBZ0U7RUFDaEUsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQSxna05BQWdrTiIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja291dC1zaGVsbCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAyNHB4O1xuICBiYWNrZ3JvdW5kOlxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgdG9wIGxlZnQsIHJnYmEoNTksIDEzMCwgMjQ2LCAwLjE4KSwgdHJhbnNwYXJlbnQgMjglKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IHJpZ2h0IGNlbnRlciwgcmdiYSgxNCwgMTY1LCAyMzMsIDAuMTYpLCB0cmFuc3BhcmVudCAyNCUpLFxuICAgIGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNlZWY0ZmYgMCUsICNmOGZiZmYgNDYlLCAjZWRmM2ZiIDEwMCUpO1xufVxuXG4uY2hlY2tvdXQtbmF2YmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLmNoZWNrb3V0LW5hdmJhci1pbm5lciB7XG4gIG1heC13aWR0aDogMTI0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMThweCAyMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMThweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc3VyZmFjZSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgYm94LXNoYWRvdzogMCAxOHB4IDQ1cHggcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbn1cblxuLmNoZWNrb3V0LWJyYW5kIHtcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyNHB4IHJnYmEoMzcsIDk5LCAyMzUsIDAuMTYpO1xuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2hlY2tvdXQtYnJhbmQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmNoZWNrb3V0LWJhY2stYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMTRweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG59XG5cbi5jaGVja291dC1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyNDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgMzQwcHg7XG4gIGdhcDogMjRweDtcbn1cblxuLmNoZWNrb3V0LW1haW4sXG4uc3VtbWFyeS1jYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIGJveC1zaGFkb3c6IDAgMThweCAzNnB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG59XG5cbi5jaGVja291dC1tYWluIHtcbiAgcGFkZGluZzogMjhweDtcbn1cblxuLmNoZWNrb3V0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDIycHg7XG59XG5cbi5jaGVja291dC1leWVicm93LFxuLnN1bW1hcnkta2lja2VyIHtcbiAgbWFyZ2luOiAwIDAgOHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE2ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMjU2M2ViO1xufVxuXG4uY2hlY2tvdXQtaGVhZGVyIGgxLFxuLnN1bW1hcnktY2FyZCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICMwZjE3MmE7XG59XG5cbi5jaGVja291dC1oZWFkZXIgcCB7XG4gIG1hcmdpbjogMTBweCAwIDA7XG4gIGNvbG9yOiAjNjQ3NDhiO1xufVxuXG4uY2hlY2tvdXQtbGlzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTRweDtcbn1cblxuLmNoZWNrb3V0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMThweDtcbiAgcGFkZGluZzogMThweDtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbn1cblxuLmNoZWNrb3V0LWl0ZW0tbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTRweDtcbn1cblxuLmNoZWNrb3V0LWl0ZW0taWNvbiB7XG4gIHdpZHRoOiA1MnB4O1xuICBoZWlnaHQ6IDUycHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2RiZWFmZSwgI2JmZGJmZSk7XG4gIGNvbG9yOiAjMWQ0ZWQ4O1xufVxuXG4uY2hlY2tvdXQtaXRlbSBoMyB7XG4gIG1hcmdpbjogMCAwIDZweDtcbiAgY29sb3I6ICMxMTE4Mjc7XG59XG5cbi5jaGVja291dC1pdGVtIHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNjQ3NDhiO1xufVxuXG4uc3VtbWFyeS1jYXJkIHtcbiAgcGFkZGluZzogMjRweDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAyNHB4O1xufVxuXG4uc3VtbWFyeS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogMTRweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTdlYjtcbiAgY29sb3I6ICMzMzQxNTU7XG59XG5cbi50b3RhbC1yb3cge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG5cbi5wYXktYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDllZTMsICMwMDViOTYpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogNDhweDtcbn1cblxuLnN1bW1hcnktbm90ZSB7XG4gIG1hcmdpbjogMTRweCAwIDA7XG4gIGNvbG9yOiAjNjQ3NDhiO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuY2hlY2tvdXQtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5zdW1tYXJ5LWNhcmQge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 9758:
/*!**************************************************************!*\
  !*** ./src/app/modules/products/products-entry.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsEntryComponent": () => (/* binding */ ProductsEntryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/auth/auth.service */ 7990);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class ProductsEntryComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    const user = this.authService.currentUserValue;
    const target = user?.role === 'admin' ? '/products/admin' : '/products/shop';
    this.router.navigateByUrl(target, {
      replaceUrl: true
    });
  }
  static {
    this.ɵfac = function ProductsEntryComponent_Factory(t) {
      return new (t || ProductsEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProductsEntryComponent,
      selectors: [["app-products-entry"]],
      decls: 0,
      vars: 0,
      template: function ProductsEntryComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 2727:
/*!*************************************************************!*\
  !*** ./src/app/modules/products/products-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsRoutingModule": () => (/* binding */ ProductsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.component */ 1089);
/* harmony import */ var _products_checkout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-checkout.component */ 4166);
/* harmony import */ var _products_entry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-entry.component */ 9758);
/* harmony import */ var _products_shop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-shop.component */ 6421);
/* harmony import */ var _core_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/guards/auth/auth.guard */ 6310);
/* harmony import */ var _core_guards_admin_admin_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/guards/admin/admin.guard */ 5228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









const routes = [{
  path: '',
  component: _products_entry_component__WEBPACK_IMPORTED_MODULE_2__.ProductsEntryComponent,
  canActivate: [_core_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
}, {
  path: 'admin',
  component: _products_component__WEBPACK_IMPORTED_MODULE_0__.ProductsComponent,
  canActivate: [_core_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard, _core_guards_admin_admin_guard__WEBPACK_IMPORTED_MODULE_5__.AdminGuard]
}, {
  path: 'shop',
  component: _products_shop_component__WEBPACK_IMPORTED_MODULE_3__.ProductsShopComponent,
  canActivate: [_core_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
}, {
  path: 'checkout',
  component: _products_checkout_component__WEBPACK_IMPORTED_MODULE_1__.ProductsCheckoutComponent,
  canActivate: [_core_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
}];
class ProductsRoutingModule {
  static {
    this.ɵfac = function ProductsRoutingModule_Factory(t) {
      return new (t || ProductsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: ProductsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ProductsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 6421:
/*!*************************************************************!*\
  !*** ./src/app/modules/products/products-shop.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsShopComponent": () => (/* binding */ ProductsShopComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.service */ 219);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 9121);














function ProductsShopComponent_li_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsShopComponent_li_53_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
      const category_r14 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.categoryFilter.setValue(category_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r14 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r0.categoryFilter.value === category_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", category_r14, " ");
  }
}
function ProductsShopComponent_button_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsShopComponent_button_58_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const option_r17 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.stockFilter.setValue(option_r17.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r17 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.stockFilter.value === option_r17.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r17.label, " ");
  }
}
function ProductsShopComponent_p_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", ctx_r2.activeFiltersCount, " filtro", ctx_r2.activeFiltersCount !== 1 ? "s" : "", " activo", ctx_r2.activeFiltersCount !== 1 ? "s" : "", " ");
  }
}
function ProductsShopComponent_span_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r3.totalResults, " resultado", ctx_r3.totalResults !== 1 ? "s" : "", "");
  }
}
function ProductsShopComponent_span_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cargando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProductsShopComponent_mat_option_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r20.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r20.label, " ");
  }
}
function ProductsShopComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "error_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Ocurri\u00F3 un error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.errorMessage);
  }
}
function ProductsShopComponent_div_81_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 56)(2, "div", 57)(3, "div", 58)(4, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return [1, 2, 3, 4, 5, 6];
};
function ProductsShopComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductsShopComponent_div_81_div_1_Template, 5, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
  }
}
function ProductsShopComponent_div_82_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r24.category, " ");
  }
}
function ProductsShopComponent_div_82_div_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 80);
  }
  if (rf & 2) {
    const imageUrl_r33 = ctx.ngIf;
    const product_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", imageUrl_r33, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", product_r24.name);
  }
}
function ProductsShopComponent_div_82_div_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 81)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "image_not_supported");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ProductsShopComponent_div_82_div_1_p_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 2, product_r24.description, 0, 80), "", product_r24.description.length > 80 ? "..." : "", " ");
  }
}
function ProductsShopComponent_div_82_div_1_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsShopComponent_div_82_div_1_button_32_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38);
      const product_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r36.addToCart(product_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "add_shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r30.getStockStatus(product_r24.stock) === "out");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r30.getStockStatus(product_r24.stock) === "out" ? "Sin stock" : "Agregar al carrito", " ");
  }
}
function ProductsShopComponent_div_82_div_1_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84)(1, "div", 85)(2, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsShopComponent_div_82_div_1_div_33_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42);
      const product_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r40.decrementQuantity(product_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsShopComponent_div_82_div_1_div_33_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42);
      const product_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r43.incrementQuantity(product_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsShopComponent_div_82_div_1_div_33_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42);
      const product_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r45.removeFromCart(product_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Quitar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r31.getProductQuantity(product_r24.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r31.getStockStatus(product_r24.stock) === "out" || ctx_r31.getProductQuantity(product_r24.id) >= ((tmp_1_0 = product_r24.stock) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 999999));
  }
}
function ProductsShopComponent_div_82_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductsShopComponent_div_82_div_1_div_1_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProductsShopComponent_div_82_div_1_img_3_Template, 1, 2, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProductsShopComponent_div_82_div_1_ng_template_4_Template, 3, 0, "ng-template", null, 65, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Imagen");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 67)(9, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 69)(12, "mat-icon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-icon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-icon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-icon", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "star_half");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "(42)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ProductsShopComponent_div_82_div_1_p_26_Template, 3, 6, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 75)(28, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ProductsShopComponent_div_82_div_1_button_32_Template, 4, 2, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ProductsShopComponent_div_82_div_1_div_33_Template, 14, 2, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r24 = ctx.$implicit;
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r24.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r23.getProductImageUrl(product_r24))("ngIfElse", _r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r24.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r23.formatPrice(product_r24.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r24.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("product-stock stock-" + ctx_r23.getStockStatus(product_r24.stock));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r23.getStockStatus(product_r24.stock) === "out" ? "remove_shopping_cart" : "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r23.getStockLabel(product_r24.stock), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r23.getProductQuantity(product_r24.id) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r23.getProductQuantity(product_r24.id) > 0);
  }
}
function ProductsShopComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductsShopComponent_div_82_div_1_Template, 34, 12, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.products);
  }
}
function ProductsShopComponent_div_83_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsShopComponent_div_83_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r49.clearFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "filter_alt_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Limpiar filtros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProductsShopComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89)(1, "div", 90)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "storefront");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProductsShopComponent_div_83_button_8_Template, 4, 0, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.activeFiltersCount > 0 ? "No hay resultados para los filtros seleccionados" : "No hay productos disponibles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.activeFiltersCount > 0 ? "Prob\u00E1 limpiando filtros o usando una b\u00FAsqueda m\u00E1s amplia." : "Todav\u00EDa no hay productos disponibles para comprar.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.activeFiltersCount > 0);
  }
}
const _c1 = function () {
  return [12, 24, 48];
};
function ProductsShopComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 93)(1, "mat-paginator", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function ProductsShopComponent_div_84_Template_mat_paginator_page_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r51.onPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("length", ctx_r10.totalResults)("pageIndex", ctx_r10.currentPage)("pageSize", ctx_r10.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c1));
  }
}
function ProductsShopComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 95)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "remove_shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Tu carrito est\u00E1 vac\u00EDo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Agreg\u00E1 productos para empezar tu pedido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ProductsShopComponent_div_95_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98)(1, "div")(2, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r54 = ctx.$implicit;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r54.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", item_r54.quantity, " x ", ctx_r53.formatPrice(item_r54.price), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r53.formatPrice(item_r54.price * item_r54.quantity));
  }
}
function ProductsShopComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductsShopComponent_div_95_div_1_Template, 8, 4, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r12.cartItems);
  }
}
function ProductsShopComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 101)(1, "div", 102)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsShopComponent_div_96_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r55.goToCheckout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "shopping_bag");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Continuar compra ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsShopComponent_div_96_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r57.clearCart());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "delete_sweep");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Vaciar carrito ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r13.formatPrice(ctx_r13.cartSubtotal));
  }
}
class ProductsShopComponent {
  constructor(productService, snackBar, router) {
    this.productService = productService;
    this.snackBar = snackBar;
    this.router = router;
    this.products = [];
    this.isLoading = false;
    this.errorMessage = '';
    this.totalResults = 0;
    this.pageSize = 12;
    this.currentPage = 0;
    this.cartCount = 0;
    this.cartItems = [];
    this.categories = ['Electrónica', 'Ropa', 'Alimentos', 'Hogar', 'Deportes', 'Libros', 'Juguetes', 'Salud', 'Automotriz', 'Otros'];
    this.sortOptions = [{
      value: 'createdAt:desc',
      label: 'Más recientes'
    }, {
      value: 'name:asc',
      label: 'Nombre (A-Z)'
    }, {
      value: 'name:desc',
      label: 'Nombre (Z-A)'
    }, {
      value: 'price:asc',
      label: 'Precio: menor a mayor'
    }, {
      value: 'price:desc',
      label: 'Precio: mayor a menor'
    }, {
      value: 'stock:desc',
      label: 'Mayor stock'
    }];
    this.stockOptions = [{
      value: 'all',
      label: 'Todos'
    }, {
      value: 'in',
      label: 'En stock'
    }, {
      value: 'low',
      label: 'Stock bajo'
    }, {
      value: 'out',
      label: 'Sin stock'
    }];
    this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', {
      nonNullable: true
    });
    this.categoryFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('all', {
      nonNullable: true
    });
    this.stockFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('all', {
      nonNullable: true
    });
    this.sortControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('createdAt:desc', {
      nonNullable: true
    });
  }
  ngOnInit() {
    this.setupFilters();
    this.loadProducts();
    this.syncCartState();
  }
  setupFilters() {
    this.searchControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)()).subscribe(() => {
      this.currentPage = 0;
      this.loadProducts();
    });
    this.categoryFilter.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)()).subscribe(() => {
      this.currentPage = 0;
      this.loadProducts();
    });
    this.stockFilter.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)()).subscribe(() => {
      this.currentPage = 0;
      this.loadProducts();
    });
    this.sortControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)()).subscribe(() => {
      this.currentPage = 0;
      this.loadProducts();
    });
  }
  loadProducts() {
    this.isLoading = true;
    this.errorMessage = '';
    this.productService.getProducts({
      page: this.currentPage + 1,
      limit: this.pageSize,
      sortBy: this.sortControl.value,
      name: this.searchControl.value,
      category: this.categoryFilter.value !== 'all' ? this.categoryFilter.value : undefined,
      stockStatus: this.stockFilter.value
    }).subscribe({
      next: response => {
        const filteredResults = this.applyClientSideFallbackFilters(response.results);
        this.products = filteredResults;
        this.totalResults = this.shouldUseFilteredCount() ? filteredResults.length : response.totalResults;
        this.isLoading = false;
      },
      error: err => {
        console.error('Error cargando productos:', err);
        this.errorMessage = 'No se pudieron cargar los productos. Verificá que el servidor esté activo.';
        this.isLoading = false;
      }
    });
  }
  applyClientSideFallbackFilters(products) {
    const searchTerm = this.searchControl.value.trim().toLowerCase();
    const selectedCategory = this.categoryFilter.value;
    const selectedStock = this.stockFilter.value;
    return products.filter(product => {
      const matchesSearch = !searchTerm || [product.name, product.description, product.category].filter(Boolean).some(value => String(value).toLowerCase().includes(searchTerm));
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesStock = selectedStock === 'all' || this.getStockStatus(product.stock) === selectedStock;
      return matchesSearch && matchesCategory && matchesStock;
    });
  }
  shouldUseFilteredCount() {
    return !!this.searchControl.value.trim() || this.categoryFilter.value !== 'all' || this.stockFilter.value !== 'all';
  }
  onPageChange(event) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadProducts();
  }
  clearFilters() {
    this.searchControl.setValue('', {
      emitEvent: false
    });
    this.categoryFilter.setValue('all', {
      emitEvent: false
    });
    this.stockFilter.setValue('all', {
      emitEvent: false
    });
    this.sortControl.setValue('createdAt:desc', {
      emitEvent: false
    });
    this.currentPage = 0;
    this.loadProducts();
    this.snackBar.open('Filtros limpiados', 'Cerrar', {
      duration: 2000
    });
  }
  addToCart(product) {
    const cart = this.getCart();
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    });
    this.saveCart(cart);
    this.snackBar.open(`${product.name} agregado al carrito`, 'Cerrar', {
      duration: 2200
    });
  }
  incrementQuantity(product) {
    const cart = this.getCart();
    const item = cart.find(entry => entry.id === product.id);
    if (!item) {
      this.addToCart(product);
      return;
    }
    const stock = product.stock ?? Number.MAX_SAFE_INTEGER;
    if (item.quantity >= stock) {
      this.snackBar.open('No podés agregar más unidades que el stock disponible', 'Cerrar', {
        duration: 2200
      });
      return;
    }
    item.quantity += 1;
    this.saveCart(cart);
  }
  decrementQuantity(product) {
    const cart = this.getCart();
    const item = cart.find(entry => entry.id === product.id);
    if (!item) return;
    item.quantity -= 1;
    if (item.quantity <= 0) {
      this.removeFromCart(product);
      return;
    }
    this.saveCart(cart);
  }
  removeFromCart(product) {
    const cart = this.getCart().filter(item => item.id !== product.id);
    this.saveCart(cart);
    this.snackBar.open(`${product.name} quitado del carrito`, 'Cerrar', {
      duration: 2000
    });
  }
  clearCart() {
    localStorage.removeItem('shopCart');
    this.syncCartState();
    this.snackBar.open('Carrito vaciado', 'Cerrar', {
      duration: 2000
    });
  }
  getCart() {
    const rawCart = localStorage.getItem('shopCart');
    return rawCart ? JSON.parse(rawCart) : [];
  }
  saveCart(cart) {
    localStorage.setItem('shopCart', JSON.stringify(cart));
    this.syncCartState();
  }
  syncCartState() {
    this.cartItems = this.getCart();
    this.cartCount = this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }
  getProductQuantity(productId) {
    return this.cartItems.find(item => item.id === productId)?.quantity ?? 0;
  }
  get cartSubtotal() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  goBack() {
    this.router.navigate(['/principal']);
  }
  goToCheckout() {
    this.router.navigate(['/products/checkout']);
  }
  getStockStatus(stock) {
    if (stock === undefined || stock === null) return 'unknown';
    if (stock === 0) return 'out';
    if (stock < 10) return 'low';
    return 'in';
  }
  getStockLabel(stock) {
    if (stock === undefined || stock === null) return 'Sin info';
    if (stock === 0) return 'Sin stock';
    if (stock < 10) return `Solo ${stock} disponibles`;
    return `${stock} en stock`;
  }
  formatPrice(price) {
    return price?.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2
    }) ?? '-';
  }
  getProductImageUrl(product) {
    return this.productService.getImageUrl(product.image);
  }
  get activeFiltersCount() {
    let count = 0;
    if (this.searchControl.value.trim()) count += 1;
    if (this.categoryFilter.value !== 'all') count += 1;
    if (this.stockFilter.value !== 'all') count += 1;
    if (this.sortControl.value !== 'createdAt:desc') count += 1;
    return count;
  }
  static {
    this.ɵfac = function ProductsShopComponent_Factory(t) {
      return new (t || ProductsShopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProductsShopComponent,
      selectors: [["app-products-shop"]],
      decls: 97,
      vars: 22,
      consts: [[1, "amz-topbar", "shop-topbar"], [1, "amz-topbar-inner"], [1, "amz-logo", 3, "click"], ["src", "https://media.licdn.com/dms/image/v2/D4D0BAQGibhoMeCL-mg/company-logo_200_200/company-logo_200_200/0/1667320508791/e_sueldos_logo?e=2147483647&v=beta&t=6BpHD4ZVbBNymqB5aEkJNEXyJ-0qGr2At_F6mEePRAw", "alt", "Logo eSueldos", 1, "amz-logo-image"], [1, "amz-search-bar"], [1, "search-icon"], ["type", "text", "placeholder", "Buscar por nombre, descripci\u00F3n o categor\u00EDa...", 1, "search-input", 3, "formControl"], ["type", "button", 1, "search-btn-fake", 3, "disabled"], [1, "amz-nav-links"], ["mat-stroked-button", "", "routerLink", "/principal", 1, "amz-nav-btn"], ["mat-stroked-button", "", "routerLink", "/profile", 1, "amz-nav-btn"], [1, "amz-topbar-actions"], ["mat-button", "", 1, "amz-back-btn", 3, "click"], [1, "amz-subbar"], [1, "amz-subbar-inner"], [1, "amz-breadcrumb"], [1, "breadcrumb-link", 3, "click"], [1, "breadcrumb-sep"], [1, "breadcrumb-current"], [1, "amz-stats"], [1, "stat-pill"], [1, "amz-main", "shop-layout"], [1, "amz-sidebar"], [1, "sidebar-section"], [3, "click"], [3, "active", "click", 4, "ngFor", "ngForOf"], [1, "stock-filter-list"], ["type", "button", "class", "sidebar-filter-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["mat-stroked-button", "", 1, "clear-filters-btn", 3, "disabled", "click"], ["class", "filters-hint", 4, "ngIf"], [1, "amz-content"], [1, "results-toolbar"], [1, "results-count"], [4, "ngIf"], [1, "results-sort"], ["appearance", "outline", 1, "sort-field"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "error-banner", 4, "ngIf"], ["class", "products-grid", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "paginator-wrap", 4, "ngIf"], [1, "cart-panel"], [1, "cart-panel-header"], [1, "cart-kicker"], [1, "cart-count-pill"], ["class", "cart-empty", 4, "ngIf"], ["class", "cart-items", 4, "ngIf"], ["class", "cart-summary", 4, "ngIf"], ["type", "button", 1, "sidebar-filter-btn", 3, "click"], [1, "filters-hint"], [3, "value"], [1, "error-banner"], [1, "products-grid"], ["class", "product-skeleton", 4, "ngFor", "ngForOf"], [1, "product-skeleton"], [1, "skeleton-img"], [1, "skeleton-line", "w80"], [1, "skeleton-line", "w60"], [1, "skeleton-line", "w40"], ["class", "product-card", 4, "ngFor", "ngForOf"], [1, "product-card"], ["class", "product-badge", 4, "ngIf"], [1, "product-image-wrap"], ["class", "product-image", 3, "src", "alt", 4, "ngIf", "ngIfElse"], ["shopPlaceholder", ""], [1, "product-image-label"], [1, "product-info"], [1, "product-name"], [1, "product-rating"], [1, "star"], [1, "star-half"], [1, "rating-count"], [1, "product-price"], ["class", "product-desc", 4, "ngIf"], [1, "product-stock"], [1, "product-actions", "product-actions-shop"], ["mat-flat-button", "", "class", "btn-cart", 3, "disabled", "click", 4, "ngIf"], ["class", "cart-controls", 4, "ngIf"], [1, "product-badge"], [1, "product-image", 3, "src", "alt"], [1, "product-img-placeholder"], [1, "product-desc"], ["mat-flat-button", "", 1, "btn-cart", 3, "disabled", "click"], [1, "cart-controls"], [1, "qty-stepper"], ["mat-icon-button", "", "type", "button", 3, "click"], ["mat-icon-button", "", "type", "button", 3, "disabled", "click"], ["mat-stroked-button", "", "type", "button", 1, "btn-remove-cart", 3, "click"], [1, "empty-state"], [1, "empty-icon"], ["mat-stroked-button", "", "class", "clear-filters-btn clear-filters-empty", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", 1, "clear-filters-btn", "clear-filters-empty", 3, "click"], [1, "paginator-wrap"], ["showFirstLastButtons", "", 3, "length", "pageIndex", "pageSize", "pageSizeOptions", "page"], [1, "cart-empty"], [1, "cart-items"], ["class", "cart-item", 4, "ngFor", "ngForOf"], [1, "cart-item"], [1, "cart-item-name"], [1, "cart-item-meta"], [1, "cart-summary"], [1, "cart-summary-row"], ["mat-flat-button", "", 1, "cart-checkout-btn", 3, "click"], ["mat-stroked-button", "", 1, "cart-clear-btn", 3, "click"]],
      template: function ProductsShopComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsShopComponent_Template_div_click_2_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "mat-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 7)(9, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8)(12, "a", 9)(13, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "space_dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Inicio ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 10)(17, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "person");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Perfil ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11)(21, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsShopComponent_Template_button_click_21_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "arrow_back");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Volver ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13)(26, "div", 14)(27, "div", 15)(28, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsShopComponent_Template_span_click_28_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Inicio");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-icon", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "chevron_right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Comprar productos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 19)(35, "div", 20)(36, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "inventory_2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " productos ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 20)(42, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "shopping_bag");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " Compr\u00E1 de forma simple y r\u00E1pida ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 21)(46, "aside", 22)(47, "div", 23)(48, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Categor\u00EDas");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "ul")(51, "li", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsShopComponent_Template_li_click_51_listener() {
            return ctx.categoryFilter.setValue("all");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Todos los productos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, ProductsShopComponent_li_53_Template, 2, 3, "li", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 23)(55, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Disponibilidad");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, ProductsShopComponent_button_58_Template, 2, 3, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 23)(60, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Acciones");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsShopComponent_Template_button_click_62_listener() {
            return ctx.clearFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "filter_alt_off");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, " Limpiar filtros ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, ProductsShopComponent_p_66_Template, 2, 3, "p", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 30)(68, "div", 31)(69, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, ProductsShopComponent_span_70_Template, 2, 2, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, ProductsShopComponent_span_71_Template, 2, 0, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 34)(73, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "sort");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Ordenar por:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "mat-form-field", 35)(78, "mat-select", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, ProductsShopComponent_mat_option_79_Template, 2, 2, "mat-option", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, ProductsShopComponent_div_80_Template, 8, 1, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, ProductsShopComponent_div_81_Template, 2, 2, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, ProductsShopComponent_div_82_Template, 2, 1, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, ProductsShopComponent_div_83_Template, 9, 3, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, ProductsShopComponent_div_84_Template, 2, 5, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "aside", 42)(86, "div", 43)(87, "div")(88, "p", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Mi compra");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Carrito");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "span", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](94, ProductsShopComponent_div_94_Template, 7, 0, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](95, ProductsShopComponent_div_95_Template, 2, 1, "div", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](96, ProductsShopComponent_div_96_Template, 14, 1, "div", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.searchControl);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.totalResults);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.categoryFilter.value === "all");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.stockOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.activeFiltersCount === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeFiltersCount > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.sortControl);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sortOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.products.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.products.length === 0 && !ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.totalResults > ctx.pageSize);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.cartCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cartItems.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cartItems.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cartItems.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_7__.SlicePipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  background: #eaeded;\n  min-height: 100vh;\n  font-family: 'Amazon Ember', Arial, sans-serif;\n}\n\n.amz-topbar[_ngcontent-%COMP%] {\n  background: #131921;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);\n}\n\n.amz-topbar-inner[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 10px 20px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n.amz-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 8px 12px;\n  border-radius: 4px;\n  border: 2px solid transparent;\n  transition: border-color 0.15s;\n  white-space: nowrap;\n  background: #fff;\n}\n\n.amz-logo[_ngcontent-%COMP%]:hover {\n  border-color: white;\n}\n\n.amz-logo-image[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 34px;\n  object-fit: contain;\n  display: block;\n}\n\n.amz-search-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  background: #fff;\n  border-radius: 4px;\n  overflow: hidden;\n  border: 2px solid #f0a500;\n  max-width: 700px;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  padding: 0 12px;\n  color: #555;\n  font-size: 20px;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 0;\n  outline: none;\n  padding: 12px 0;\n  font-size: 14px;\n  color: #131921;\n  background: transparent;\n}\n\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: #8a8f98;\n}\n\n.search-btn-fake[_ngcontent-%COMP%] {\n  background: #f0a500;\n  padding: 0 14px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border: 0;\n}\n\n.search-btn-fake[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #131921;\n}\n\n.amz-topbar-actions[_ngcontent-%COMP%] {\n  background-color: red;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n\n.amz-nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.amz-nav-btn[_ngcontent-%COMP%] {\n  min-height: 38px;\n  border-radius: 999px !important;\n  border-color: rgba(255, 255, 255, 0.22) !important;\n  color: white !important;\n}\n\n.amz-back-btn[_ngcontent-%COMP%] {\n  color: white !important;\n  border: 1px solid rgba(255, 255, 255, 0.3) !important;\n  border-radius: 4px !important;\n  font-size: 13px !important;\n  padding: 6px 14px !important;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.amz-back-btn[_ngcontent-%COMP%]:hover {\n  border-color: white !important;\n  background: rgba(255, 255, 255, 0.08) !important;\n}\n\n.amz-add-btn[_ngcontent-%COMP%] {\n  background: #f0a500 !important;\n  color: #131921 !important;\n  font-weight: 700 !important;\n  border-radius: 8px !important;\n  padding: 8px 18px !important;\n  font-size: 13px !important;\n  box-shadow: 0 2px 8px rgba(240, 165, 0, 0.4) !important;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  white-space: nowrap;\n}\n\n.amz-add-btn[_ngcontent-%COMP%]:hover {\n  background: #e69500 !important;\n  box-shadow: 0 4px 14px rgba(240, 165, 0, 0.6) !important;\n}\n\n.amz-subbar[_ngcontent-%COMP%] {\n  background: #232f3e;\n  border-bottom: 1px solid #37475a;\n}\n\n.amz-subbar-inner[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 8px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n\n.amz-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n}\n\n.breadcrumb-link[_ngcontent-%COMP%] {\n  color: #ccc;\n  cursor: pointer;\n}\n\n.breadcrumb-link[_ngcontent-%COMP%]:hover {\n  color: #f0a500;\n  text-decoration: underline;\n}\n\n.breadcrumb-sep[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n\n.breadcrumb-current[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 600;\n}\n\n.amz-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n.stat-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 12px;\n}\n\n.stat-pill[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #f0a500;\n}\n\n.amz-main[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 20px;\n  display: flex;\n  gap: 20px;\n  align-items: flex-start;\n}\n\n.amz-sidebar[_ngcontent-%COMP%] {\n  width: 240px;\n  flex-shrink: 0;\n  background: white;\n  border-radius: 8px;\n  padding: 16px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n\n.sidebar-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #eee;\n}\n\n.sidebar-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n\n.sidebar-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 14px;\n  font-weight: 700;\n  color: #131921;\n  border-bottom: 2px solid #f0a500;\n  padding-bottom: 6px;\n}\n\n.sidebar-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.sidebar-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 5px 0 5px 4px;\n  font-size: 13px;\n  color: #0066c0;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background 0.15s;\n}\n\n.sidebar-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #f0f2f2;\n  color: #c45500;\n}\n\n.sidebar-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #c45500;\n  border-left: 3px solid #f0a500;\n}\n\n.stock-filter-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.sidebar-filter-btn[_ngcontent-%COMP%] {\n  border: 1px solid #d5d9d9;\n  border-radius: 999px;\n  background: #fff;\n  color: #0f1111;\n  font-size: 13px;\n  padding: 8px 12px;\n  text-align: left;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n\n.sidebar-filter-btn[_ngcontent-%COMP%]:hover {\n  border-color: #f0a500;\n  background: #fff8e5;\n}\n\n.sidebar-filter-btn.active[_ngcontent-%COMP%] {\n  border-color: #f0a500;\n  background: #fff1cc;\n  color: #8a4b00;\n  font-weight: 700;\n}\n\n.clear-filters-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px !important;\n  font-weight: 600 !important;\n}\n\n.clear-filters-empty[_ngcontent-%COMP%] {\n  max-width: 260px;\n}\n\n.filters-hint[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  font-size: 12px;\n  color: #555;\n}\n\n.amz-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n\n.results-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: white;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n  font-size: 14px;\n  gap: 12px;\n}\n\n.results-count[_ngcontent-%COMP%] {\n  color: #555;\n}\n\n.results-sort[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #555;\n  font-size: 13px;\n  flex-wrap: wrap;\n}\n\n.results-sort[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n\n.sort-field[_ngcontent-%COMP%] {\n  width: 240px;\n  margin-bottom: -1.25em;\n}\n\n.error-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  background: #fff3cd;\n  border: 1px solid #f0a500;\n  border-radius: 8px;\n  padding: 16px;\n  margin-bottom: 16px;\n  color: #856404;\n}\n\n.error-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #f0a500;\n  flex-shrink: 0;\n}\n\n.error-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 13px;\n}\n\n.products-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n\n.product-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n  border: 1px solid #ddd;\n}\n\n.product-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\n  transform: translateY(-3px);\n  border-color: #f0a500;\n}\n\n.product-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  background: #232f3e;\n  color: #f0a500;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  z-index: 2;\n}\n\n.product-image-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  height: 180px;\n  background: linear-gradient(135deg, #f5f5f5 0%, #ebebeb 100%);\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.product-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.product-img-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 90px;\n  height: 90px;\n  background: #e0e0e0;\n  border-radius: 50%;\n}\n\n.product-img-placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n  color: #aaa;\n}\n\n.product-image-label[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: rgba(19, 25, 33, 0.72);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n}\n\n.product-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(19, 25, 33, 0.65);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n\n.product-card[_ngcontent-%COMP%]:hover   .product-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.overlay-btn[_ngcontent-%COMP%] {\n  width: 44px !important;\n  height: 44px !important;\n  border-radius: 50% !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  transition: transform 0.2s !important;\n}\n\n.overlay-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1) !important;\n}\n\n.overlay-btn.edit-btn[_ngcontent-%COMP%] {\n  background: #00a8e1 !important;\n  color: white !important;\n}\n\n.overlay-btn.delete-btn[_ngcontent-%COMP%] {\n  background: #e53935 !important;\n  color: white !important;\n}\n\n.product-info[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.product-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #0f1111;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.product-rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1px;\n}\n\n.product-rating[_ngcontent-%COMP%]   mat-icon.star[_ngcontent-%COMP%], .product-rating[_ngcontent-%COMP%]   mat-icon.star-half[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n  color: #f0a500;\n}\n\n.rating-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #007185;\n  margin-left: 4px;\n}\n\n.product-price[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #b12704;\n  margin: 2px 0;\n}\n\n.product-desc[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #555;\n  line-height: 1.5;\n}\n\n.product-stock[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 3px 8px;\n  border-radius: 4px;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.product-stock[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n\n.stock-in[_ngcontent-%COMP%] {\n  background: #e7f5e7;\n  color: #007600;\n}\n\n.stock-low[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n\n.stock-out[_ngcontent-%COMP%] {\n  background: #fce4e4;\n  color: #b71c1c;\n}\n\n.stock-unknown[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #777;\n}\n\n.product-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 10px 14px;\n  border-top: 1px solid #f0f2f2;\n  background: #fafafa;\n}\n\n.btn-edit[_ngcontent-%COMP%], .btn-delete[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 12px !important;\n  font-weight: 600 !important;\n  border-radius: 6px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  gap: 4px !important;\n  height: 36px !important;\n  transition: all 0.15s !important;\n}\n\n.btn-edit[_ngcontent-%COMP%] {\n  color: #0066c0 !important;\n  border-color: #0066c0 !important;\n}\n\n.btn-edit[_ngcontent-%COMP%]:hover {\n  background: #e8f0fe !important;\n}\n\n.btn-delete[_ngcontent-%COMP%] {\n  color: #c0392b !important;\n  border-color: #c0392b !important;\n}\n\n.btn-delete[_ngcontent-%COMP%]:hover {\n  background: #fce4e4 !important;\n}\n\n.btn-edit[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .btn-delete[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n\n.product-skeleton[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  overflow: hidden;\n  padding: 0 0 16px;\n  border: 1px solid #ddd;\n}\n\n.skeleton-img[_ngcontent-%COMP%] {\n  height: 180px;\n  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n}\n\n.skeleton-line[_ngcontent-%COMP%] {\n  height: 14px;\n  margin: 12px 14px 0;\n  border-radius: 4px;\n  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n}\n\n.skeleton-line.w80[_ngcontent-%COMP%] { width: 80%; }\n.skeleton-line.w60[_ngcontent-%COMP%] { width: 60%; }\n.skeleton-line.w40[_ngcontent-%COMP%] { width: 40%; }\n\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% { background-position: 200% 0; }\n  100% { background-position: -200% 0; }\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px 24px;\n  background: white;\n  border-radius: 8px;\n  text-align: center;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n\n.empty-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: #f0f2f2;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.empty-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n  color: #aaa;\n}\n\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 20px;\n  color: #131921;\n}\n\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 24px;\n  color: #555;\n  font-size: 14px;\n}\n\n.paginator-wrap[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 8px 16px;\n  display: flex;\n  justify-content: center;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n\n  .paginator-wrap .mat-paginator {\n  background: transparent;\n}\n\n.amz-footer[_ngcontent-%COMP%] {\n  background: #131921;\n  margin-top: 40px;\n  padding: 20px;\n}\n\n.footer-inner[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.footer-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 12px;\n  margin: 0;\n}\n\n@media (max-width: 1024px) {\n  .amz-sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 768px) {\n  .amz-topbar-inner[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 10px;\n  }\n\n  .amz-nav-links[_ngcontent-%COMP%] {\n    order: 4;\n    width: 100%;\n  }\n\n  .amz-search-bar[_ngcontent-%COMP%] {\n    order: 3;\n    width: 100%;\n    max-width: 100%;\n  }\n\n  .amz-topbar-actions[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n    gap: 12px;\n  }\n\n  .amz-main[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n\n  .amz-stats[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .results-toolbar[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .sort-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n\n.shop-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 220px minmax(0, 1fr) 320px;\n  gap: 20px;\n  align-items: start;\n}\n\n.shop-topbar[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.32);\n}\n\n.cart-btn[_ngcontent-%COMP%] {\n  background: #ffcc4d !important;\n  color: #131921 !important;\n  font-weight: 700 !important;\n  border-radius: 8px !important;\n}\n\n.product-actions-shop[_ngcontent-%COMP%] {\n  min-height: 64px;\n}\n\n.btn-cart[_ngcontent-%COMP%] {\n  width: 100%;\n  background: linear-gradient(135deg, #ffcc4d, #f0a500) !important;\n  color: #131921 !important;\n  font-size: 12px !important;\n  font-weight: 700 !important;\n  border-radius: 8px !important;\n  height: 38px !important;\n}\n\n.btn-cart[_ngcontent-%COMP%]:disabled {\n  background: #d1d5db !important;\n  color: #6b7280 !important;\n}\n\n.cart-controls[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  width: 100%;\n}\n\n.qty-stepper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 40px 1fr 40px;\n  align-items: center;\n  gap: 6px;\n  background: #fff8e5;\n  border: 1px solid #f5d98d;\n  border-radius: 999px;\n  padding: 4px;\n}\n\n.qty-stepper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 800;\n  color: #7c4700;\n}\n\n.qty-stepper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: white !important;\n  color: #7c4700 !important;\n}\n\n.btn-remove-cart[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 999px !important;\n  color: #dc2626 !important;\n  border-color: rgba(239, 68, 68, 0.28) !important;\n  font-weight: 700 !important;\n}\n\n.cart-panel[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 18px;\n  padding: 18px;\n  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.08);\n  position: sticky;\n  top: 118px;\n}\n\n.cart-panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n\n.cart-kicker[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 11px;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: #64748b;\n  font-weight: 700;\n}\n\n.cart-panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  color: #0f172a;\n}\n\n.cart-count-pill[_ngcontent-%COMP%] {\n  min-width: 34px;\n  height: 34px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 999px;\n  background: linear-gradient(135deg, #2563eb, #1d4ed8);\n  color: white;\n  font-weight: 800;\n}\n\n.cart-empty[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: center;\n  text-align: center;\n  gap: 8px;\n  padding: 26px 12px;\n  color: #64748b;\n}\n\n.cart-empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 38px;\n  width: 38px;\n  height: 38px;\n  color: #cbd5e1;\n}\n\n.cart-items[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n\n.cart-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 12px 0;\n  border-bottom: 1px solid #e5e7eb;\n}\n\n.cart-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n\n.cart-item-name[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-weight: 700;\n  color: #111827;\n}\n\n.cart-item-meta[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #64748b;\n}\n\n.cart-summary[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  padding-top: 18px;\n  border-top: 1px solid #e5e7eb;\n  display: grid;\n  gap: 12px;\n}\n\n.cart-summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  color: #0f172a;\n}\n\n.cart-checkout-btn[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #16a34a, #059669) !important;\n  color: white !important;\n  font-weight: 700 !important;\n  border-radius: 12px !important;\n}\n\n.cart-clear-btn[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  font-weight: 700 !important;\n}\n\n@media (max-width: 1220px) {\n  .shop-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 220px minmax(0, 1fr);\n  }\n\n  .cart-panel[_ngcontent-%COMP%] {\n    grid-column: 1 / -1;\n    position: static;\n  }\n}\n\n@media (max-width: 1024px) {\n  .shop-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixZQUFZO0VBQ1osd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsT0FBTztFQUNQLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixtQkFB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QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFFBQVE7SUFDUixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxRQUFRO0lBQ1IsV0FBVztJQUNYLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSw0REFBNEQ7SUFDNUQsU0FBUztFQUNYOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InByb2R1Y3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjZWFlZGVkO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZm9udC1mYW1pbHk6ICdBbWF6b24gRW1iZXInLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuLmFtei10b3BiYXIge1xuICBiYWNrZ3JvdW5kOiAjMTMxOTIxO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLmFtei10b3BiYXItaW5uZXIge1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uYW16LWxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5hbXotbG9nbzpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG5cbi5hbXotbG9nby1pbWFnZSB7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmFtei1zZWFyY2gtYmFyIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjBhNTAwO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xufVxuXG4uc2VhcmNoLWljb24ge1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5zZWFyY2gtaW5wdXQge1xuICBmbGV4OiAxO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDEycHggMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzEzMTkyMTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5zZWFyY2gtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM4YThmOTg7XG59XG5cbi5zZWFyY2gtYnRuLWZha2Uge1xuICBiYWNrZ3JvdW5kOiAjZjBhNTAwO1xuICBwYWRkaW5nOiAwIDE0cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAwO1xufVxuXG4uc2VhcmNoLWJ0bi1mYWtlIG1hdC1pY29uIHtcbiAgY29sb3I6ICMxMzE5MjE7XG59XG5cbi5hbXotdG9wYmFyLWFjdGlvbnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5hbXotbmF2LWxpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmFtei1uYXYtYnRuIHtcbiAgbWluLWhlaWdodDogMzhweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjIpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uYW16LWJhY2stYnRuIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDZweCAxNHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xufVxuXG4uYW16LWJhY2stYnRuOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpICFpbXBvcnRhbnQ7XG59XG5cbi5hbXotYWRkLWJ0biB7XG4gIGJhY2tncm91bmQ6ICNmMGE1MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICMxMzE5MjEgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogOHB4IDE4cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDI0MCwgMTY1LCAwLCAwLjQpICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYW16LWFkZC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTY5NTAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSgyNDAsIDE2NSwgMCwgMC42KSAhaW1wb3J0YW50O1xufVxuXG4uYW16LXN1YmJhciB7XG4gIGJhY2tncm91bmQ6ICMyMzJmM2U7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzc0NzVhO1xufVxuXG4uYW16LXN1YmJhci1pbm5lciB7XG4gIG1heC13aWR0aDogMTQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxNnB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5hbXotYnJlYWRjcnVtYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5icmVhZGNydW1iLWxpbmsge1xuICBjb2xvcjogI2NjYztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnJlYWRjcnVtYi1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICNmMGE1MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uYnJlYWRjcnVtYi1zZXAge1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuXG4uYnJlYWRjcnVtYi1jdXJyZW50IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYW16LXN0YXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uc3RhdC1waWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnN0YXQtcGlsbCBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgY29sb3I6ICNmMGE1MDA7XG59XG5cbi5hbXotbWFpbiB7XG4gIG1heC13aWR0aDogMTQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmFtei1zaWRlYmFyIHtcbiAgd2lkdGg6IDI0MHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTZweDtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnNpZGViYXItc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbn1cblxuLnNpZGViYXItc2VjdGlvbjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5zaWRlYmFyLXNlY3Rpb24gaDQge1xuICBtYXJnaW46IDAgMCAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMTMxOTIxO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2YwYTUwMDtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbn1cblxuLnNpZGViYXItc2VjdGlvbiB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNpZGViYXItc2VjdGlvbiB1bCBsaSB7XG4gIHBhZGRpbmc6IDVweCAwIDVweCA0cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMwMDY2YzA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xufVxuXG4uc2lkZWJhci1zZWN0aW9uIHVsIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2YwZjJmMjtcbiAgY29sb3I6ICNjNDU1MDA7XG59XG5cbi5zaWRlYmFyLXNlY3Rpb24gdWwgbGkuYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNjNDU1MDA7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2YwYTUwMDtcbn1cblxuLnN0b2NrLWZpbHRlci1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5zaWRlYmFyLWZpbHRlci1idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDVkOWQ5O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMwZjExMTE7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG59XG5cbi5zaWRlYmFyLWZpbHRlci1idG46aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNmMGE1MDA7XG4gIGJhY2tncm91bmQ6ICNmZmY4ZTU7XG59XG5cbi5zaWRlYmFyLWZpbHRlci1idG4uYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjBhNTAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmMWNjO1xuICBjb2xvcjogIzhhNGIwMDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmNsZWFyLWZpbHRlcnMtYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG5cbi5jbGVhci1maWx0ZXJzLWVtcHR5IHtcbiAgbWF4LXdpZHRoOiAyNjBweDtcbn1cblxuLmZpbHRlcnMtaGludCB7XG4gIG1hcmdpbjogMTBweCAwIDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5hbXotY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLnJlc3VsdHMtdG9vbGJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBnYXA6IDEycHg7XG59XG5cbi5yZXN1bHRzLWNvdW50IHtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5yZXN1bHRzLXNvcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucmVzdWx0cy1zb3J0IG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuXG4uc29ydC1maWVsZCB7XG4gIHdpZHRoOiAyNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTEuMjVlbTtcbn1cblxuLmVycm9yLWJhbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNmZmYzY2Q7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMGE1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgY29sb3I6ICM4NTY0MDQ7XG59XG5cbi5lcnJvci1iYW5uZXIgbWF0LWljb24ge1xuICBjb2xvcjogI2YwYTUwMDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5lcnJvci1iYW5uZXIgcCB7XG4gIG1hcmdpbjogNHB4IDAgMDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ucHJvZHVjdHMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIyMHB4LCAxZnIpKTtcbiAgZ2FwOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucHJvZHVjdC1jYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnMgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn1cblxuLnByb2R1Y3QtY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICBib3JkZXItY29sb3I6ICNmMGE1MDA7XG59XG5cbi5wcm9kdWN0LWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMyMzJmM2U7XG4gIGNvbG9yOiAjZjBhNTAwO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICB6LWluZGV4OiAyO1xufVxuXG4ucHJvZHVjdC1pbWFnZS13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDE4MHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjVmNWY1IDAlLCAjZWJlYmViIDEwMCUpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByb2R1Y3QtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wcm9kdWN0LWltZy1wbGFjZWhvbGRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5wcm9kdWN0LWltZy1wbGFjZWhvbGRlciBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgY29sb3I6ICNhYWE7XG59XG5cbi5wcm9kdWN0LWltYWdlLWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTksIDI1LCAzMywgMC43Mik7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuLnByb2R1Y3Qtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTksIDI1LCAzMywgMC42NSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlO1xufVxuXG4ucHJvZHVjdC1jYXJkOmhvdmVyIC5wcm9kdWN0LW92ZXJsYXkge1xuICBvcGFjaXR5OiAxO1xufVxuXG4ub3ZlcmxheS1idG4ge1xuICB3aWR0aDogNDRweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktYnRuLmVkaXQtYnRuIHtcbiAgYmFja2dyb3VuZDogIzAwYThlMSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktYnRuLmRlbGV0ZS1idG4ge1xuICBiYWNrZ3JvdW5kOiAjZTUzOTM1ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ucHJvZHVjdC1pbmZvIHtcbiAgcGFkZGluZzogMTJweCAxNHB4O1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDZweDtcbn1cblxuLnByb2R1Y3QtbmFtZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzBmMTExMTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByb2R1Y3QtcmF0aW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcHg7XG59XG5cbi5wcm9kdWN0LXJhdGluZyBtYXQtaWNvbi5zdGFyLFxuLnByb2R1Y3QtcmF0aW5nIG1hdC1pY29uLnN0YXItaGFsZiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgY29sb3I6ICNmMGE1MDA7XG59XG5cbi5yYXRpbmctY291bnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMDA3MTg1O1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4ucHJvZHVjdC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNiMTI3MDQ7XG4gIG1hcmdpbjogMnB4IDA7XG59XG5cbi5wcm9kdWN0LWRlc2Mge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM1NTU7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5wcm9kdWN0LXN0b2NrIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4ucHJvZHVjdC1zdG9jayBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbn1cblxuLnN0b2NrLWluIHtcbiAgYmFja2dyb3VuZDogI2U3ZjVlNztcbiAgY29sb3I6ICMwMDc2MDA7XG59XG5cbi5zdG9jay1sb3cge1xuICBiYWNrZ3JvdW5kOiAjZmZmM2UwO1xuICBjb2xvcjogI2U2NTEwMDtcbn1cblxuLnN0b2NrLW91dCB7XG4gIGJhY2tncm91bmQ6ICNmY2U0ZTQ7XG4gIGNvbG9yOiAjYjcxYzFjO1xufVxuXG4uc3RvY2stdW5rbm93biB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGNvbG9yOiAjNzc3O1xufVxuXG4ucHJvZHVjdC1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMGYyZjI7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG59XG5cbi5idG4tZWRpdCxcbi5idG4tZGVsZXRlIHtcbiAgZmxleDogMTtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBnYXA6IDRweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDM2cHggIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tZWRpdCB7XG4gIGNvbG9yOiAjMDA2NmMwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzAwNjZjMCAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWVkaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZThmMGZlICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tZGVsZXRlIHtcbiAgY29sb3I6ICNjMDM5MmIgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjYzAzOTJiICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tZGVsZXRlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZjZTRlNCAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWVkaXQgbWF0LWljb24sXG4uYnRuLWRlbGV0ZSBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cblxuLnByb2R1Y3Qtc2tlbGV0b24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwIDAgMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn1cblxuLnNrZWxldG9uLWltZyB7XG4gIGhlaWdodDogMTgwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2YwZjBmMCAyNSUsICNlMGUwZTAgNTAlLCAjZjBmMGYwIDc1JSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xuICBhbmltYXRpb246IHNoaW1tZXIgMS41cyBpbmZpbml0ZTtcbn1cblxuLnNrZWxldG9uLWxpbmUge1xuICBoZWlnaHQ6IDE0cHg7XG4gIG1hcmdpbjogMTJweCAxNHB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZjBmMGYwIDI1JSwgI2UwZTBlMCA1MCUsICNmMGYwZjAgNzUlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XG4gIGFuaW1hdGlvbjogc2hpbW1lciAxLjVzIGluZmluaXRlO1xufVxuXG4uc2tlbGV0b24tbGluZS53ODAgeyB3aWR0aDogODAlOyB9XG4uc2tlbGV0b24tbGluZS53NjAgeyB3aWR0aDogNjAlOyB9XG4uc2tlbGV0b24tbGluZS53NDAgeyB3aWR0aDogNDAlOyB9XG5cbkBrZXlmcmFtZXMgc2hpbW1lciB7XG4gIDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSAwOyB9XG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwJSAwOyB9XG59XG5cbi5lbXB0eS1zdGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA2NHB4IDI0cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG59XG5cbi5lbXB0eS1pY29uIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZDogI2YwZjJmMjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmVtcHR5LWljb24gbWF0LWljb24ge1xuICBmb250LXNpemU6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjYWFhO1xufVxuXG4uZW1wdHktc3RhdGUgaDMge1xuICBtYXJnaW46IDAgMCA4cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMxMzE5MjE7XG59XG5cbi5lbXB0eS1zdGF0ZSBwIHtcbiAgbWFyZ2luOiAwIDAgMjRweDtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnBhZ2luYXRvci13cmFwIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cblxuOjpuZy1kZWVwIC5wYWdpbmF0b3Itd3JhcCAubWF0LXBhZ2luYXRvciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uYW16LWZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMxMzE5MjE7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5mb290ZXItaW5uZXIge1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvb3Rlci1pbm5lciBwIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmFtei1zaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYW16LXRvcGJhci1pbm5lciB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMTBweDtcbiAgfVxuXG4gIC5hbXotbmF2LWxpbmtzIHtcbiAgICBvcmRlcjogNDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5hbXotc2VhcmNoLWJhciB7XG4gICAgb3JkZXI6IDM7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmFtei10b3BiYXItYWN0aW9ucyB7XG4gICAgZ2FwOiA4cHg7XG4gIH1cblxuICAucHJvZHVjdHMtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTYwcHgsIDFmcikpO1xuICAgIGdhcDogMTJweDtcbiAgfVxuXG4gIC5hbXotbWFpbiB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgfVxuXG4gIC5hbXotc3RhdHMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAucmVzdWx0cy10b29sYmFyIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnNvcnQtZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sWUFBWTtFQUNaLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxTQUFTO0VBQ1QsYUFBYTtFQUNiLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7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RSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxRQUFRO0lBQ1IsV0FBVztFQUNiOztFQUVBO0lBQ0UsUUFBUTtJQUNSLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UsNERBQTREO0lBQzVELFNBQVM7RUFDWDs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFHQSxvNDJCQUFvNDJCIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogI2VhZWRlZDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGZvbnQtZmFtaWx5OiAnQW1hem9uIEVtYmVyJywgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5hbXotdG9wYmFyIHtcbiAgYmFja2dyb3VuZDogIzEzMTkyMTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDA7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5hbXotdG9wYmFyLWlubmVyIHtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbn1cblxuLmFtei1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uYW16LWxvZ286aG92ZXIge1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xufVxuXG4uYW16LWxvZ28taW1hZ2Uge1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogMzRweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5hbXotc2VhcmNoLWJhciB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAycHggc29saWQgI2YwYTUwMDtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbn1cblxuLnNlYXJjaC1pY29uIHtcbiAgcGFkZGluZzogMCAxMnB4O1xuICBjb2xvcjogIzU1NTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uc2VhcmNoLWlucHV0IHtcbiAgZmxleDogMTtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxMnB4IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMxMzE5MjE7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uc2VhcmNoLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOGE4Zjk4O1xufVxuXG4uc2VhcmNoLWJ0bi1mYWtlIHtcbiAgYmFja2dyb3VuZDogI2YwYTUwMDtcbiAgcGFkZGluZzogMCAxNHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMDtcbn1cblxuLnNlYXJjaC1idG4tZmFrZSBtYXQtaWNvbiB7XG4gIGNvbG9yOiAjMTMxOTIxO1xufVxuXG4uYW16LXRvcGJhci1hY3Rpb25zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uYW16LW5hdi1saW5rcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5hbXotbmF2LWJ0biB7XG4gIG1pbi1oZWlnaHQ6IDM4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIyKSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmFtei1iYWNrLWJ0biB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA2cHggMTRweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbn1cblxuLmFtei1iYWNrLWJ0bjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSAhaW1wb3J0YW50O1xufVxuXG4uYW16LWFkZC1idG4ge1xuICBiYWNrZ3JvdW5kOiAjZjBhNTAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMTMxOTIxICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDhweCAxOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgyNDAsIDE2NSwgMCwgMC40KSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmFtei1hZGQtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2U2OTUwMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDRweCAxNHB4IHJnYmEoMjQwLCAxNjUsIDAsIDAuNikgIWltcG9ydGFudDtcbn1cblxuLmFtei1zdWJiYXIge1xuICBiYWNrZ3JvdW5kOiAjMjMyZjNlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzM3NDc1YTtcbn1cblxuLmFtei1zdWJiYXItaW5uZXIge1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTZweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uYW16LWJyZWFkY3J1bWIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uYnJlYWRjcnVtYi1saW5rIHtcbiAgY29sb3I6ICNjY2M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJyZWFkY3J1bWItbGluazpob3ZlciB7XG4gIGNvbG9yOiAjZjBhNTAwO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmJyZWFkY3J1bWItc2VwIHtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cblxuLmJyZWFkY3J1bWItY3VycmVudCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmFtei1zdGF0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbn1cblxuLnN0YXQtcGlsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5zdGF0LXBpbGwgbWF0LWljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGNvbG9yOiAjZjBhNTAwO1xufVxuXG4uYW16LW1haW4ge1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjBweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5hbXotc2lkZWJhciB7XG4gIHdpZHRoOiAyNDBweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5zaWRlYmFyLXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG59XG5cbi5zaWRlYmFyLXNlY3Rpb246bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uc2lkZWJhci1zZWN0aW9uIGg0IHtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzEzMTkyMTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmMGE1MDA7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG59XG5cbi5zaWRlYmFyLXNlY3Rpb24gdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zaWRlYmFyLXNlY3Rpb24gdWwgbGkge1xuICBwYWRkaW5nOiA1cHggMCA1cHggNHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjMDA2NmMwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cztcbn1cblxuLnNpZGViYXItc2VjdGlvbiB1bCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmMGYyZjI7XG4gIGNvbG9yOiAjYzQ1NTAwO1xufVxuXG4uc2lkZWJhci1zZWN0aW9uIHVsIGxpLmFjdGl2ZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjYzQ1NTAwO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNmMGE1MDA7XG59XG5cbi5zdG9jay1maWx0ZXItbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xufVxuXG4uc2lkZWJhci1maWx0ZXItYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q1ZDlkOTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMGYxMTExO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xufVxuXG4uc2lkZWJhci1maWx0ZXItYnRuOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjBhNTAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmOGU1O1xufVxuXG4uc2lkZWJhci1maWx0ZXItYnRuLmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogI2YwYTUwMDtcbiAgYmFja2dyb3VuZDogI2ZmZjFjYztcbiAgY29sb3I6ICM4YTRiMDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5jbGVhci1maWx0ZXJzLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xufVxuXG4uY2xlYXItZmlsdGVycy1lbXB0eSB7XG4gIG1heC13aWR0aDogMjYwcHg7XG59XG5cbi5maWx0ZXJzLWhpbnQge1xuICBtYXJnaW46IDEwcHggMCAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNTU1O1xufVxuXG4uYW16LWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5yZXN1bHRzLXRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZ2FwOiAxMnB4O1xufVxuXG4ucmVzdWx0cy1jb3VudCB7XG4gIGNvbG9yOiAjNTU1O1xufVxuXG4ucmVzdWx0cy1zb3J0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnJlc3VsdHMtc29ydCBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cblxuLnNvcnQtZmllbGQge1xuICB3aWR0aDogMjQwcHg7XG4gIG1hcmdpbi1ib3R0b206IC0xLjI1ZW07XG59XG5cbi5lcnJvci1iYW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmM2NkO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjBhNTAwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGNvbG9yOiAjODU2NDA0O1xufVxuXG4uZXJyb3ItYmFubmVyIG1hdC1pY29uIHtcbiAgY29sb3I6ICNmMGE1MDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uZXJyb3ItYmFubmVyIHAge1xuICBtYXJnaW46IDRweCAwIDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnByb2R1Y3RzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMjBweCwgMWZyKSk7XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnByb2R1Y3QtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2U7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5wcm9kdWN0LWNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgYm9yZGVyLWNvbG9yOiAjZjBhNTAwO1xufVxuXG4ucHJvZHVjdC1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjMyZjNlO1xuICBjb2xvcjogI2YwYTUwMDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgei1pbmRleDogMjtcbn1cblxuLnByb2R1Y3QtaW1hZ2Utd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxODBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y1ZjVmNSAwJSwgI2ViZWJlYiAxMDAlKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wcm9kdWN0LWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucHJvZHVjdC1pbWctcGxhY2Vob2xkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ucHJvZHVjdC1pbWctcGxhY2Vob2xkZXIgbWF0LWljb24ge1xuICBmb250LXNpemU6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjYWFhO1xufVxuXG4ucHJvZHVjdC1pbWFnZS1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE5LCAyNSwgMzMsIDAuNzIpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbi5wcm9kdWN0LW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE5LCAyNSwgMzMsIDAuNjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZTtcbn1cblxuLnByb2R1Y3QtY2FyZDpob3ZlciAucHJvZHVjdC1vdmVybGF5IHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLm92ZXJsYXktYnRuIHtcbiAgd2lkdGg6IDQ0cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWJ0bi5lZGl0LWJ0biB7XG4gIGJhY2tncm91bmQ6ICMwMGE4ZTEgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWJ0bi5kZWxldGUtYnRuIHtcbiAgYmFja2dyb3VuZDogI2U1MzkzNSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLnByb2R1Y3QtaW5mbyB7XG4gIHBhZGRpbmc6IDEycHggMTRweDtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA2cHg7XG59XG5cbi5wcm9kdWN0LW5hbWUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwZjExMTE7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wcm9kdWN0LXJhdGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXB4O1xufVxuXG4ucHJvZHVjdC1yYXRpbmcgbWF0LWljb24uc3Rhcixcbi5wcm9kdWN0LXJhdGluZyBtYXQtaWNvbi5zdGFyLWhhbGYge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGNvbG9yOiAjZjBhNTAwO1xufVxuXG4ucmF0aW5nLWNvdW50IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzAwNzE4NTtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLnByb2R1Y3QtcHJpY2Uge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjYjEyNzA0O1xuICBtYXJnaW46IDJweCAwO1xufVxuXG4ucHJvZHVjdC1kZXNjIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNTU1O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4ucHJvZHVjdC1zdG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLnByb2R1Y3Qtc3RvY2sgbWF0LWljb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG59XG5cbi5zdG9jay1pbiB7XG4gIGJhY2tncm91bmQ6ICNlN2Y1ZTc7XG4gIGNvbG9yOiAjMDA3NjAwO1xufVxuXG4uc3RvY2stbG93IHtcbiAgYmFja2dyb3VuZDogI2ZmZjNlMDtcbiAgY29sb3I6ICNlNjUxMDA7XG59XG5cbi5zdG9jay1vdXQge1xuICBiYWNrZ3JvdW5kOiAjZmNlNGU0O1xuICBjb2xvcjogI2I3MWMxYztcbn1cblxuLnN0b2NrLXVua25vd24ge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBjb2xvcjogIzc3Nztcbn1cblxuLnByb2R1Y3QtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjBmMmYyO1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xufVxuXG4uYnRuLWVkaXQsXG4uYnRuLWRlbGV0ZSB7XG4gIGZsZXg6IDE7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZ2FwOiA0cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzNnB4ICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWVkaXQge1xuICBjb2xvcjogIzAwNjZjMCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMwMDY2YzAgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1lZGl0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2U4ZjBmZSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWRlbGV0ZSB7XG4gIGNvbG9yOiAjYzAzOTJiICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2MwMzkyYiAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWRlbGV0ZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmY2U0ZTQgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1lZGl0IG1hdC1pY29uLFxuLmJ0bi1kZWxldGUgbWF0LWljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG5cbi5wcm9kdWN0LXNrZWxldG9uIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMCAwIDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5za2VsZXRvbi1pbWcge1xuICBoZWlnaHQ6IDE4MHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmMGYwZjAgMjUlLCAjZTBlMGUwIDUwJSwgI2YwZjBmMCA3NSUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcbiAgYW5pbWF0aW9uOiBzaGltbWVyIDEuNXMgaW5maW5pdGU7XG59XG5cbi5za2VsZXRvbi1saW5lIHtcbiAgaGVpZ2h0OiAxNHB4O1xuICBtYXJnaW46IDEycHggMTRweCAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2YwZjBmMCAyNSUsICNlMGUwZTAgNTAlLCAjZjBmMGYwIDc1JSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xuICBhbmltYXRpb246IHNoaW1tZXIgMS41cyBpbmZpbml0ZTtcbn1cblxuLnNrZWxldG9uLWxpbmUudzgwIHsgd2lkdGg6IDgwJTsgfVxuLnNrZWxldG9uLWxpbmUudzYwIHsgd2lkdGg6IDYwJTsgfVxuLnNrZWxldG9uLWxpbmUudzQwIHsgd2lkdGg6IDQwJTsgfVxuXG5Aa2V5ZnJhbWVzIHNoaW1tZXIge1xuICAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDIwMCUgMDsgfVxuICAxMDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwMCUgMDsgfVxufVxuXG4uZW1wdHktc3RhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNjRweCAyNHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuXG4uZW1wdHktaWNvbiB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQ6ICNmMGYyZjI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5lbXB0eS1pY29uIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogI2FhYTtcbn1cblxuLmVtcHR5LXN0YXRlIGgzIHtcbiAgbWFyZ2luOiAwIDAgOHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMTMxOTIxO1xufVxuXG4uZW1wdHktc3RhdGUgcCB7XG4gIG1hcmdpbjogMCAwIDI0cHg7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5wYWdpbmF0b3Itd3JhcCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG59XG5cbjo6bmctZGVlcCAucGFnaW5hdG9yLXdyYXAgLm1hdC1wYWdpbmF0b3Ige1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmFtei1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTMxOTIxO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZm9vdGVyLWlubmVyIHtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb290ZXItaW5uZXIgcCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5hbXotc2lkZWJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmFtei10b3BiYXItaW5uZXIge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDEwcHg7XG4gIH1cblxuICAuYW16LW5hdi1saW5rcyB7XG4gICAgb3JkZXI6IDQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuYW16LXNlYXJjaC1iYXIge1xuICAgIG9yZGVyOiAzO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5hbXotdG9wYmFyLWFjdGlvbnMge1xuICAgIGdhcDogOHB4O1xuICB9XG5cbiAgLnByb2R1Y3RzLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE2MHB4LCAxZnIpKTtcbiAgICBnYXA6IDEycHg7XG4gIH1cblxuICAuYW16LW1haW4ge1xuICAgIHBhZGRpbmc6IDEycHg7XG4gIH1cblxuICAuYW16LXN0YXRzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnJlc3VsdHMtdG9vbGJhciB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5zb3J0LWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLXNob3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQ0FBa0M7O0FBRWxDO0VBQ0UsYUFBYTtFQUNiLGlEQUFpRDtFQUNqRCxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdFQUFnRTtFQUNoRSx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsK0JBQStCO0VBQy9CLHlCQUF5QjtFQUN6QixnREFBZ0Q7RUFDaEQsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsOENBQThDO0VBQzlDLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixxREFBcUQ7RUFDckQsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsZUFBZTtFQUNmLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnRUFBZ0U7RUFDaEUsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0U7SUFDRSwyQ0FBMkM7RUFDN0M7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGIiwiZmlsZSI6InByb2R1Y3RzLXNob3AuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vcHJvZHVjdHMuY29tcG9uZW50LmNzcyc7XG5cbi5zaG9wLWxheW91dCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjIwcHggbWlubWF4KDAsIDFmcikgMzIwcHg7XG4gIGdhcDogMjBweDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG4uc2hvcC10b3BiYXIge1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMyKTtcbn1cblxuLmNhcnQtYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZmY2M0ZCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzEzMTkyMSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xufVxuXG4ucHJvZHVjdC1hY3Rpb25zLXNob3Age1xuICBtaW4taGVpZ2h0OiA2NHB4O1xufVxuXG4uYnRuLWNhcnQge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmY2M0ZCwgI2YwYTUwMCkgIWltcG9ydGFudDtcbiAgY29sb3I6ICMxMzE5MjEgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzhweCAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWNhcnQ6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjZDFkNWRiICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNmI3MjgwICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJ0LWNvbnRyb2xzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnF0eS1zdGVwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IDFmciA0MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgYmFja2dyb3VuZDogI2ZmZjhlNTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y1ZDk4ZDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIHBhZGRpbmc6IDRweDtcbn1cblxuLnF0eS1zdGVwcGVyIHNwYW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjN2M0NzAwO1xufVxuXG4ucXR5LXN0ZXBwZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgY29sb3I6ICM3YzQ3MDAgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1yZW1vdmUtY2FydCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA5OTlweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2RjMjYyNiAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHJnYmEoMjM5LCA2OCwgNjgsIDAuMjgpICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbn1cblxuLmNhcnQtcGFuZWwge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgcGFkZGluZzogMThweDtcbiAgYm94LXNoYWRvdzogMCAxNHB4IDMwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAxMThweDtcbn1cblxuLmNhcnQtcGFuZWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5jYXJ0LWtpY2tlciB7XG4gIG1hcmdpbjogMCAwIDRweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xNmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzY0NzQ4YjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmNhcnQtcGFuZWwtaGVhZGVyIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjMGYxNzJhO1xufVxuXG4uY2FydC1jb3VudC1waWxsIHtcbiAgbWluLXdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyNTYzZWIsICMxZDRlZDgpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5jYXJ0LWVtcHR5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAyNnB4IDEycHg7XG4gIGNvbG9yOiAjNjQ3NDhiO1xufVxuXG4uY2FydC1lbXB0eSBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgd2lkdGg6IDM4cHg7XG4gIGhlaWdodDogMzhweDtcbiAgY29sb3I6ICNjYmQ1ZTE7XG59XG5cbi5jYXJ0LWl0ZW1zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uY2FydC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDEycHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU3ZWI7XG59XG5cbi5jYXJ0LWl0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG5cbi5jYXJ0LWl0ZW0tbmFtZSB7XG4gIG1hcmdpbjogMCAwIDRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMxMTE4Mjc7XG59XG5cbi5jYXJ0LWl0ZW0tbWV0YSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzY0NzQ4Yjtcbn1cblxuLmNhcnQtc3VtbWFyeSB7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIHBhZGRpbmctdG9wOiAxOHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U1ZTdlYjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uY2FydC1zdW1tYXJ5LXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29sb3I6ICMwZjE3MmE7XG59XG5cbi5jYXJ0LWNoZWNrb3V0LWJ0biB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxNmEzNGEsICMwNTk2NjkpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEycHggIWltcG9ydGFudDtcbn1cblxuLmNhcnQtY2xlYXItYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjIwcHgpIHtcbiAgLnNob3AtbGF5b3V0IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyMHB4IG1pbm1heCgwLCAxZnIpO1xuICB9XG5cbiAgLmNhcnQtcGFuZWwge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5zaG9wLWxheW91dCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9wcm9kdWN0cy9wcm9kdWN0cy1zaG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFhO0VBQ2IsaURBQWlEO0VBQ2pELFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0VBQWdFO0VBQ2hFLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCwrQkFBK0I7RUFDL0IseUJBQXlCO0VBQ3pCLGdEQUFnRDtFQUNoRCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw4Q0FBOEM7RUFDOUMsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHFEQUFxRDtFQUNyRCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdFQUFnRTtFQUNoRSx1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRTtJQUNFLDJDQUEyQztFQUM3Qzs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUEsZ3VPQUFndU8iLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MnO1xuXG4uc2hvcC1sYXlvdXQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyMHB4IG1pbm1heCgwLCAxZnIpIDMyMHB4O1xuICBnYXA6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxuLnNob3AtdG9wYmFyIHtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zMik7XG59XG5cbi5jYXJ0LWJ0biB7XG4gIGJhY2tncm91bmQ6ICNmZmNjNGQgIWltcG9ydGFudDtcbiAgY29sb3I6ICMxMzE5MjEgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbn1cblxuLnByb2R1Y3QtYWN0aW9ucy1zaG9wIHtcbiAgbWluLWhlaWdodDogNjRweDtcbn1cblxuLmJ0bi1jYXJ0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmNjNGQsICNmMGE1MDApICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMTMxOTIxICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDM4cHggIWltcG9ydGFudDtcbn1cblxuLmJ0bi1jYXJ0OmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogI2QxZDVkYiAhaW1wb3J0YW50O1xuICBjb2xvcjogIzZiNzI4MCAhaW1wb3J0YW50O1xufVxuXG4uY2FydC1jb250cm9scyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5xdHktc3RlcHBlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCAxZnIgNDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY4ZTU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNWQ5OGQ7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbi5xdHktc3RlcHBlciBzcGFuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogIzdjNDcwMDtcbn1cblxuLnF0eS1zdGVwcGVyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjN2M0NzAwICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tcmVtb3ZlLWNhcnQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNkYzI2MjYgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjI4KSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJ0LXBhbmVsIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIGJveC1zaGFkb3c6IDAgMTRweCAzMHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMTE4cHg7XG59XG5cbi5jYXJ0LXBhbmVsLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uY2FydC1raWNrZXIge1xuICBtYXJnaW46IDAgMCA0cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTZlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICM2NDc0OGI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5jYXJ0LXBhbmVsLWhlYWRlciBoMyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzBmMTcyYTtcbn1cblxuLmNhcnQtY291bnQtcGlsbCB7XG4gIG1pbi13aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjU2M2ViLCAjMWQ0ZWQ4KTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uY2FydC1lbXB0eSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMjZweCAxMnB4O1xuICBjb2xvcjogIzY0NzQ4Yjtcbn1cblxuLmNhcnQtZW1wdHkgbWF0LWljb24ge1xuICBmb250LXNpemU6IDM4cHg7XG4gIHdpZHRoOiAzOHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIGNvbG9yOiAjY2JkNWUxO1xufVxuXG4uY2FydC1pdGVtcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTJweDtcbn1cblxuLmNhcnQtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxMnB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlN2ViO1xufVxuXG4uY2FydC1pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuXG4uY2FydC1pdGVtLW5hbWUge1xuICBtYXJnaW46IDAgMCA0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMTExODI3O1xufVxuXG4uY2FydC1pdGVtLW1ldGEge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2NDc0OGI7XG59XG5cbi5jYXJ0LXN1bW1hcnkge1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBwYWRkaW5nLXRvcDogMThweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU3ZWI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTJweDtcbn1cblxuLmNhcnQtc3VtbWFyeS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbG9yOiAjMGYxNzJhO1xufVxuXG4uY2FydC1jaGVja291dC1idG4ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTZhMzRhLCAjMDU5NjY5KSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJ0LWNsZWFyLWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gIC5zaG9wLWxheW91dCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMjBweCBtaW5tYXgoMCwgMWZyKTtcbiAgfVxuXG4gIC5jYXJ0LXBhbmVsIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuc2hvcC1sYXlvdXQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 1089:
/*!********************************************************!*\
  !*** ./src/app/modules/products/products.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsComponent": () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var _components_product_form_dialog_product_form_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/product-form-dialog/product-form-dialog.component */ 9534);
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/confirm-dialog/confirm-dialog.component */ 9077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.service */ 219);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);


















function ProductsComponent_li_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductsComponent_li_62_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const category_r11 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.categoryFilter.setValue(category_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r11 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx_r0.categoryFilter.value === category_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", category_r11, " ");
  }
}
function ProductsComponent_button_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductsComponent_button_67_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const option_r14 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.stockFilter.setValue(option_r14.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r14 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx_r1.stockFilter.value === option_r14.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r14.label, " ");
  }
}
function ProductsComponent_p_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", ctx_r2.activeFiltersCount, " filtro", ctx_r2.activeFiltersCount !== 1 ? "s" : "", " activo", ctx_r2.activeFiltersCount !== 1 ? "s" : "", " ");
  }
}
function ProductsComponent_span_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r3.totalResults, " resultado", ctx_r3.totalResults !== 1 ? "s" : "", "");
  }
}
function ProductsComponent_span_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Cargando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProductsComponent_mat_option_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r17.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r17.label, " ");
  }
}
function ProductsComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "error_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Ocurri\u00F3 un error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6.errorMessage);
  }
}
function ProductsComponent_div_90_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 53)(2, "div", 54)(3, "div", 55)(4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return [1, 2, 3, 4, 5, 6];
};
function ProductsComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProductsComponent_div_90_div_1_Template, 5, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
  }
}
function ProductsComponent_div_91_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r21.category, " ");
  }
}
function ProductsComponent_div_91_div_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 77);
  }
  if (rf & 2) {
    const imageUrl_r28 = ctx.ngIf;
    const product_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", imageUrl_r28, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", product_r21.name);
  }
}
function ProductsComponent_div_91_div_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 78)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "image_not_supported");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ProductsComponent_div_91_div_1_p_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 2, product_r21.description, 0, 80), "", product_r21.description.length > 80 ? "..." : "", " ");
  }
}
function ProductsComponent_div_91_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProductsComponent_div_91_div_1_div_1_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ProductsComponent_div_91_div_1_img_3_Template, 1, 2, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ProductsComponent_div_91_div_1_ng_template_4_Template, 3, 0, "ng-template", null, 62, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Imagen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 64)(9, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductsComponent_div_91_div_1_Template_button_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);
      const product_r21 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r31.editProduct(product_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductsComponent_div_91_div_1_Template_button_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);
      const product_r21 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r33.deleteProduct(product_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 67)(16, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 69)(19, "mat-icon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-icon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-icon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-icon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-icon", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "star_half");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "(42)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, ProductsComponent_div_91_div_1_p_33_Template, 3, 6, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 75)(35, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r21 = ctx.$implicit;
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", product_r21.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r20.getProductImageUrl(product_r21))("ngIfElse", _r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r21.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r20.formatPrice(product_r21.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", product_r21.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("product-stock stock-" + ctx_r20.getStockStatus(product_r21.stock));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r20.getStockStatus(product_r21.stock) === "out" ? "remove_shopping_cart" : "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r20.getStockLabel(product_r21.stock), " ");
  }
}
function ProductsComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProductsComponent_div_91_div_1_Template, 38, 10, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r8.products);
  }
}
function ProductsComponent_div_92_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductsComponent_div_92_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r36.clearFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "filter_alt_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Limpiar filtros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProductsComponent_div_92_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductsComponent_div_92_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r38.openCreateDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Agregar primer producto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProductsComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 80)(1, "div", 81)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "inventory_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ProductsComponent_div_92_button_8_Template, 4, 0, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ProductsComponent_div_92_button_9_Template, 4, 0, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r9.activeFiltersCount > 0 ? "No hay resultados para los filtros seleccionados" : "No hay productos disponibles");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r9.activeFiltersCount > 0 ? "Prob\u00E1 limpiando filtros o usando una b\u00FAsqueda m\u00E1s amplia." : "El cat\u00E1logo est\u00E1 vac\u00EDo. Agreg\u00E1 el primer producto.", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.activeFiltersCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.activeFiltersCount === 0);
  }
}
const _c1 = function () {
  return [12, 24, 48];
};
function ProductsComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 85)(1, "mat-paginator", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("page", function ProductsComponent_div_93_Template_mat_paginator_page_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r40.onPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("length", ctx_r10.totalResults)("pageIndex", ctx_r10.currentPage)("pageSize", ctx_r10.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c1));
  }
}
class ProductsComponent {
  constructor(productService, dialog, snackBar, router) {
    this.productService = productService;
    this.dialog = dialog;
    this.snackBar = snackBar;
    this.router = router;
    this.products = [];
    this.isLoading = false;
    this.errorMessage = '';
    this.totalResults = 0;
    this.pageSize = 12;
    this.currentPage = 0;
    this.categories = ['Electrónica', 'Ropa', 'Alimentos', 'Hogar', 'Deportes', 'Libros', 'Juguetes', 'Salud', 'Automotriz', 'Otros'];
    this.sortOptions = [{
      value: 'createdAt:desc',
      label: 'Más recientes'
    }, {
      value: 'name:asc',
      label: 'Nombre (A-Z)'
    }, {
      value: 'name:desc',
      label: 'Nombre (Z-A)'
    }, {
      value: 'price:asc',
      label: 'Precio: menor a mayor'
    }, {
      value: 'price:desc',
      label: 'Precio: mayor a menor'
    }, {
      value: 'stock:desc',
      label: 'Mayor stock'
    }];
    this.stockOptions = [{
      value: 'all',
      label: 'Todos'
    }, {
      value: 'in',
      label: 'En stock'
    }, {
      value: 'low',
      label: 'Stock bajo'
    }, {
      value: 'out',
      label: 'Sin stock'
    }];
    this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', {
      nonNullable: true
    });
    this.categoryFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('all', {
      nonNullable: true
    });
    this.stockFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('all', {
      nonNullable: true
    });
    this.sortControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('createdAt:desc', {
      nonNullable: true
    });
  }
  ngOnInit() {
    this.setupFilters();
    this.loadProducts();
  }
  setupFilters() {
    this.searchControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)()).subscribe(() => {
      this.currentPage = 0;
      this.loadProducts();
    });
    this.categoryFilter.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)()).subscribe(() => {
      this.currentPage = 0;
      this.loadProducts();
    });
    this.stockFilter.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)()).subscribe(() => {
      this.currentPage = 0;
      this.loadProducts();
    });
    this.sortControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)()).subscribe(() => {
      this.currentPage = 0;
      this.loadProducts();
    });
  }
  loadProducts() {
    this.isLoading = true;
    this.errorMessage = '';
    this.productService.getProducts({
      page: this.currentPage + 1,
      limit: this.pageSize,
      sortBy: this.sortControl.value,
      name: this.searchControl.value,
      category: this.categoryFilter.value !== 'all' ? this.categoryFilter.value : undefined,
      stockStatus: this.stockFilter.value
    }).subscribe({
      next: response => {
        const filteredResults = this.applyClientSideFallbackFilters(response.results);
        this.products = filteredResults;
        this.totalResults = this.shouldUseFilteredCount() ? filteredResults.length : response.totalResults;
        this.isLoading = false;
      },
      error: err => {
        console.error('Error cargando productos:', err);
        this.errorMessage = 'No se pudieron cargar los productos. Verificá que el servidor esté activo.';
        this.isLoading = false;
      }
    });
  }
  applyClientSideFallbackFilters(products) {
    const searchTerm = this.searchControl.value.trim().toLowerCase();
    const selectedCategory = this.categoryFilter.value;
    const selectedStock = this.stockFilter.value;
    return products.filter(product => {
      const matchesSearch = !searchTerm || [product.name, product.description, product.category].filter(Boolean).some(value => String(value).toLowerCase().includes(searchTerm));
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesStock = selectedStock === 'all' || this.getStockStatus(product.stock) === selectedStock;
      return matchesSearch && matchesCategory && matchesStock;
    });
  }
  shouldUseFilteredCount() {
    return !!this.searchControl.value.trim() || this.categoryFilter.value !== 'all' || this.stockFilter.value !== 'all';
  }
  onPageChange(event) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadProducts();
  }
  clearFilters() {
    this.searchControl.setValue('', {
      emitEvent: false
    });
    this.categoryFilter.setValue('all', {
      emitEvent: false
    });
    this.stockFilter.setValue('all', {
      emitEvent: false
    });
    this.sortControl.setValue('createdAt:desc', {
      emitEvent: false
    });
    this.currentPage = 0;
    this.loadProducts();
    this.snackBar.open('Filtros limpiados', 'Cerrar', {
      duration: 2000
    });
  }
  openCreateDialog() {
    const ref = this.dialog.open(_components_product_form_dialog_product_form_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ProductFormDialogComponent, {
      width: '520px',
      data: {
        mode: 'create'
      }
    });
    ref.afterClosed().subscribe(created => {
      if (created) {
        this.snackBar.open('Producto creado correctamente', 'Cerrar', {
          duration: 3000
        });
        this.loadProducts();
      }
    });
  }
  editProduct(product) {
    const ref = this.dialog.open(_components_product_form_dialog_product_form_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ProductFormDialogComponent, {
      width: '520px',
      data: {
        mode: 'edit',
        product
      }
    });
    ref.afterClosed().subscribe(updated => {
      if (updated) {
        this.snackBar.open('Producto actualizado correctamente', 'Cerrar', {
          duration: 3000
        });
        this.loadProducts();
      }
    });
  }
  deleteProduct(product) {
    const ref = this.dialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogComponent, {
      data: {
        title: 'Eliminar Producto',
        message: `¿Estás seguro que deseás eliminar "${product.name}"? Esta acción no se puede deshacer.`,
        confirmText: 'Eliminar',
        cancelText: 'Cancelar'
      }
    });
    ref.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.productService.deleteProduct(product.id).subscribe({
          next: () => {
            this.snackBar.open('Producto eliminado', 'Cerrar', {
              duration: 3000
            });
            if (this.products.length === 1 && this.currentPage > 0) {
              this.currentPage -= 1;
            }
            this.loadProducts();
          },
          error: err => {
            this.snackBar.open(err.error?.message || 'Error al eliminar el producto', 'Cerrar', {
              duration: 3000
            });
          }
        });
      }
    });
  }
  goBack() {
    this.router.navigate(['/principal']);
  }
  getStockStatus(stock) {
    if (stock === undefined || stock === null) return 'unknown';
    if (stock === 0) return 'out';
    if (stock < 10) return 'low';
    return 'in';
  }
  getStockLabel(stock) {
    if (stock === undefined || stock === null) return 'Sin info';
    if (stock === 0) return 'Sin stock';
    if (stock < 10) return `Solo ${stock} disponibles`;
    return `${stock} en stock`;
  }
  formatPrice(price) {
    return price?.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2
    }) ?? '-';
  }
  getProductImageUrl(product) {
    return this.productService.getImageUrl(product.image);
  }
  get activeFiltersCount() {
    let count = 0;
    if (this.searchControl.value.trim()) {
      count += 1;
    }
    if (this.categoryFilter.value !== 'all') {
      count += 1;
    }
    if (this.stockFilter.value !== 'all') {
      count += 1;
    }
    if (this.sortControl.value !== 'createdAt:desc') {
      count += 1;
    }
    return count;
  }
  static {
    this.ɵfac = function ProductsComponent_Factory(t) {
      return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      decls: 98,
      vars: 21,
      consts: [[1, "amz-topbar"], [1, "amz-topbar-inner"], [1, "amz-logo", 3, "click"], ["src", "https://media.licdn.com/dms/image/v2/D4D0BAQGibhoMeCL-mg/company-logo_200_200/company-logo_200_200/0/1667320508791/e_sueldos_logo?e=2147483647&v=beta&t=6BpHD4ZVbBNymqB5aEkJNEXyJ-0qGr2At_F6mEePRAw", "alt", "Logo eSueldos", 1, "amz-logo-image"], [1, "amz-search-bar"], [1, "search-icon"], ["type", "text", "placeholder", "Buscar por nombre, descripci\u00F3n o categor\u00EDa...", 1, "search-input", 3, "formControl"], ["type", "button", 1, "search-btn-fake", 3, "disabled"], [1, "amz-nav-links"], ["mat-stroked-button", "", "routerLink", "/principal", 1, "amz-nav-btn"], ["mat-stroked-button", "", "routerLink", "/users", 1, "amz-nav-btn"], ["mat-stroked-button", "", "routerLink", "/profile", 1, "amz-nav-btn"], [1, "amz-topbar-actions"], ["mat-button", "", 1, "amz-back-btn", 3, "click"], ["mat-flat-button", "", 1, "amz-add-btn", 3, "click"], [1, "amz-subbar"], [1, "amz-subbar-inner"], [1, "amz-breadcrumb"], [1, "breadcrumb-link", 3, "click"], [1, "breadcrumb-sep"], [1, "breadcrumb-current"], [1, "amz-stats"], [1, "stat-pill"], [1, "amz-main"], [1, "amz-sidebar"], [1, "sidebar-section"], [3, "click"], [3, "active", "click", 4, "ngFor", "ngForOf"], [1, "stock-filter-list"], ["type", "button", "class", "sidebar-filter-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["mat-stroked-button", "", 1, "clear-filters-btn", 3, "disabled", "click"], ["class", "filters-hint", 4, "ngIf"], [1, "amz-content"], [1, "results-toolbar"], [1, "results-count"], [4, "ngIf"], [1, "results-sort"], ["appearance", "outline", 1, "sort-field"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "error-banner", 4, "ngIf"], ["class", "products-grid", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "paginator-wrap", 4, "ngIf"], [1, "amz-footer"], [1, "footer-inner"], ["type", "button", 1, "sidebar-filter-btn", 3, "click"], [1, "filters-hint"], [3, "value"], [1, "error-banner"], [1, "products-grid"], ["class", "product-skeleton", 4, "ngFor", "ngForOf"], [1, "product-skeleton"], [1, "skeleton-img"], [1, "skeleton-line", "w80"], [1, "skeleton-line", "w60"], [1, "skeleton-line", "w40"], ["class", "product-card", 4, "ngFor", "ngForOf"], [1, "product-card"], ["class", "product-badge", 4, "ngIf"], [1, "product-image-wrap"], ["class", "product-image", 3, "src", "alt", 4, "ngIf", "ngIfElse"], ["adminPlaceholder", ""], [1, "product-image-label"], [1, "product-overlay"], ["mat-icon-button", "", "matTooltip", "Editar", 1, "overlay-btn", "edit-btn", 3, "click"], ["mat-icon-button", "", "matTooltip", "Eliminar", 1, "overlay-btn", "delete-btn", 3, "click"], [1, "product-info"], [1, "product-name"], [1, "product-rating"], [1, "star"], [1, "star-half"], [1, "rating-count"], [1, "product-price"], ["class", "product-desc", 4, "ngIf"], [1, "product-stock"], [1, "product-badge"], [1, "product-image", 3, "src", "alt"], [1, "product-img-placeholder"], [1, "product-desc"], [1, "empty-state"], [1, "empty-icon"], ["mat-stroked-button", "", "class", "clear-filters-btn clear-filters-empty", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "class", "amz-add-btn", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", 1, "clear-filters-btn", "clear-filters-empty", 3, "click"], [1, "paginator-wrap"], ["showFirstLastButtons", "", 3, "length", "pageIndex", "pageSize", "pageSizeOptions", "page"]],
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductsComponent_Template_div_click_2_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "mat-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 7)(9, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8)(12, "a", 9)(13, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "space_dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Inicio ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 10)(17, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "groups");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Usuarios ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "a", 11)(21, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "person");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Profile ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 12)(25, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_25_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "arrow_back");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " Volver ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_29_listener() {
            return ctx.openCreateDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " Agregar producto ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 15)(34, "div", 16)(35, "div", 17)(36, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductsComponent_Template_span_click_36_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Inicio");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-icon", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "chevron_right");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Productos");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 21)(43, "div", 22)(44, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "inventory_2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, " productos ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 22)(50, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "filter_alt");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 23)(55, "aside", 24)(56, "div", 25)(57, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Departamentos");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "ul")(60, "li", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductsComponent_Template_li_click_60_listener() {
            return ctx.categoryFilter.setValue("all");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Todos los productos");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, ProductsComponent_li_62_Template, 2, 3, "li", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 25)(64, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Disponibilidad");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](67, ProductsComponent_button_67_Template, 2, 3, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 25)(69, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Acciones");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_71_listener() {
            return ctx.clearFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "filter_alt_off");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, " Limpiar filtros ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](75, ProductsComponent_p_75_Template, 2, 3, "p", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 32)(77, "div", 33)(78, "span", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](79, ProductsComponent_span_79_Template, 2, 2, "span", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](80, ProductsComponent_span_80_Template, 2, 0, "span", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 36)(82, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "sort");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Ordenar por:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "mat-form-field", 37)(87, "mat-select", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](88, ProductsComponent_mat_option_88_Template, 2, 2, "mat-option", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](89, ProductsComponent_div_89_Template, 8, 1, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](90, ProductsComponent_div_90_Template, 2, 2, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](91, ProductsComponent_div_91_Template, 2, 1, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](92, ProductsComponent_div_92_Template, 10, 4, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](93, ProductsComponent_div_93_Template, 2, 5, "div", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 44)(95, "div", 45)(96, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "\u00A9 2024 eSueldos Store - Sistema de gesti\u00F3n de productos");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.searchControl);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.totalResults);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"]("", ctx.activeFiltersCount, " filtro", ctx.activeFiltersCount !== 1 ? "s" : "", " activo", ctx.activeFiltersCount !== 1 ? "s" : "", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.categoryFilter.value === "all");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.categories);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.stockOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.activeFiltersCount === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activeFiltersCount > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.sortControl);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.sortOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.products.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.products.length === 0 && !ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.totalResults > ctx.pageSize);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_10__.SlicePipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  background: #eaeded;\n  min-height: 100vh;\n  font-family: 'Amazon Ember', Arial, sans-serif;\n}\n\n.amz-topbar[_ngcontent-%COMP%] {\n  background: #131921;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);\n}\n\n.amz-topbar-inner[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 10px 20px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n.amz-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 8px 12px;\n  border-radius: 4px;\n  border: 2px solid transparent;\n  transition: border-color 0.15s;\n  white-space: nowrap;\n  background: #fff;\n}\n\n.amz-logo[_ngcontent-%COMP%]:hover {\n  border-color: white;\n}\n\n.amz-logo-image[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 34px;\n  object-fit: contain;\n  display: block;\n}\n\n.amz-search-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  background: #fff;\n  border-radius: 4px;\n  overflow: hidden;\n  border: 2px solid #f0a500;\n  max-width: 700px;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  padding: 0 12px;\n  color: #555;\n  font-size: 20px;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 0;\n  outline: none;\n  padding: 12px 0;\n  font-size: 14px;\n  color: #131921;\n  background: transparent;\n}\n\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: #8a8f98;\n}\n\n.search-btn-fake[_ngcontent-%COMP%] {\n  background: #f0a500;\n  padding: 0 14px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border: 0;\n}\n\n.search-btn-fake[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #131921;\n}\n\n.amz-topbar-actions[_ngcontent-%COMP%] {\n  background-color: red;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n\n.amz-nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.amz-nav-btn[_ngcontent-%COMP%] {\n  min-height: 38px;\n  border-radius: 999px !important;\n  border-color: rgba(255, 255, 255, 0.22) !important;\n  color: white !important;\n}\n\n.amz-back-btn[_ngcontent-%COMP%] {\n  color: white !important;\n  border: 1px solid rgba(255, 255, 255, 0.3) !important;\n  border-radius: 4px !important;\n  font-size: 13px !important;\n  padding: 6px 14px !important;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.amz-back-btn[_ngcontent-%COMP%]:hover {\n  border-color: white !important;\n  background: rgba(255, 255, 255, 0.08) !important;\n}\n\n.amz-add-btn[_ngcontent-%COMP%] {\n  background: #f0a500 !important;\n  color: #131921 !important;\n  font-weight: 700 !important;\n  border-radius: 8px !important;\n  padding: 8px 18px !important;\n  font-size: 13px !important;\n  box-shadow: 0 2px 8px rgba(240, 165, 0, 0.4) !important;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  white-space: nowrap;\n}\n\n.amz-add-btn[_ngcontent-%COMP%]:hover {\n  background: #e69500 !important;\n  box-shadow: 0 4px 14px rgba(240, 165, 0, 0.6) !important;\n}\n\n.amz-subbar[_ngcontent-%COMP%] {\n  background: #232f3e;\n  border-bottom: 1px solid #37475a;\n}\n\n.amz-subbar-inner[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 8px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n\n.amz-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n}\n\n.breadcrumb-link[_ngcontent-%COMP%] {\n  color: #ccc;\n  cursor: pointer;\n}\n\n.breadcrumb-link[_ngcontent-%COMP%]:hover {\n  color: #f0a500;\n  text-decoration: underline;\n}\n\n.breadcrumb-sep[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n\n.breadcrumb-current[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 600;\n}\n\n.amz-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n.stat-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 12px;\n}\n\n.stat-pill[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #f0a500;\n}\n\n.amz-main[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 20px;\n  display: flex;\n  gap: 20px;\n  align-items: flex-start;\n}\n\n.amz-sidebar[_ngcontent-%COMP%] {\n  width: 240px;\n  flex-shrink: 0;\n  background: white;\n  border-radius: 8px;\n  padding: 16px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n\n.sidebar-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #eee;\n}\n\n.sidebar-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n\n.sidebar-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 14px;\n  font-weight: 700;\n  color: #131921;\n  border-bottom: 2px solid #f0a500;\n  padding-bottom: 6px;\n}\n\n.sidebar-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.sidebar-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 5px 0 5px 4px;\n  font-size: 13px;\n  color: #0066c0;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background 0.15s;\n}\n\n.sidebar-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #f0f2f2;\n  color: #c45500;\n}\n\n.sidebar-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #c45500;\n  border-left: 3px solid #f0a500;\n}\n\n.stock-filter-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.sidebar-filter-btn[_ngcontent-%COMP%] {\n  border: 1px solid #d5d9d9;\n  border-radius: 999px;\n  background: #fff;\n  color: #0f1111;\n  font-size: 13px;\n  padding: 8px 12px;\n  text-align: left;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n\n.sidebar-filter-btn[_ngcontent-%COMP%]:hover {\n  border-color: #f0a500;\n  background: #fff8e5;\n}\n\n.sidebar-filter-btn.active[_ngcontent-%COMP%] {\n  border-color: #f0a500;\n  background: #fff1cc;\n  color: #8a4b00;\n  font-weight: 700;\n}\n\n.clear-filters-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px !important;\n  font-weight: 600 !important;\n}\n\n.clear-filters-empty[_ngcontent-%COMP%] {\n  max-width: 260px;\n}\n\n.filters-hint[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  font-size: 12px;\n  color: #555;\n}\n\n.amz-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n\n.results-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: white;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n  font-size: 14px;\n  gap: 12px;\n}\n\n.results-count[_ngcontent-%COMP%] {\n  color: #555;\n}\n\n.results-sort[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #555;\n  font-size: 13px;\n  flex-wrap: wrap;\n}\n\n.results-sort[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n\n.sort-field[_ngcontent-%COMP%] {\n  width: 240px;\n  margin-bottom: -1.25em;\n}\n\n.error-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  background: #fff3cd;\n  border: 1px solid #f0a500;\n  border-radius: 8px;\n  padding: 16px;\n  margin-bottom: 16px;\n  color: #856404;\n}\n\n.error-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #f0a500;\n  flex-shrink: 0;\n}\n\n.error-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 13px;\n}\n\n.products-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n\n.product-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n  border: 1px solid #ddd;\n}\n\n.product-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\n  transform: translateY(-3px);\n  border-color: #f0a500;\n}\n\n.product-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  background: #232f3e;\n  color: #f0a500;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  z-index: 2;\n}\n\n.product-image-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  height: 180px;\n  background: linear-gradient(135deg, #f5f5f5 0%, #ebebeb 100%);\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.product-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.product-img-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 90px;\n  height: 90px;\n  background: #e0e0e0;\n  border-radius: 50%;\n}\n\n.product-img-placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n  color: #aaa;\n}\n\n.product-image-label[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: rgba(19, 25, 33, 0.72);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n}\n\n.product-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(19, 25, 33, 0.65);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n\n.product-card[_ngcontent-%COMP%]:hover   .product-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.overlay-btn[_ngcontent-%COMP%] {\n  width: 44px !important;\n  height: 44px !important;\n  border-radius: 50% !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  transition: transform 0.2s !important;\n}\n\n.overlay-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1) !important;\n}\n\n.overlay-btn.edit-btn[_ngcontent-%COMP%] {\n  background: #00a8e1 !important;\n  color: white !important;\n}\n\n.overlay-btn.delete-btn[_ngcontent-%COMP%] {\n  background: #e53935 !important;\n  color: white !important;\n}\n\n.product-info[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.product-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #0f1111;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.product-rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1px;\n}\n\n.product-rating[_ngcontent-%COMP%]   mat-icon.star[_ngcontent-%COMP%], .product-rating[_ngcontent-%COMP%]   mat-icon.star-half[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n  color: #f0a500;\n}\n\n.rating-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #007185;\n  margin-left: 4px;\n}\n\n.product-price[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #b12704;\n  margin: 2px 0;\n}\n\n.product-desc[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #555;\n  line-height: 1.5;\n}\n\n.product-stock[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 3px 8px;\n  border-radius: 4px;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.product-stock[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n\n.stock-in[_ngcontent-%COMP%] {\n  background: #e7f5e7;\n  color: #007600;\n}\n\n.stock-low[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n\n.stock-out[_ngcontent-%COMP%] {\n  background: #fce4e4;\n  color: #b71c1c;\n}\n\n.stock-unknown[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #777;\n}\n\n.product-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 10px 14px;\n  border-top: 1px solid #f0f2f2;\n  background: #fafafa;\n}\n\n.btn-edit[_ngcontent-%COMP%], .btn-delete[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 12px !important;\n  font-weight: 600 !important;\n  border-radius: 6px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  gap: 4px !important;\n  height: 36px !important;\n  transition: all 0.15s !important;\n}\n\n.btn-edit[_ngcontent-%COMP%] {\n  color: #0066c0 !important;\n  border-color: #0066c0 !important;\n}\n\n.btn-edit[_ngcontent-%COMP%]:hover {\n  background: #e8f0fe !important;\n}\n\n.btn-delete[_ngcontent-%COMP%] {\n  color: #c0392b !important;\n  border-color: #c0392b !important;\n}\n\n.btn-delete[_ngcontent-%COMP%]:hover {\n  background: #fce4e4 !important;\n}\n\n.btn-edit[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .btn-delete[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n\n.product-skeleton[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  overflow: hidden;\n  padding: 0 0 16px;\n  border: 1px solid #ddd;\n}\n\n.skeleton-img[_ngcontent-%COMP%] {\n  height: 180px;\n  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n}\n\n.skeleton-line[_ngcontent-%COMP%] {\n  height: 14px;\n  margin: 12px 14px 0;\n  border-radius: 4px;\n  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n}\n\n.skeleton-line.w80[_ngcontent-%COMP%] { width: 80%; }\n.skeleton-line.w60[_ngcontent-%COMP%] { width: 60%; }\n.skeleton-line.w40[_ngcontent-%COMP%] { width: 40%; }\n\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% { background-position: 200% 0; }\n  100% { background-position: -200% 0; }\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px 24px;\n  background: white;\n  border-radius: 8px;\n  text-align: center;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n\n.empty-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: #f0f2f2;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.empty-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n  color: #aaa;\n}\n\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 20px;\n  color: #131921;\n}\n\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 24px;\n  color: #555;\n  font-size: 14px;\n}\n\n.paginator-wrap[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 8px 16px;\n  display: flex;\n  justify-content: center;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n\n  .paginator-wrap .mat-paginator {\n  background: transparent;\n}\n\n.amz-footer[_ngcontent-%COMP%] {\n  background: #131921;\n  margin-top: 40px;\n  padding: 20px;\n}\n\n.footer-inner[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.footer-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 12px;\n  margin: 0;\n}\n\n@media (max-width: 1024px) {\n  .amz-sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 768px) {\n  .amz-topbar-inner[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 10px;\n  }\n\n  .amz-nav-links[_ngcontent-%COMP%] {\n    order: 4;\n    width: 100%;\n  }\n\n  .amz-search-bar[_ngcontent-%COMP%] {\n    order: 3;\n    width: 100%;\n    max-width: 100%;\n  }\n\n  .amz-topbar-actions[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n    gap: 12px;\n  }\n\n  .amz-main[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n\n  .amz-stats[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .results-toolbar[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .sort-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixZQUFZO0VBQ1osd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsT0FBTztFQUNQLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixtQkFB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QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFFBQVE7SUFDUixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxRQUFRO0lBQ1IsV0FBVztJQUNYLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSw0REFBNEQ7SUFDNUQsU0FBUztFQUNYOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InByb2R1Y3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjZWFlZGVkO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZm9udC1mYW1pbHk6ICdBbWF6b24gRW1iZXInLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuLmFtei10b3BiYXIge1xuICBiYWNrZ3JvdW5kOiAjMTMxOTIxO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLmFtei10b3BiYXItaW5uZXIge1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uYW16LWxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5hbXotbG9nbzpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG5cbi5hbXotbG9nby1pbWFnZSB7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmFtei1zZWFyY2gtYmFyIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjBhNTAwO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xufVxuXG4uc2VhcmNoLWljb24ge1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5zZWFyY2gtaW5wdXQge1xuICBmbGV4OiAxO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDEycHggMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzEzMTkyMTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5zZWFyY2gtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM4YThmOTg7XG59XG5cbi5zZWFyY2gtYnRuLWZha2Uge1xuICBiYWNrZ3JvdW5kOiAjZjBhNTAwO1xuICBwYWRkaW5nOiAwIDE0cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAwO1xufVxuXG4uc2VhcmNoLWJ0bi1mYWtlIG1hdC1pY29uIHtcbiAgY29sb3I6ICMxMzE5MjE7XG59XG5cbi5hbXotdG9wYmFyLWFjdGlvbnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5hbXotbmF2LWxpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmFtei1uYXYtYnRuIHtcbiAgbWluLWhlaWdodDogMzhweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjIpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uYW16LWJhY2stYnRuIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDZweCAxNHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xufVxuXG4uYW16LWJhY2stYnRuOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpICFpbXBvcnRhbnQ7XG59XG5cbi5hbXotYWRkLWJ0biB7XG4gIGJhY2tncm91bmQ6ICNmMGE1MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICMxMzE5MjEgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogOHB4IDE4cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDI0MCwgMTY1LCAwLCAwLjQpICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYW16LWFkZC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTY5NTAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSgyNDAsIDE2NSwgMCwgMC42KSAhaW1wb3J0YW50O1xufVxuXG4uYW16LXN1YmJhciB7XG4gIGJhY2tncm91bmQ6ICMyMzJmM2U7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzc0NzVhO1xufVxuXG4uYW16LXN1YmJhci1pbm5lciB7XG4gIG1heC13aWR0aDogMTQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxNnB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5hbXotYnJlYWRjcnVtYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5icmVhZGNydW1iLWxpbmsge1xuICBjb2xvcjogI2NjYztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnJlYWRjcnVtYi1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICNmMGE1MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uYnJlYWRjcnVtYi1zZXAge1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuXG4uYnJlYWRjcnVtYi1jdXJyZW50IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYW16LXN0YXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uc3RhdC1waWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnN0YXQtcGlsbCBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgY29sb3I6ICNmMGE1MDA7XG59XG5cbi5hbXotbWFpbiB7XG4gIG1heC13aWR0aDogMTQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmFtei1zaWRlYmFyIHtcbiAgd2lkdGg6IDI0MHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTZweDtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnNpZGViYXItc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbn1cblxuLnNpZGViYXItc2VjdGlvbjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5zaWRlYmFyLXNlY3Rpb24gaDQge1xuICBtYXJnaW46IDAgMCAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMTMxOTIxO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2YwYTUwMDtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbn1cblxuLnNpZGViYXItc2VjdGlvbiB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNpZGViYXItc2VjdGlvbiB1bCBsaSB7XG4gIHBhZGRpbmc6IDVweCAwIDVweCA0cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMwMDY2YzA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xufVxuXG4uc2lkZWJhci1zZWN0aW9uIHVsIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2YwZjJmMjtcbiAgY29sb3I6ICNjNDU1MDA7XG59XG5cbi5zaWRlYmFyLXNlY3Rpb24gdWwgbGkuYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNjNDU1MDA7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2YwYTUwMDtcbn1cblxuLnN0b2NrLWZpbHRlci1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5zaWRlYmFyLWZpbHRlci1idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDVkOWQ5O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMwZjExMTE7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG59XG5cbi5zaWRlYmFyLWZpbHRlci1idG46aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNmMGE1MDA7XG4gIGJhY2tncm91bmQ6ICNmZmY4ZTU7XG59XG5cbi5zaWRlYmFyLWZpbHRlci1idG4uYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjBhNTAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmMWNjO1xuICBjb2xvcjogIzhhNGIwMDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmNsZWFyLWZpbHRlcnMtYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG5cbi5jbGVhci1maWx0ZXJzLWVtcHR5IHtcbiAgbWF4LXdpZHRoOiAyNjBweDtcbn1cblxuLmZpbHRlcnMtaGludCB7XG4gIG1hcmdpbjogMTBweCAwIDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5hbXotY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLnJlc3VsdHMtdG9vbGJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBnYXA6IDEycHg7XG59XG5cbi5yZXN1bHRzLWNvdW50IHtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5yZXN1bHRzLXNvcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucmVzdWx0cy1zb3J0IG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuXG4uc29ydC1maWVsZCB7XG4gIHdpZHRoOiAyNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTEuMjVlbTtcbn1cblxuLmVycm9yLWJhbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNmZmYzY2Q7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMGE1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgY29sb3I6ICM4NTY0MDQ7XG59XG5cbi5lcnJvci1iYW5uZXIgbWF0LWljb24ge1xuICBjb2xvcjogI2YwYTUwMDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5lcnJvci1iYW5uZXIgcCB7XG4gIG1hcmdpbjogNHB4IDAgMDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ucHJvZHVjdHMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIyMHB4LCAxZnIpKTtcbiAgZ2FwOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucHJvZHVjdC1jYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnMgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn1cblxuLnByb2R1Y3QtY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICBib3JkZXItY29sb3I6ICNmMGE1MDA7XG59XG5cbi5wcm9kdWN0LWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMyMzJmM2U7XG4gIGNvbG9yOiAjZjBhNTAwO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICB6LWluZGV4OiAyO1xufVxuXG4ucHJvZHVjdC1pbWFnZS13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDE4MHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjVmNWY1IDAlLCAjZWJlYmViIDEwMCUpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByb2R1Y3QtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wcm9kdWN0LWltZy1wbGFjZWhvbGRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5wcm9kdWN0LWltZy1wbGFjZWhvbGRlciBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgY29sb3I6ICNhYWE7XG59XG5cbi5wcm9kdWN0LWltYWdlLWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTksIDI1LCAzMywgMC43Mik7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuLnByb2R1Y3Qtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTksIDI1LCAzMywgMC42NSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlO1xufVxuXG4ucHJvZHVjdC1jYXJkOmhvdmVyIC5wcm9kdWN0LW92ZXJsYXkge1xuICBvcGFjaXR5OiAxO1xufVxuXG4ub3ZlcmxheS1idG4ge1xuICB3aWR0aDogNDRweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktYnRuLmVkaXQtYnRuIHtcbiAgYmFja2dyb3VuZDogIzAwYThlMSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktYnRuLmRlbGV0ZS1idG4ge1xuICBiYWNrZ3JvdW5kOiAjZTUzOTM1ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ucHJvZHVjdC1pbmZvIHtcbiAgcGFkZGluZzogMTJweCAxNHB4O1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDZweDtcbn1cblxuLnByb2R1Y3QtbmFtZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzBmMTExMTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByb2R1Y3QtcmF0aW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcHg7XG59XG5cbi5wcm9kdWN0LXJhdGluZyBtYXQtaWNvbi5zdGFyLFxuLnByb2R1Y3QtcmF0aW5nIG1hdC1pY29uLnN0YXItaGFsZiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgY29sb3I6ICNmMGE1MDA7XG59XG5cbi5yYXRpbmctY291bnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMDA3MTg1O1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4ucHJvZHVjdC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNiMTI3MDQ7XG4gIG1hcmdpbjogMnB4IDA7XG59XG5cbi5wcm9kdWN0LWRlc2Mge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM1NTU7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5wcm9kdWN0LXN0b2NrIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4ucHJvZHVjdC1zdG9jayBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbn1cblxuLnN0b2NrLWluIHtcbiAgYmFja2dyb3VuZDogI2U3ZjVlNztcbiAgY29sb3I6ICMwMDc2MDA7XG59XG5cbi5zdG9jay1sb3cge1xuICBiYWNrZ3JvdW5kOiAjZmZmM2UwO1xuICBjb2xvcjogI2U2NTEwMDtcbn1cblxuLnN0b2NrLW91dCB7XG4gIGJhY2tncm91bmQ6ICNmY2U0ZTQ7XG4gIGNvbG9yOiAjYjcxYzFjO1xufVxuXG4uc3RvY2stdW5rbm93biB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGNvbG9yOiAjNzc3O1xufVxuXG4ucHJvZHVjdC1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMGYyZjI7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG59XG5cbi5idG4tZWRpdCxcbi5idG4tZGVsZXRlIHtcbiAgZmxleDogMTtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBnYXA6IDRweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDM2cHggIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tZWRpdCB7XG4gIGNvbG9yOiAjMDA2NmMwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzAwNjZjMCAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWVkaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZThmMGZlICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tZGVsZXRlIHtcbiAgY29sb3I6ICNjMDM5MmIgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjYzAzOTJiICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tZGVsZXRlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZjZTRlNCAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWVkaXQgbWF0LWljb24sXG4uYnRuLWRlbGV0ZSBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cblxuLnByb2R1Y3Qtc2tlbGV0b24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwIDAgMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn1cblxuLnNrZWxldG9uLWltZyB7XG4gIGhlaWdodDogMTgwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2YwZjBmMCAyNSUsICNlMGUwZTAgNTAlLCAjZjBmMGYwIDc1JSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xuICBhbmltYXRpb246IHNoaW1tZXIgMS41cyBpbmZpbml0ZTtcbn1cblxuLnNrZWxldG9uLWxpbmUge1xuICBoZWlnaHQ6IDE0cHg7XG4gIG1hcmdpbjogMTJweCAxNHB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZjBmMGYwIDI1JSwgI2UwZTBlMCA1MCUsICNmMGYwZjAgNzUlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XG4gIGFuaW1hdGlvbjogc2hpbW1lciAxLjVzIGluZmluaXRlO1xufVxuXG4uc2tlbGV0b24tbGluZS53ODAgeyB3aWR0aDogODAlOyB9XG4uc2tlbGV0b24tbGluZS53NjAgeyB3aWR0aDogNjAlOyB9XG4uc2tlbGV0b24tbGluZS53NDAgeyB3aWR0aDogNDAlOyB9XG5cbkBrZXlmcmFtZXMgc2hpbW1lciB7XG4gIDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSAwOyB9XG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwJSAwOyB9XG59XG5cbi5lbXB0eS1zdGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA2NHB4IDI0cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG59XG5cbi5lbXB0eS1pY29uIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZDogI2YwZjJmMjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmVtcHR5LWljb24gbWF0LWljb24ge1xuICBmb250LXNpemU6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjYWFhO1xufVxuXG4uZW1wdHktc3RhdGUgaDMge1xuICBtYXJnaW46IDAgMCA4cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMxMzE5MjE7XG59XG5cbi5lbXB0eS1zdGF0ZSBwIHtcbiAgbWFyZ2luOiAwIDAgMjRweDtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnBhZ2luYXRvci13cmFwIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cblxuOjpuZy1kZWVwIC5wYWdpbmF0b3Itd3JhcCAubWF0LXBhZ2luYXRvciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uYW16LWZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMxMzE5MjE7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5mb290ZXItaW5uZXIge1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvb3Rlci1pbm5lciBwIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmFtei1zaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYW16LXRvcGJhci1pbm5lciB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMTBweDtcbiAgfVxuXG4gIC5hbXotbmF2LWxpbmtzIHtcbiAgICBvcmRlcjogNDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5hbXotc2VhcmNoLWJhciB7XG4gICAgb3JkZXI6IDM7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmFtei10b3BiYXItYWN0aW9ucyB7XG4gICAgZ2FwOiA4cHg7XG4gIH1cblxuICAucHJvZHVjdHMtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTYwcHgsIDFmcikpO1xuICAgIGdhcDogMTJweDtcbiAgfVxuXG4gIC5hbXotbWFpbiB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgfVxuXG4gIC5hbXotc3RhdHMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAucmVzdWx0cy10b29sYmFyIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnNvcnQtZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sWUFBWTtFQUNaLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxTQUFTO0VBQ1QsYUFBYTtFQUNiLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7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RSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxRQUFRO0lBQ1IsV0FBVztFQUNiOztFQUVBO0lBQ0UsUUFBUTtJQUNSLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UsNERBQTREO0lBQzVELFNBQVM7RUFDWDs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFHQSxvNDJCQUFvNDJCIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogI2VhZWRlZDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGZvbnQtZmFtaWx5OiAnQW1hem9uIEVtYmVyJywgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5hbXotdG9wYmFyIHtcbiAgYmFja2dyb3VuZDogIzEzMTkyMTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDA7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5hbXotdG9wYmFyLWlubmVyIHtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbn1cblxuLmFtei1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uYW16LWxvZ286aG92ZXIge1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xufVxuXG4uYW16LWxvZ28taW1hZ2Uge1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogMzRweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5hbXotc2VhcmNoLWJhciB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAycHggc29saWQgI2YwYTUwMDtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbn1cblxuLnNlYXJjaC1pY29uIHtcbiAgcGFkZGluZzogMCAxMnB4O1xuICBjb2xvcjogIzU1NTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uc2VhcmNoLWlucHV0IHtcbiAgZmxleDogMTtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxMnB4IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMxMzE5MjE7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uc2VhcmNoLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOGE4Zjk4O1xufVxuXG4uc2VhcmNoLWJ0bi1mYWtlIHtcbiAgYmFja2dyb3VuZDogI2YwYTUwMDtcbiAgcGFkZGluZzogMCAxNHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMDtcbn1cblxuLnNlYXJjaC1idG4tZmFrZSBtYXQtaWNvbiB7XG4gIGNvbG9yOiAjMTMxOTIxO1xufVxuXG4uYW16LXRvcGJhci1hY3Rpb25zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uYW16LW5hdi1saW5rcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5hbXotbmF2LWJ0biB7XG4gIG1pbi1oZWlnaHQ6IDM4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIyKSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmFtei1iYWNrLWJ0biB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA2cHggMTRweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbn1cblxuLmFtei1iYWNrLWJ0bjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSAhaW1wb3J0YW50O1xufVxuXG4uYW16LWFkZC1idG4ge1xuICBiYWNrZ3JvdW5kOiAjZjBhNTAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMTMxOTIxICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDhweCAxOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgyNDAsIDE2NSwgMCwgMC40KSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmFtei1hZGQtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2U2OTUwMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDRweCAxNHB4IHJnYmEoMjQwLCAxNjUsIDAsIDAuNikgIWltcG9ydGFudDtcbn1cblxuLmFtei1zdWJiYXIge1xuICBiYWNrZ3JvdW5kOiAjMjMyZjNlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzM3NDc1YTtcbn1cblxuLmFtei1zdWJiYXItaW5uZXIge1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTZweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uYW16LWJyZWFkY3J1bWIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uYnJlYWRjcnVtYi1saW5rIHtcbiAgY29sb3I6ICNjY2M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJyZWFkY3J1bWItbGluazpob3ZlciB7XG4gIGNvbG9yOiAjZjBhNTAwO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmJyZWFkY3J1bWItc2VwIHtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cblxuLmJyZWFkY3J1bWItY3VycmVudCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmFtei1zdGF0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbn1cblxuLnN0YXQtcGlsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5zdGF0LXBpbGwgbWF0LWljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGNvbG9yOiAjZjBhNTAwO1xufVxuXG4uYW16LW1haW4ge1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjBweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5hbXotc2lkZWJhciB7XG4gIHdpZHRoOiAyNDBweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5zaWRlYmFyLXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG59XG5cbi5zaWRlYmFyLXNlY3Rpb246bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uc2lkZWJhci1zZWN0aW9uIGg0IHtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzEzMTkyMTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmMGE1MDA7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG59XG5cbi5zaWRlYmFyLXNlY3Rpb24gdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zaWRlYmFyLXNlY3Rpb24gdWwgbGkge1xuICBwYWRkaW5nOiA1cHggMCA1cHggNHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjMDA2NmMwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cztcbn1cblxuLnNpZGViYXItc2VjdGlvbiB1bCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmMGYyZjI7XG4gIGNvbG9yOiAjYzQ1NTAwO1xufVxuXG4uc2lkZWJhci1zZWN0aW9uIHVsIGxpLmFjdGl2ZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjYzQ1NTAwO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNmMGE1MDA7XG59XG5cbi5zdG9jay1maWx0ZXItbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xufVxuXG4uc2lkZWJhci1maWx0ZXItYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q1ZDlkOTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMGYxMTExO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xufVxuXG4uc2lkZWJhci1maWx0ZXItYnRuOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjBhNTAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmOGU1O1xufVxuXG4uc2lkZWJhci1maWx0ZXItYnRuLmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogI2YwYTUwMDtcbiAgYmFja2dyb3VuZDogI2ZmZjFjYztcbiAgY29sb3I6ICM4YTRiMDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5jbGVhci1maWx0ZXJzLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xufVxuXG4uY2xlYXItZmlsdGVycy1lbXB0eSB7XG4gIG1heC13aWR0aDogMjYwcHg7XG59XG5cbi5maWx0ZXJzLWhpbnQge1xuICBtYXJnaW46IDEwcHggMCAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNTU1O1xufVxuXG4uYW16LWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5yZXN1bHRzLXRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZ2FwOiAxMnB4O1xufVxuXG4ucmVzdWx0cy1jb3VudCB7XG4gIGNvbG9yOiAjNTU1O1xufVxuXG4ucmVzdWx0cy1zb3J0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnJlc3VsdHMtc29ydCBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cblxuLnNvcnQtZmllbGQge1xuICB3aWR0aDogMjQwcHg7XG4gIG1hcmdpbi1ib3R0b206IC0xLjI1ZW07XG59XG5cbi5lcnJvci1iYW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmM2NkO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjBhNTAwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGNvbG9yOiAjODU2NDA0O1xufVxuXG4uZXJyb3ItYmFubmVyIG1hdC1pY29uIHtcbiAgY29sb3I6ICNmMGE1MDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uZXJyb3ItYmFubmVyIHAge1xuICBtYXJnaW46IDRweCAwIDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnByb2R1Y3RzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMjBweCwgMWZyKSk7XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnByb2R1Y3QtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2U7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5wcm9kdWN0LWNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgYm9yZGVyLWNvbG9yOiAjZjBhNTAwO1xufVxuXG4ucHJvZHVjdC1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjMyZjNlO1xuICBjb2xvcjogI2YwYTUwMDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgei1pbmRleDogMjtcbn1cblxuLnByb2R1Y3QtaW1hZ2Utd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxODBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y1ZjVmNSAwJSwgI2ViZWJlYiAxMDAlKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wcm9kdWN0LWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucHJvZHVjdC1pbWctcGxhY2Vob2xkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ucHJvZHVjdC1pbWctcGxhY2Vob2xkZXIgbWF0LWljb24ge1xuICBmb250LXNpemU6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjYWFhO1xufVxuXG4ucHJvZHVjdC1pbWFnZS1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE5LCAyNSwgMzMsIDAuNzIpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbi5wcm9kdWN0LW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE5LCAyNSwgMzMsIDAuNjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZTtcbn1cblxuLnByb2R1Y3QtY2FyZDpob3ZlciAucHJvZHVjdC1vdmVybGF5IHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLm92ZXJsYXktYnRuIHtcbiAgd2lkdGg6IDQ0cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWJ0bi5lZGl0LWJ0biB7XG4gIGJhY2tncm91bmQ6ICMwMGE4ZTEgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWJ0bi5kZWxldGUtYnRuIHtcbiAgYmFja2dyb3VuZDogI2U1MzkzNSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLnByb2R1Y3QtaW5mbyB7XG4gIHBhZGRpbmc6IDEycHggMTRweDtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA2cHg7XG59XG5cbi5wcm9kdWN0LW5hbWUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwZjExMTE7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wcm9kdWN0LXJhdGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXB4O1xufVxuXG4ucHJvZHVjdC1yYXRpbmcgbWF0LWljb24uc3Rhcixcbi5wcm9kdWN0LXJhdGluZyBtYXQtaWNvbi5zdGFyLWhhbGYge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGNvbG9yOiAjZjBhNTAwO1xufVxuXG4ucmF0aW5nLWNvdW50IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzAwNzE4NTtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLnByb2R1Y3QtcHJpY2Uge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjYjEyNzA0O1xuICBtYXJnaW46IDJweCAwO1xufVxuXG4ucHJvZHVjdC1kZXNjIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNTU1O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4ucHJvZHVjdC1zdG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLnByb2R1Y3Qtc3RvY2sgbWF0LWljb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG59XG5cbi5zdG9jay1pbiB7XG4gIGJhY2tncm91bmQ6ICNlN2Y1ZTc7XG4gIGNvbG9yOiAjMDA3NjAwO1xufVxuXG4uc3RvY2stbG93IHtcbiAgYmFja2dyb3VuZDogI2ZmZjNlMDtcbiAgY29sb3I6ICNlNjUxMDA7XG59XG5cbi5zdG9jay1vdXQge1xuICBiYWNrZ3JvdW5kOiAjZmNlNGU0O1xuICBjb2xvcjogI2I3MWMxYztcbn1cblxuLnN0b2NrLXVua25vd24ge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBjb2xvcjogIzc3Nztcbn1cblxuLnByb2R1Y3QtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjBmMmYyO1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xufVxuXG4uYnRuLWVkaXQsXG4uYnRuLWRlbGV0ZSB7XG4gIGZsZXg6IDE7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZ2FwOiA0cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzNnB4ICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWVkaXQge1xuICBjb2xvcjogIzAwNjZjMCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMwMDY2YzAgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1lZGl0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2U4ZjBmZSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWRlbGV0ZSB7XG4gIGNvbG9yOiAjYzAzOTJiICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2MwMzkyYiAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWRlbGV0ZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmY2U0ZTQgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1lZGl0IG1hdC1pY29uLFxuLmJ0bi1kZWxldGUgbWF0LWljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG5cbi5wcm9kdWN0LXNrZWxldG9uIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMCAwIDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5za2VsZXRvbi1pbWcge1xuICBoZWlnaHQ6IDE4MHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmMGYwZjAgMjUlLCAjZTBlMGUwIDUwJSwgI2YwZjBmMCA3NSUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcbiAgYW5pbWF0aW9uOiBzaGltbWVyIDEuNXMgaW5maW5pdGU7XG59XG5cbi5za2VsZXRvbi1saW5lIHtcbiAgaGVpZ2h0OiAxNHB4O1xuICBtYXJnaW46IDEycHggMTRweCAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2YwZjBmMCAyNSUsICNlMGUwZTAgNTAlLCAjZjBmMGYwIDc1JSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xuICBhbmltYXRpb246IHNoaW1tZXIgMS41cyBpbmZpbml0ZTtcbn1cblxuLnNrZWxldG9uLWxpbmUudzgwIHsgd2lkdGg6IDgwJTsgfVxuLnNrZWxldG9uLWxpbmUudzYwIHsgd2lkdGg6IDYwJTsgfVxuLnNrZWxldG9uLWxpbmUudzQwIHsgd2lkdGg6IDQwJTsgfVxuXG5Aa2V5ZnJhbWVzIHNoaW1tZXIge1xuICAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDIwMCUgMDsgfVxuICAxMDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwMCUgMDsgfVxufVxuXG4uZW1wdHktc3RhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNjRweCAyNHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuXG4uZW1wdHktaWNvbiB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQ6ICNmMGYyZjI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5lbXB0eS1pY29uIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogI2FhYTtcbn1cblxuLmVtcHR5LXN0YXRlIGgzIHtcbiAgbWFyZ2luOiAwIDAgOHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMTMxOTIxO1xufVxuXG4uZW1wdHktc3RhdGUgcCB7XG4gIG1hcmdpbjogMCAwIDI0cHg7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5wYWdpbmF0b3Itd3JhcCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG59XG5cbjo6bmctZGVlcCAucGFnaW5hdG9yLXdyYXAgLm1hdC1wYWdpbmF0b3Ige1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmFtei1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTMxOTIxO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZm9vdGVyLWlubmVyIHtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb290ZXItaW5uZXIgcCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5hbXotc2lkZWJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmFtei10b3BiYXItaW5uZXIge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDEwcHg7XG4gIH1cblxuICAuYW16LW5hdi1saW5rcyB7XG4gICAgb3JkZXI6IDQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuYW16LXNlYXJjaC1iYXIge1xuICAgIG9yZGVyOiAzO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5hbXotdG9wYmFyLWFjdGlvbnMge1xuICAgIGdhcDogOHB4O1xuICB9XG5cbiAgLnByb2R1Y3RzLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE2MHB4LCAxZnIpKTtcbiAgICBnYXA6IDEycHg7XG4gIH1cblxuICAuYW16LW1haW4ge1xuICAgIHBhZGRpbmc6IDEycHg7XG4gIH1cblxuICAuYW16LXN0YXRzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnJlc3VsdHMtdG9vbGJhciB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5zb3J0LWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2252:
/*!*****************************************************!*\
  !*** ./src/app/modules/products/products.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsModule": () => (/* binding */ ProductsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-routing.module */ 2727);
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.component */ 1089);
/* harmony import */ var _products_checkout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-checkout.component */ 4166);
/* harmony import */ var _products_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-entry.component */ 9758);
/* harmony import */ var _products_shop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products-shop.component */ 6421);
/* harmony import */ var _components_product_form_dialog_product_form_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/product-form-dialog/product-form-dialog.component */ 9534);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);









class ProductsModule {
  static {
    this.ɵfac = function ProductsModule_Factory(t) {
      return new (t || ProductsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: ProductsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _products_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductsRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ProductsModule, {
    declarations: [_products_component__WEBPACK_IMPORTED_MODULE_1__.ProductsComponent, _products_checkout_component__WEBPACK_IMPORTED_MODULE_2__.ProductsCheckoutComponent, _products_entry_component__WEBPACK_IMPORTED_MODULE_3__.ProductsEntryComponent, _products_shop_component__WEBPACK_IMPORTED_MODULE_4__.ProductsShopComponent, _components_product_form_dialog_product_form_dialog_component__WEBPACK_IMPORTED_MODULE_5__.ProductFormDialogComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _products_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductsRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_products_products_module_ts.js.map