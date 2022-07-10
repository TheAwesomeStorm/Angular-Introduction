import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';
import { AlertService } from '../../shared/components/alert/alert.service';
import { AlertType } from '../../shared/components/alert/alert';
import { UserService } from '../../core/user/user.service';

@Component({
  selector: 'app-photo-description',
  templateUrl: './photo-description.component.html',
  styleUrls: ['./photo-description.component.scss']
})
export class PhotoDescriptionComponent implements OnInit {

  photo$: Observable<Photo> | undefined;

  photoId: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params['photoId'] as number;
    this.photo$ = this.photoService.GetById(this.photoId)
    this.photo$.subscribe({
      error: (error) => {
        console.log(error);
        this.router.navigate(['not-found']).then();
      }
    });
  }

  DeletePhoto() {
    this.photoService.DeletePhoto(this.photoId as number)
      .subscribe(
        {
          next: () => {
            this.alertService.Alert(AlertType.success, "Photo removed.", true);
            this.router.navigate(['/user', this.userService.getUserName()]).then();
          },
          error: (error) => {
            console.log(error);
            this.alertService.Alert(AlertType.warning, "Photo could not be removed.");
          }
        }
      );
  }
}
