import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth/auth.service';
import { MercadoPagoPreferencePayload, ProductService } from './product.service';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-products-checkout',
  templateUrl: './products-checkout.component.html',
  styleUrls: ['./products-checkout.component.css']
})
export class ProductsCheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];
  isPaying = false;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private productService: ProductService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadCart();

    if (this.cartItems.length === 0) {
      this.router.navigate(['/products/shop']);
    }
  }

  loadCart(): void {
    const rawCart = localStorage.getItem('shopCart');
    this.cartItems = rawCart ? JSON.parse(rawCart) : [];
  }

  get subtotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  get totalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  formatPrice(price: number): string {
    return price?.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2
    }) ?? '-';
  }

  goBack(): void {
    this.router.navigate(['/products/shop']);
  }

  pay(): void {
    if (this.cartItems.length === 0 || this.isPaying) {
      return;
    }

    this.isPaying = true;

    this.productService.createMercadoPagoPreference(this.buildPreferencePayload())
      .pipe(finalize(() => {
        this.isPaying = false;
      }))
      .subscribe({
        next: (response) => {
          const checkoutUrl = response.initPoint || response.sandboxInitPoint;

          if (!checkoutUrl) {
            this.snackBar.open('No se recibio una URL valida de Mercado Pago.', 'Cerrar', {
              duration: 4000
            });
            return;
          }

          window.location.href = checkoutUrl;
        },
        error: (error) => {
          console.error('Error creando preferencia de Mercado Pago:', error);
          this.snackBar.open(
            error?.error?.message || 'No se pudo iniciar el pago con Mercado Pago.',
            'Cerrar',
            { duration: 4500 }
          );
        }
      });
  }

  private buildPreferencePayload(): MercadoPagoPreferencePayload {
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

  private buildExternalReference(): string {
    return `ORDER-${Date.now()}`;
  }

  private buildPayer(user: { name?: string; email?: string } | null): MercadoPagoPreferencePayload['payer'] | null {
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
}
