import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularIntroduction'
  photos: Photo[] = []
  constructor (http: HttpClient) {
    http.get<Photo[]>('http://localhost:3000/flavio/photos')
      .subscribe(photos => {
        this.photos = photos
      })
  }
}

interface Photo {
  id: number,
  postDate: string,
  url: string,
  description: string,
  allowComments: boolean,
  likes: number,
  comments: number,
  userId: number
}
