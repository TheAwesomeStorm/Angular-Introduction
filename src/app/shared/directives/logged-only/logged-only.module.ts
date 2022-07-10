import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedOnlyDirective } from './logged-only.directive';



@NgModule({
  declarations: [ LoggedOnlyDirective ],
  exports: [ LoggedOnlyDirective ],
  imports: [
    CommonModule
  ]
})
export class LoggedOnlyModule { }
