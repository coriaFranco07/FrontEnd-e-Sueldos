import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-products-entry',
  template: ''
})
export class ProductsEntryComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const user = this.authService.currentUserValue;
    const target = user?.role === 'admin' ? '/products/admin' : '/products/shop';
    this.router.navigateByUrl(target, { replaceUrl: true });
  }
}
