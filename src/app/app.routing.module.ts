import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PhotoListComponent } from './photos/photo-list/photo-list.component'
import { PhotoFormComponent } from './photos/photo-form/photo-form.component'
import { NotFoundComponent } from './errors/not-found/not-found.component'
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver'
import { RequiresLoginGuard } from './core/auth/requires-login.guard';
import { PhotoDescriptionComponent } from './photos/photo-description/photo-description.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(app => app.HomeModule)
  },
  { path: 'user/:userName', component: PhotoListComponent, resolve: {photos: PhotoListResolver} },
  { path: 'p/add', component: PhotoFormComponent, canActivate: [RequiresLoginGuard] },
  { path: 'p/:photoId', component: PhotoDescriptionComponent },
  { path: '**', component: NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
