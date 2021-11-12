import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000'

  constructor(private  http: HttpClient) { }

  authenticate(userName: string, password: string) {
    return this.http.post(this.apiUrl + '/user/login', {userName, password }, {observe: 'response'})
                    .pipe(tap(
                      res => {
                        const authToken = res.headers.get('x-access-token')
                        console.log(`User ${userName} authenticated with token ${authToken}`)
                      }
                    ))
  }
}
