import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddPhotoSubmit } from './add-photo-submit';
import { PhotoService } from '../photo/photo.service';
import { Router } from '@angular/router';
import { AlertService } from '../../shared/components/alert/alert.service';
import { AlertType } from '../../shared/components/alert/alert';
import { UserService } from '../../core/user/user.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup;

  file: File | null | undefined = undefined;

  preview: string = '';

  uploadProgress = 0;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) {
    this.photoForm = new FormGroup({
      file: new FormControl(''),
      description: new FormControl(''),
      allowComments: new FormControl(true)
    });
  }

  ngOnInit(): void {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(15)],
      allowComments: [true]
    });
  }

  Validate(name: string, errorName: string): boolean {
    const nameHasError = this.photoForm.get(name)?.hasError(errorName)
    if (nameHasError) { return nameHasError} else { return false }
  }

  SubmitUploadForm() {
    const submitResult: AddPhotoSubmit = {
      file: this.file,
      description: this.photoForm.get('description')?.value,
      allowComments: this.photoForm.get('allowComments')?.value
    }
    this.photoService.UploadPhoto(submitResult)
      .pipe(finalize(() => {
        this.router.navigate(['/user', this.userService.getUserName()]).then();
      }))
      .subscribe({
        next: (event) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.uploadProgress = Math.round(100 * event.loaded / (event.total as number));
          } else if ( event instanceof HttpResponse ) {
            this.alertService.Alert(AlertType.success, "Upload completed.", true)
          }
        },
        error: (err) => {
          console.log(err);
          this.alertService.Alert(AlertType.danger, 'Upload error', true);
        }
      });
  }

  OnUploadFileChange(event: Event) {
    this.file = (event.target as HTMLInputElement)?.files?.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.preview = event.target.result;
    }
    this.file && reader.readAsDataURL(this.file);
  }

}
