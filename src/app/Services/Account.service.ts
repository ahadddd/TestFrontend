import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = `https://localhost:7262`;

constructor(private http: HttpClient) { }

}
