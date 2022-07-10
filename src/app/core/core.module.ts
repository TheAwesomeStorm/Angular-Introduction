import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component'
import { RouterModule } from '@angular/router'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { RequestInterceptor } from './auth/request.interceptor';
import { FooterComponent } from './footer/footer.component'
import { AlertModule } from '../shared/components/alert/alert.module';
import { LoadingBarModule } from '../shared/components/loading-bar/loading-bar.module';
import { MenuModule } from '../shared/components/menu/menu.module';
import { LoggedOnlyModule } from '../shared/directives/logged-only/logged-only.module';

@NgModule({
  declarations: [ HeaderComponent, FooterComponent ],
    imports: [
        CommonModule,
        RouterModule,
        AlertModule,
        LoadingBarModule,
        MenuModule
    ],
  exports: [ HeaderComponent, FooterComponent ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
