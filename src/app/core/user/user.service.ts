import { Injectable } from '@angular/core';
import { TokenService } from '../token/token-service'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private tokenService: TokenService) { }

  setToken(token: string) {
    this.tokenService.setToken(token)
  }

  getUser(): void {}
}
