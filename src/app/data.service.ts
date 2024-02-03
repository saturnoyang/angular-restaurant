import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://etxu7ssdpj.execute-api.us-east-2.amazonaws.com/rds-practica';

  constructor(private http: HttpClient) { }

  getData(endpoint: string): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.get<any>(url);
  }
  
}
