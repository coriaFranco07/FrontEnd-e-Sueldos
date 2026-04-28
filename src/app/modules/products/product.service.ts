import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  category?: string;
  stock?: number;
  image?: string;
  [key: string]: any;
}

export interface ProductUpsertPayload {
  name: string;
  price: number;
  description?: string;
  category?: string;
  stock?: number;
  imageFile?: File | null;
}

export interface PaginatedProductResponse {
  results: Product[];
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
}

export interface ProductQueryParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  name?: string;
  category?: string;
  stockStatus?: 'all' | 'in' | 'low' | 'out';
}

export interface MercadoPagoPreferenceItem {
  id?: string;
  title: string;
  description?: string;
  quantity: number;
  unit_price: number;
  currency_id?: string;
  picture_url?: string;
  category_id?: string;
}

export interface MercadoPagoPreferencePayer {
  name?: string;
  surname?: string;
  email?: string;
}

export interface MercadoPagoPreferencePayload {
  external_reference?: string;
  payer?: MercadoPagoPreferencePayer;
  items: MercadoPagoPreferenceItem[];
}

export interface MercadoPagoPreferenceResponse {
  preferenceId: string;
  initPoint: string;
  sandboxInitPoint?: string;
  publicKey?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/v1/products';
  private apiBaseUrl = this.apiUrl.replace(/\/v1\/products$/, '');

  constructor(private http: HttpClient) {}

  getProducts(query: ProductQueryParams = {}): Observable<PaginatedProductResponse> {
    const paramsObj: { [key: string]: string } = {
      page: String(query.page ?? 1),
      limit: String(query.limit ?? 12),
    };

    if (query.name?.trim()) {
      paramsObj['name'] = query.name.trim();
    }

    if (query.category?.trim()) {
      paramsObj['category'] = query.category.trim();
    }

    if (query.sortBy?.trim()) {
      paramsObj['sortBy'] = query.sortBy.trim();
    }

    if (query.stockStatus && query.stockStatus !== 'all') {
      paramsObj['stockStatus'] = query.stockStatus;
    }

    let params = new HttpParams();
    Object.keys(paramsObj).forEach(key => {
      params = params.set(key, paramsObj[key]);
    });

    return this.http
      .get<PaginatedProductResponse>(this.apiUrl, { params })
      .pipe(
        map(response => ({
          ...response,
          results: response.results.map((p: any) => this.normalizeProduct(p))
        }))
      );
  }

  getProduct(id: string): Observable<Product> {
    return this.http
      .get<Product>(`${this.apiUrl}/${id}`)
      .pipe(
        map((p: any) => this.normalizeProduct(p))
      );
  }

  createProduct(data: ProductUpsertPayload): Observable<Product> {
    return this.http
      .post<Product>(this.apiUrl, this.buildPayload(data))
      .pipe(map((p: any) => this.normalizeProduct(p)));
  }

  updateProduct(id: string, data: ProductUpsertPayload): Observable<Product> {
    return this.http
      .patch<Product>(`${this.apiUrl}/${id}`, this.buildPayload(data))
      .pipe(map((p: any) => this.normalizeProduct(p)));
  }

  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  createMercadoPagoPreference(payload: MercadoPagoPreferencePayload): Observable<MercadoPagoPreferenceResponse> {
    return this.http.post<MercadoPagoPreferenceResponse>(
      `${this.apiBaseUrl}/v1/payments/mercado-pago/preference`,
      payload
    );
  }

  getImageUrl(imagePath?: string | null): string | null {
    if (!imagePath) {
      return null;
    }

    if (/^https?:\/\//i.test(imagePath)) {
      return imagePath;
    }

    return `${this.apiBaseUrl}${imagePath.startsWith('/') ? imagePath : `/${imagePath}`}`;
  }

  private normalizeProduct(product: any): Product {
    return {
      ...product,
      id: product._id || product.id
    };
  }

  private buildPayload(data: ProductUpsertPayload): ProductUpsertPayload | FormData {
    const payload: ProductUpsertPayload = {
      name: data.name,
      price: data.price,
      description: data.description,
      category: data.category,
      stock: data.stock,
      imageFile: data.imageFile ?? null
    };

    const hasImage = payload.imageFile instanceof File;

    if (!hasImage) {
      delete payload.imageFile;
      Object.keys(payload).forEach(key => {
        const typedKey = key as keyof ProductUpsertPayload;
        if (payload[typedKey] === '' || payload[typedKey] === null || payload[typedKey] === undefined) {
          delete payload[typedKey];
        }
      });
      return payload;
    }

    const formData = new FormData();
    formData.append('name', payload.name);
    formData.append('price', String(payload.price));

    if (payload.description) {
      formData.append('description', payload.description);
    }
    if (payload.category) {
      formData.append('category', payload.category);
    }
    if (payload.stock !== null && payload.stock !== undefined) {
      formData.append('stock', String(payload.stock));
    }
    if (payload.imageFile) {
      formData.append('image', payload.imageFile);
    }

    return formData;
  }
}
