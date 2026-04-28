import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  constructor(private authService: AuthService) {}

  get productsRoute(): string {
    return this.authService.currentUserValue?.role === 'admin' ? '/products/admin' : '/products/shop';
  }
}
