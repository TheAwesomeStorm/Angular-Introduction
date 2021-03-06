import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from '../../shared/components/message/message.module';
import { RouterModule } from '@angular/router';
import { PhotoModule } from '../photo/photo.module';
import { AutoClickModule } from '../../shared/directives/auto-click/auto-click.module';

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
    AutoClickModule,
    CommonModule,
    ReactiveFormsModule,
    MessageModule,
    PhotoModule,
    RouterModule
  ]
})
export class PhotoFormModule { }
