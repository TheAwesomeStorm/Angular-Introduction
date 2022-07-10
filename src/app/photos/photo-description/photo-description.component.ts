import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  photoId: number | undefined;

  constructor(private route: ActivatedRoute, private photoService: PhotoService, private router: Router) { }

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params['photoId'] as number;
    this.photo$ = this.photoService.GetById(this.photoId)
  }

  DeletePhoto() {
    this.photoService.DeletePhoto(this.photoId as number)
      .subscribe(() => {
        this.router.navigate(['']).then();
      });
  }
}
