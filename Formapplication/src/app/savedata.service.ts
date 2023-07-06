import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Register } from './model/Register';

@Injectable({
  providedIn: 'root'
})
export class SavedataService {
  
   apiUrl: string = 'http://localhost:8080';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  createTask(data: Register): Observable<any> {
    let API_URL = `${this.apiUrl}/myapp/savedata`;
    return this.http.post(API_URL, data);
  }
}
