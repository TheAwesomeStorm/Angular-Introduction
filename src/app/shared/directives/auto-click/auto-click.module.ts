import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoClickDirective } from './auto-click.directive';



@NgModule({
  declarations: [
    AutoClickDirective
  ],
  exports: [
    AutoClickDirective
  ],
  imports: [
    CommonModule
  ]
})
export class AutoClickModule { }
