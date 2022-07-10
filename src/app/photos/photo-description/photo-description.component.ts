import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photo-description',
  templateUrl: './photo-description.component.html',
  styleUrls: ['./photo-description.component.scss']
})
export class PhotoDescriptionComponent implements OnInit {

  photo$: Observable<Photo> | undefined;

  constructor(private route: ActivatedRoute, private photoService: PhotoService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['photoId'];
    this.photo$ = this.photoService.GetById(id)
  }

}
