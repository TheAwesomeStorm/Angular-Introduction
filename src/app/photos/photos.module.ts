import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { PhotoModule } from './photo/photo.module'
import { PhotoListModule } from './photo-list/photo-list.module'
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoDescriptionModule } from './photo-description/photo-description.module';

@NgModule({
  imports: [ CommonModule, PhotoModule, PhotoFormModule, PhotoListModule, PhotoDescriptionModule ]
})
export class PhotosModule {}
