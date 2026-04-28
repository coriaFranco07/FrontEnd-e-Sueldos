import { Injectable } from '@angular/core';
import { CanActivate, CanMatch, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanMatch {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    return this.checkAuthAccess();
  }

  canMatch(route: Route, segments: UrlSegment[]): boolean {
    return this.checkAuthAccess();
  }

  private checkAuthAccess(): boolean {
    if (this.authService.hasValidSession()) {
      return true;
    }
    
    this.router.navigate(['/auth/login']);
    return false;
  }
}
