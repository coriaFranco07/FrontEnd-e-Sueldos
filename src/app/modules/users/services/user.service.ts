import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export type UserRole = 'user' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  isEmailVerified: boolean;
}

export interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
  role?: UserRole;
}

export interface UpdateUserRequest {
  name?: string;
  email?: string;
  role?: UserRole;
  password?: string;
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

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  getUsers(page: number, limit: number, sortBy?: string, role?: string, name?: string): Observable<PaginatedResponse<User>> {
    const paramsObj: { [key: string]: string } = {
      page: String(page),
      limit: String(limit),
    };

    if (name && name.trim().length > 0) {
      paramsObj['name'] = name.trim();
      console.log('Agregando name:', name.trim());
    }
    if (role && role.trim().length > 0) {
      paramsObj['role'] = role.trim();
      console.log('Agregando role:', role.trim());
    }
    if (sortBy && sortBy.trim().length > 0) {
      paramsObj['sortBy'] = sortBy.trim();
      console.log('Agregando sortBy:', sortBy.trim());
    }

    console.log('Parametros finales:', paramsObj);

    let httpParams = new HttpParams();
    Object.keys(paramsObj).forEach(key => {
      httpParams = httpParams.set(key, paramsObj[key]);
    });

    return this.http.get<PaginatedResponse<User>>(this.apiUrl, { params: httpParams });
  }

  createUser(userData: CreateUserRequest): Observable<User> {
    return this.http.post<User>(this.apiUrl, userData);
  }

  updateUser(id: string, userData: UpdateUserRequest): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/${id}`, userData);
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
