import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000'

  constructor(private  http: HttpClient) { }

  authenticate(userName: string, password: string) {
    this.http.post(this.apiUrl + 'user/login', {userName, password })
  }
}
