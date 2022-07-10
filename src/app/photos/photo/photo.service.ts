import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Photo } from './photo'
import { catchError, map, Observable, of, throwError } from 'rxjs'
import { AddPhotoSubmit } from '../photo-form/add-photo-submit';
import { PhotoComment } from './photo-comment';

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
    return this.http.post(`http://localhost:3000/photos/upload`, formData, { observe: 'events', reportProgress: true })
  }

  GetById(id: number) {
    return this.http.get<Photo>(`http://localhost:3000/photos/` + id);
  }

  GetComments(photoId: number) {
    return this.http.get<PhotoComment[]>(`http://localhost:3000/photos/` + photoId + '/comments');
  }

  CreateComment(photoId: number, commentText: string) {
    return this.http.post('http://localhost:3000/photos/' + photoId + '/comments', { commentText: commentText })
  }

  DeletePhoto(photoId: number) {
    return this.http.delete('http://localhost:3000/photos/' + photoId);
  }

  LikePhoto(photoId: number) {
    return this.http.post('http://localhost:3000/photos/' + photoId + '/like', {}, { observe: 'response' })
      .pipe(map(response => true))
      .pipe(catchError(err => {
        return err.status === 304 ? of(false) : throwError(err);
      }));
  }
}
