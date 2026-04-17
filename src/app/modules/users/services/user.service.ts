import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interfaces basadas en los requerimientos
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  isEmailVerified: boolean;
}

export interface PaginatedResponse<T> {
  results: T[];
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/v1/users';

  constructor(private http: HttpClient) {}

  // Obtener usuarios con paginación y filtros del servidor
  getUsers(page: number, limit: number, sortBy?: string, role?: string, name?: string): Observable<PaginatedResponse<User>> {
    // Construir params objeto siguiendo el patrón del backend
    const paramsObj: { [key: string]: string } = {
      page: String(page),
      limit: String(limit),
    };

    // Solo agregar parámetros opcionales si tienen valor
    if (name && name.trim().length > 0) {
      paramsObj['name'] = name.trim();
      console.log('✅ Agregando name:', name.trim());
    }
    if (role && role.trim().length > 0) {
      paramsObj['role'] = role.trim();
      console.log('✅ Agregando role:', role.trim());
    }
    if (sortBy && sortBy.trim().length > 0) {
      paramsObj['sortBy'] = sortBy.trim();
      console.log('✅ Agregando sortBy:', sortBy.trim());
    }

    console.log('📡 Parámetros finales:', paramsObj);

    // Construir HttpParams
    let httpParams = new HttpParams();
    Object.keys(paramsObj).forEach(key => {
      httpParams = httpParams.set(key, paramsObj[key]);
    });

    return this.http.get<PaginatedResponse<User>>(this.apiUrl, { params: httpParams });
  }

  // Crear usuario
  createUser(userData: Partial<User>): Observable<User> {
    return this.http.post<User>(this.apiUrl, userData);
  }

  // Actualizar usuario
  updateUser(id: string, userData: Partial<User>): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/${id}`, userData);
  }

  // Eliminar usuario
  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}