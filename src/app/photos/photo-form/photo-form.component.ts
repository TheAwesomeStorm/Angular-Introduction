import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddPhotoSubmit } from './add-photo-submit';
import { PhotoService } from '../photo/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup;

  file: File | null | undefined = undefined;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router
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
    this.photoService.UploadPhoto(submitResult).subscribe(() => this.router.navigate(['']));
  }

  OnUploadFileChange(event: Event) {
    this.file = (event.target as HTMLInputElement)?.files?.item(0);
  }

}
