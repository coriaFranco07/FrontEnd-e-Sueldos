import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  isEmailVerified: boolean;
}

export interface UpdateProfileRequest {
  name?: string;
  email?: string;
  password?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://localhost:3000/v1/users';

  constructor(private http: HttpClient) {}

  getProfile(userId: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${userId}`);
  }

  updateProfile(userId: string, body: UpdateProfileRequest): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/${userId}`, body);
  }
}