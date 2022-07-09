import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDescriptionComponent } from './photo-description.component';
import { PhotoModule } from '../photo/photo.module';



@NgModule({
  declarations: [ PhotoDescriptionComponent ],
  exports: [ PhotoDescriptionComponent ],
  imports: [
    CommonModule,
    PhotoModule
  ]
})
export class PhotoDescriptionModule { }
