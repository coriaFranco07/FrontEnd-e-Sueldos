import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  category?: string;
  stock?: number;
  [key: string]: any;
}

export interface PaginatedProductResponse {
  results: Product[];
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/v1/products';

  constructor(private http: HttpClient) {}

  getProducts(page = 1, limit = 10): Observable<PaginatedProductResponse> {
    const params = new HttpParams()
      .set('page', String(page))
      .set('limit', String(limit));
    return this.http.get<PaginatedProductResponse>(this.apiUrl, { params });
  }

  deleteProduct(id: string) {
    return this.http.delete(
      `${this.apiUrl}/${id}`
    );
  }
}

