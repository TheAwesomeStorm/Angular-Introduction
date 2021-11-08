import { HttpClient } from '@angular/common/http'
import { Photo } from './photo'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'

@Injectable({providedIn: 'root'})
export class PhotoService {
  constructor (private http: HttpClient) {}

  listFromUser(userName: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(`http://localhost:3000/${userName}/photos`)
  }
}
