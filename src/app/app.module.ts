import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module'
import { AppRoutingModule } from './app.routing.module'
import { ErrorsModule } from './errors/errors.module';
import { CardComponent } from './shared/components/card/card.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    ErrorsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
