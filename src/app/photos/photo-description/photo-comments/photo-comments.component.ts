import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoComment } from '../../photo/photo-comment';
import { PhotoService } from '../../photo/photo.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.scss']
})
export class PhotoCommentsComponent implements OnInit {

  @Input() photoId: number = -1;

  commentForm: FormGroup;

  comments$: Observable<PhotoComment[]> | undefined;

  constructor(private photoService: PhotoService, private formBuilder: FormBuilder) {
    this.commentForm = new FormGroup({
      comment: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.comments$ = this.photoService.GetComments(this.photoId);
    this.commentForm = this.formBuilder.group({
      comment: ['', [Validators.maxLength(300), Validators.required]]
    })
  }

  public Validate(name: string, errorName: string): boolean {
    const hasError = this.commentForm.get(name)?.hasError(errorName)
    if (hasError) {return hasError} else {return false}
  }

  Create() {
    const comment = this.commentForm.get('comment')?.value as string;
    this.comments$ =  this.photoService.CreateComment(this.photoId, comment)
      .pipe(switchMap(() => this.photoService.GetComments(this.photoId)))
      .pipe(tap(() => {
        this.commentForm.reset();
      }))
  }
}
