// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, ApiListResponse } from '../responses/api.models';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Base URL for the API. Update this as per your API endpoint.
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Get one item by ID
  getOne<T>(endpoint: string, id: number | string): Observable<ApiResponse<T>> {
    return this.http.get<ApiResponse<T>>(`${this.baseUrl}${endpoint}/${id}`);
  }

  // Get a list of items
  getAll<T>(endpoint: string): Observable<ApiListResponse<T>> {
    return this.http.get<ApiListResponse<T>>(`${this.baseUrl}${endpoint}`);
  }

  // Create an item
  create<T>(endpoint: string, data: T): Observable<ApiResponse<T>> {
    return this.http.post<ApiResponse<T>>(`${this.baseUrl}${endpoint}`, data);
  }

  // Update an item
  update<T>(endpoint: string, id: number | string, data: T): Observable<ApiResponse<T>> {
    return this.http.put<ApiResponse<T>>(`${this.baseUrl}${endpoint}/${id}`, data);
  }

  // Delete an item
  delete(endpoint: string, id: number | string): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.baseUrl}${endpoint}/${id}`);
  }
}
