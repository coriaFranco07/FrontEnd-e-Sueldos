import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { ProductService, Product } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  isLoading = false;
  errorMessage = '';

  totalResults = 0;
  pageSize = 10;
  currentPage = 0;

  // Columnas a mostrar — se ajustan dinámicamente según las keys del primer producto
  displayedColumns: string[] = [];

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.productService.getProducts(this.currentPage + 1, this.pageSize).subscribe({
      next: (response) => {
        this.products = response.results;
        this.totalResults = response.totalResults;
        this.isLoading = false;

        // Detectar columnas desde el primer producto, excluyendo 'id'
        if (this.products.length > 0) {
          this.displayedColumns = Object.keys(this.products[0]).filter(k => k !== 'id');
        }
      },
      error: (err) => {
        console.error('Error cargando productos:', err);
        this.errorMessage = 'No se pudieron cargar los productos. Verificá que el servidor esté activo.';
        this.isLoading = false;
      }
    });
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadProducts();
  }

  goBack(): void {
    this.router.navigate(['/principal']);
  }

  formatValue(value: any): string {
    if (value === null || value === undefined) return '—';
    if (typeof value === 'boolean') return value ? 'Sí' : 'No';
    if (typeof value === 'number') return value.toLocaleString('es-AR');
    if (typeof value === 'object') return JSON.stringify(value);
    return String(value);
  }

  formatHeader(key: string): string {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/_/g, ' ')
      .replace(/^./, str => str.toUpperCase())
      .trim();
  }

  editProduct(product: any) {
  console.log("Editar:", product);

  // ejemplo:
  // this.router.navigate(['/products/edit', product.id]);
}

deleteProduct(product: any) {

  const confirmDelete = confirm(
    `¿Eliminar producto "${product.name}"?`
  );

  if (!confirmDelete) return;

  console.log("Eliminar:", product);

  // ejemplo:
  // this.productService.deleteProduct(product.id)
  //   .subscribe(() => this.loadProducts());

}
}