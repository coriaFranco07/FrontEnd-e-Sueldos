import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product, ProductService, ProductUpsertPayload } from '../../product.service';

export interface ProductFormDialogData {
  mode: 'create' | 'edit';
  product?: Product;
}

@Component({
  selector: 'app-product-form-dialog',
  templateUrl: './product-form-dialog.component.html',
  styleUrls: ['./product-form-dialog.component.css']
})
export class ProductFormDialogComponent implements OnInit, OnDestroy {
  productForm: FormGroup;
  isLoading = false;
  imageError = '';
  selectedImageFile: File | null = null;
  previewUrl: string | null = null;
  currentImageUrl: string | null = null;

  categories = [
    'Electronica',
    'Ropa',
    'Alimentos',
    'Hogar',
    'Deportes',
    'Libros',
    'Juguetes',
    'Salud',
    'Automotriz',
    'Otros'
  ];

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ProductFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductFormDialogData
  ) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      price: ['', [Validators.required, Validators.pattern(/^\d+(?:[.,]\d{1,2})?$/), Validators.min(0)]],
      description: [''],
      category: [''],
      stock: ['', [Validators.pattern(/^\d+$/), Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    if (this.data.mode === 'edit' && this.data.product) {
      this.productForm.patchValue({
        name: this.data.product.name,
        price: this.data.product.price != null ? String(this.data.product.price) : '',
        description: this.data.product.description || '',
        category: this.data.product.category || '',
        stock: this.data.product.stock != null ? String(this.data.product.stock) : ''
      });
      this.currentImageUrl = this.productService.getImageUrl(this.data.product.image);
    }
  }

  ngOnDestroy(): void {
    this.revokePreviewUrl();
  }

  get isEditMode(): boolean {
    return this.data.mode === 'edit';
  }

  get title(): string {
    return this.isEditMode ? 'Editar Producto' : 'Nuevo Producto';
  }

  get submitLabel(): string {
    return this.isEditMode ? 'Guardar cambios' : 'Crear producto';
  }

  get displayedImageUrl(): string | null {
    return this.previewUrl || this.currentImageUrl;
  }

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
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

  submit(): void {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.imageError = '';

    const normalizedPrice = this.parseDecimalValue(this.productForm.get('price')?.value);
    const normalizedStock = this.parseIntegerValue(this.productForm.get('stock')?.value);

    if (normalizedPrice === null || (this.productForm.get('stock')?.value && normalizedStock === null)) {
      this.isLoading = false;
      this.productForm.markAllAsTouched();
      return;
    }

    const payload: ProductUpsertPayload = {
      ...this.productForm.value,
      price: normalizedPrice,
      stock: normalizedStock ?? undefined,
      imageFile: this.selectedImageFile
    };

    Object.keys(payload).forEach(key => {
      const typedKey = key as keyof ProductUpsertPayload;
      if (payload[typedKey] === '' || payload[typedKey] === null) {
        delete payload[typedKey];
      }
    });

    const request$ = this.isEditMode
      ? this.productService.updateProduct(this.data.product!.id, payload)
      : this.productService.createProduct(payload);

    request$.subscribe({
      next: () => {
        this.isLoading = false;
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.isLoading = false;
        if (err.status === 400 || err.status === 413) {
          this.imageError = err.error?.message || 'No se pudo subir la imagen seleccionada.';
        }
        this.snackBar.open(
          err.error?.message || `Error al ${this.isEditMode ? 'actualizar' : 'crear'} producto`,
          'Cerrar',
          { duration: 3000 }
        );
      }
    });
  }

  private revokePreviewUrl(): void {
    if (this.previewUrl) {
      URL.revokeObjectURL(this.previewUrl);
      this.previewUrl = null;
    }
  }

  private parseDecimalValue(value: unknown): number | null {
    if (value === null || value === undefined || value === '') {
      return null;
    }

    const normalized = String(value).trim().replace(',', '.');
    if (!/^\d+(?:\.\d{1,2})?$/.test(normalized)) {
      return null;
    }

    const parsed = Number(normalized);
    return Number.isFinite(parsed) ? parsed : null;
  }

  private parseIntegerValue(value: unknown): number | null {
    if (value === null || value === undefined || value === '') {
      return null;
    }

    const normalized = String(value).trim();
    if (!/^\d+$/.test(normalized)) {
      return null;
    }

    const parsed = Number(normalized);
    return Number.isFinite(parsed) ? parsed : null;
  }
}
