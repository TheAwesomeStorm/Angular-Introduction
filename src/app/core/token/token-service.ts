import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private key: string = 'authToken'

  constructor() { }

  hasToken(): boolean {
    return !!this.getToken()
  }

  setToken(token: string): void {
    window.localStorage.setItem(this.key, token)
  }

  getToken(): string | null {
    return window.localStorage.getItem(this.key)
  }

  removeToken() {
    window.localStorage.removeItem(this.key)
  }
}
