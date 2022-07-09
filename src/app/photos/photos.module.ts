import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotoModule } from './photo/photo.module'
import { PhotoListModule } from './photo-list/photo-list.module'
import { PhotoFormModule } from './photo-form/photo-form.module';

@NgModule({
  declarations: [ ],
  imports: [ CommonModule, PhotoModule, PhotoFormModule, PhotoListModule ]
})
export class PhotosModule {}
