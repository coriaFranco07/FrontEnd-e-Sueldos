import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const user = this.authService.currentUserValue;
    
    // Verifica que exista el usuario y que su rol sea admin
    if (user && user.role === 'admin') {
      return true;
    }

    // Si no es admin, lo devolvemos a una ruta segura
    this.router.navigate(['/']); 
    return false;
  }
}