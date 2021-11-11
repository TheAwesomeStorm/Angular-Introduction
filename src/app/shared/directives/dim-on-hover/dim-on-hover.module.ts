import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DimOnHoverDirective } from './dim-on-hover.directive';



@NgModule({
  declarations: [
    DimOnHoverDirective
  ],
  exports: [
    DimOnHoverDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DimOnHoverModule { }
