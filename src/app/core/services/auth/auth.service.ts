import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

// Interfaces rápidas para tipar
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  isEmailVerified: boolean;
}

export interface AuthResponse {
  user: User;
  tokens: {
    access: { token: string };
    refresh: { token: string };
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/v1/auth';

  // Se inicializa en null, pero va a emitir al instante el usuario a quien se suscriba.
  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  
  // Exponemos el subject como un Observable para que los componentes lo lean pero no lo puedan modificar directamente
  public currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) { 
    this.checkTokenInLocalStorage(); // Chequea si el usuario ya estaba logueado al refrescar la página
  }

  // Obtener el valor actual del usuario sin suscribirse 
  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  public hasValidSession(): boolean {
    const token = localStorage.getItem('accessToken');
    const user = this.currentUserSubject.value;

    return Boolean(token && user);
  }

  // Lógica del Login
  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        // El operador 'tap' nos permite ejecutar código secundario (guardar token) sin alterar la respuesta
        tap(response => {
          this.setSession(response);
        })
      );
  }

  // Lógica del Registro
  register(userData: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, userData)
      .pipe(
        tap(response => {
          this.setSession(response);
        })
      );
  }

  // Lógica de Logout (exigido por el interceptor cuando da 401)
  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    
    // Emitimos 'null' para que toda la interfaz se entere de que no hay nadie logueado
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth/login']); // Expulsa al login
  }

  // --- Funciones Privadas de Ayuda ---

  private setSession(authResult: AuthResponse): void {
    // Guardamos los tokens en el localStorage
    localStorage.setItem('accessToken', authResult.tokens.access.token);
    localStorage.setItem('refreshToken', authResult.tokens.refresh.token);
    localStorage.setItem('user', JSON.stringify(authResult.user));
    
    // Avisamos al BehaviorSubject que hay un nuevo usuario logueado!
    this.currentUserSubject.next(authResult.user);
  }

  private checkTokenInLocalStorage(): void {
    const userJson = localStorage.getItem('user');
    const token = localStorage.getItem('accessToken');
    if (userJson && token) {
      this.currentUserSubject.next(JSON.parse(userJson));
      return;
    }

    this.currentUserSubject.next(null);
  }
}
