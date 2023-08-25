
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  public apiUrl = `https://gorest.co.in/public/v2/users`;
  constructor(private http: HttpClient) {}
  getEmployees(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
