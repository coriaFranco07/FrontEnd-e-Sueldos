import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ProductService, Product } from './product.service';

type StockFilterValue = 'all' | 'in' | 'low' | 'out';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-products-shop',
  templateUrl: './products-shop.component.html',
  styleUrls: ['./products-shop.component.css']
})
export class ProductsShopComponent implements OnInit {
  products: Product[] = [];
  isLoading = false;
  errorMessage = '';

  totalResults = 0;
  pageSize = 12;
  currentPage = 0;
  cartCount = 0;
  cartItems: CartItem[] = [];

  readonly categories = [
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

  readonly sortOptions = [
    { value: 'createdAt:desc', label: 'Más recientes' },
    { value: 'name:asc', label: 'Nombre (A-Z)' },
    { value: 'name:desc', label: 'Nombre (Z-A)' },
    { value: 'price:asc', label: 'Precio: menor a mayor' },
    { value: 'price:desc', label: 'Precio: mayor a menor' },
    { value: 'stock:desc', label: 'Mayor stock' }
  ];

  readonly stockOptions: Array<{ value: StockFilterValue; label: string }> = [
    { value: 'all', label: 'Todos' },
    { value: 'in', label: 'En stock' },
    { value: 'low', label: 'Stock bajo' },
    { value: 'out', label: 'Sin stock' }
  ];

  searchControl = new FormControl('', { nonNullable: true });
  categoryFilter = new FormControl('all', { nonNullable: true });
  stockFilter = new FormControl<StockFilterValue>('all', { nonNullable: true });
  sortControl = new FormControl('createdAt:desc', { nonNullable: true });

  constructor(
    private productService: ProductService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setupFilters();
    this.loadProducts();
    this.syncCartState();
  }

  setupFilters(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(() => {
      this.currentPage = 0;
      this.loadProducts();
    });

    this.categoryFilter.valueChanges.pipe(distinctUntilChanged()).subscribe(() => {
      this.currentPage = 0;
      this.loadProducts();
    });

    this.stockFilter.valueChanges.pipe(distinctUntilChanged()).subscribe(() => {
      this.currentPage = 0;
      this.loadProducts();
    });

    this.sortControl.valueChanges.pipe(distinctUntilChanged()).subscribe(() => {
      this.currentPage = 0;
      this.loadProducts();
    });
  }

  loadProducts(): void {
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
      next: (response) => {
        const filteredResults = this.applyClientSideFallbackFilters(response.results);
        this.products = filteredResults;
        this.totalResults = this.shouldUseFilteredCount() ? filteredResults.length : response.totalResults;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error cargando productos:', err);
        this.errorMessage = 'No se pudieron cargar los productos. Verificá que el servidor esté activo.';
        this.isLoading = false;
      }
    });
  }

  applyClientSideFallbackFilters(products: Product[]): Product[] {
    const searchTerm = this.searchControl.value.trim().toLowerCase();
    const selectedCategory = this.categoryFilter.value;
    const selectedStock = this.stockFilter.value;

    return products.filter(product => {
      const matchesSearch = !searchTerm || [product.name, product.description, product.category]
        .filter(Boolean)
        .some(value => String(value).toLowerCase().includes(searchTerm));

      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesStock = selectedStock === 'all' || this.getStockStatus(product.stock) === selectedStock;
      return matchesSearch && matchesCategory && matchesStock;
    });
  }

  shouldUseFilteredCount(): boolean {
    return !!this.searchControl.value.trim()
      || this.categoryFilter.value !== 'all'
      || this.stockFilter.value !== 'all';
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadProducts();
  }

  clearFilters(): void {
    this.searchControl.setValue('', { emitEvent: false });
    this.categoryFilter.setValue('all', { emitEvent: false });
    this.stockFilter.setValue('all', { emitEvent: false });
    this.sortControl.setValue('createdAt:desc', { emitEvent: false });
    this.currentPage = 0;
    this.loadProducts();
    this.snackBar.open('Filtros limpiados', 'Cerrar', { duration: 2000 });
  }

  addToCart(product: Product): void {
    const cart = this.getCart();
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    });
    this.saveCart(cart);
    this.snackBar.open(`${product.name} agregado al carrito`, 'Cerrar', { duration: 2200 });
  }

  incrementQuantity(product: Product): void {
    const cart = this.getCart();
    const item = cart.find(entry => entry.id === product.id);
    if (!item) {
      this.addToCart(product);
      return;
    }

    const stock = product.stock ?? Number.MAX_SAFE_INTEGER;
    if (item.quantity >= stock) {
      this.snackBar.open('No podés agregar más unidades que el stock disponible', 'Cerrar', { duration: 2200 });
      return;
    }

    item.quantity += 1;
    this.saveCart(cart);
  }

  decrementQuantity(product: Product): void {
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

  removeFromCart(product: Product): void {
    const cart = this.getCart().filter(item => item.id !== product.id);
    this.saveCart(cart);
    this.snackBar.open(`${product.name} quitado del carrito`, 'Cerrar', { duration: 2000 });
  }

  clearCart(): void {
    localStorage.removeItem('shopCart');
    this.syncCartState();
    this.snackBar.open('Carrito vaciado', 'Cerrar', { duration: 2000 });
  }

  getCart(): CartItem[] {
    const rawCart = localStorage.getItem('shopCart');
    return rawCart ? JSON.parse(rawCart) : [];
  }

  saveCart(cart: CartItem[]): void {
    localStorage.setItem('shopCart', JSON.stringify(cart));
    this.syncCartState();
  }

  syncCartState(): void {
    this.cartItems = this.getCart();
    this.cartCount = this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getProductQuantity(productId: string): number {
    return this.cartItems.find(item => item.id === productId)?.quantity ?? 0;
  }

  get cartSubtotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  goBack(): void {
    this.router.navigate(['/principal']);
  }

  goToCheckout(): void {
    this.router.navigate(['/products/checkout']);
  }

  getStockStatus(stock: number | undefined): 'unknown' | 'out' | 'low' | 'in' {
    if (stock === undefined || stock === null) return 'unknown';
    if (stock === 0) return 'out';
    if (stock < 10) return 'low';
    return 'in';
  }

  getStockLabel(stock: number | undefined): string {
    if (stock === undefined || stock === null) return 'Sin info';
    if (stock === 0) return 'Sin stock';
    if (stock < 10) return `Solo ${stock} disponibles`;
    return `${stock} en stock`;
  }

  formatPrice(price: number): string {
    return price?.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2
    }) ?? '-';
  }

  getProductImageUrl(product: Product): string | null {
    return this.productService.getImageUrl(product.image);
  }

  get activeFiltersCount(): number {
    let count = 0;
    if (this.searchControl.value.trim()) count += 1;
    if (this.categoryFilter.value !== 'all') count += 1;
    if (this.stockFilter.value !== 'all') count += 1;
    if (this.sortControl.value !== 'createdAt:desc') count += 1;
    return count;
  }
}
