import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MessageModule } from '../shared/components/message/message.module'
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home.component'
import { HomeRoutingModule } from './home.routing.module'



@NgModule({
  declarations: [
    SignInComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MessageModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
