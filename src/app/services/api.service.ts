import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  //Serviço para pegar as roupas salvas
  getClothes() {
    const accessToken = this.authService.getAccessToken();
    let headers = new HttpHeaders();
    if (accessToken) {
      headers = headers.set('Authorization', `Bearer ${accessToken}`);
    }
    return this.http.get(`${this.apiUrl}/api/v1/items/get_item_list`,{ headers });
  }

  getSpecificClothe(id: number) {
    const accessToken = this.authService.getAccessToken();
    let headers = new HttpHeaders();
    if (accessToken) {
      headers = headers.set('Authorization', `Bearer ${accessToken}`);
    }
    return this.http.get(`${this.apiUrl}/api/v1/items/get_item/${id}`,{ headers });
  }

  getDescription(parametro: string) {
    const payload = { input: parametro}
    return this.http.post(`${this.apiUrl}/api/v1/description/description/`, payload);
  }
}