import { Injectable } from '@angular/core';
import { TokenService } from '../token/token-service'
import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { User } from './user'
import jwtDecode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User | null>(null)
  private userName: string = ''

  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() &&
      this.decodeAndNotify()
  }

  setToken(token: string) {
    this.tokenService.setToken(token)
    this.decodeAndNotify()
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken() as string
    const user = jwtDecode(token) as User;
    this.userName = user.name
    this.userSubject.next(user)
  }

  getUser(): Observable<User | null> {
      return this.userSubject.asObservable()
  }

  logout() {
    this.tokenService.removeToken()
    this.userSubject.next(null)
  }

  public isLogged(): boolean {
    return this.tokenService.hasToken()
  }

  public getUserName() {
    return this.userName
  }
}
