import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home.component'
import { SignInComponent } from './sign-in/sign-in.component'
import { SignupComponent } from './signup/signup.component'
import { RedirectIfLoggedGuard } from '../core/auth/redirect-if-logged.guard'

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [RedirectIfLoggedGuard], children: [
      { path: '', component: SignInComponent },
      { path: 'signup', component: SignupComponent }
    ] }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
