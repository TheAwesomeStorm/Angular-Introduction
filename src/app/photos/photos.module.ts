import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http';
import { PhotoComponent } from './photo/photo.component'
import { PhotoListComponent } from './photo-list/photo-list.component'
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescriptionPipe } from './photo-list/filter-by-description.pipe';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component'
import { PhotoModule } from './photo/photo.module'
import { PhotoListModule } from './photo-list/photo-list.module'

@NgModule({
  declarations: [ PhotoFormComponent ],
  imports: [ CommonModule, PhotoModule, PhotoListModule ]
})
export class PhotosModule {}
