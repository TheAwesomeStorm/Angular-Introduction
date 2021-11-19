import { Injectable } from '@angular/core';
import { TokenService } from '../token/token-service'
import { Observable, Subject } from 'rxjs'
import { User } from './user'
import jwtDecode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new Subject<User>()

  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() &&
      this.decodeAndNotify()
  }

  setToken(token: string) {
    this.tokenService.setToken(token)
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken() as string
    const user = jwtDecode(token) as User;
    this.userSubject.next(user)
  }

  getUser(): Observable<User> {
    return this.userSubject.asObservable()
  }
}
