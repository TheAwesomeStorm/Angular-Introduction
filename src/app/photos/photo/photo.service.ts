import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Photo } from './photo'
import { Observable } from 'rxjs'
import { AddPhotoSubmit } from '../photo-form/add-photo-submit';

@Injectable({providedIn: 'root'})
export class PhotoService {
  constructor (private http: HttpClient) {}

  listFromUser(userName: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(`http://localhost:3000/${userName}/photos`)
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams().append('page', page.toString())
    return this.http.get<Photo[]>(`http://localhost:3000/${userName}/photos`, { params })
  }

  UploadPhoto(submit: AddPhotoSubmit) {
    const formData = new FormData();
    formData.append('description', submit.description);
    formData.append('allowComments', submit.allowComments ? 'true' : 'false');
    formData.append('imageFile', submit.file as File);
    return this.http.post(`http://localhost:3000/photos/upload`, formData)
  }
}
