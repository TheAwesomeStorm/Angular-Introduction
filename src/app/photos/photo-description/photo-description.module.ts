import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDescriptionComponent } from './photo-description.component';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from '../../shared/components/message/message.module';
import { PhotoOwnershipDirective } from './directives/photo-ownership.directive';
import { LoggedOnlyModule } from '../../shared/directives/logged-only/logged-only.module';



@NgModule({
  declarations: [ PhotoDescriptionComponent, PhotoCommentsComponent, PhotoOwnershipDirective ],
  exports: [ PhotoDescriptionComponent, PhotoCommentsComponent ],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    MessageModule,
    LoggedOnlyModule
  ]
})
export class PhotoDescriptionModule { }
