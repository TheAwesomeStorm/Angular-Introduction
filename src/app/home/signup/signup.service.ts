import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, ObservableInput } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private api_url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  checkUserNameTaken(userName: string) {
    return this.http.get(this.api_url + '/user/exists/' + userName)
  }
}
