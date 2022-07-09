import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from '../../shared/components/message/message.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MessageModule,
    RouterModule
  ]
})
export class PhotoFormModule { }
