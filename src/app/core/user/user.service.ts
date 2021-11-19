import { Injectable } from '@angular/core';
import { TokenService } from '../token/token-service'
import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { User } from './user'
import jwtDecode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>({id:-1, name:'',email:''})

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
    this.userSubject.asObservable().subscribe(user => console.log(user))
  }

  getUser(): Observable<User> {
    return this.userSubject.asObservable()
  }
}
