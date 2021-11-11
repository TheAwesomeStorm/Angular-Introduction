import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list.component'
import { PhotosComponent } from './photos/photos.component'
import { LoadButtonComponent } from './load-button/load-button.component'
import { FilterByDescriptionPipe } from './filter-by-description.pipe'
import { PhotoModule } from '../photo/photo.module'
import { CardModule } from '../../shared/components/card/card.module';
import { SearchComponent } from './search/search.component'
import { DimOnHoverModule } from '../../shared/directives/dim-on-hover/dim-on-hover.module'



@NgModule({
  declarations: [ PhotoListComponent, PhotosComponent, LoadButtonComponent, FilterByDescriptionPipe, SearchComponent ],
  imports: [
    CommonModule, PhotoModule, CardModule, DimOnHoverModule
  ]
})
export class PhotoListModule { }
