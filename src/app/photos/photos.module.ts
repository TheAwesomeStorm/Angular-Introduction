import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotoModule } from './photo/photo.module'
import { PhotoListModule } from './photo-list/photo-list.module'

@NgModule({
  declarations: [ PhotoFormComponent ],
  imports: [ CommonModule, PhotoModule, PhotoListModule ]
})
export class PhotosModule {}
