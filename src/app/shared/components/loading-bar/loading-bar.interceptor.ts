import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoadingBarService } from './loading-bar.service';

@Injectable({ providedIn: 'root' })
export class LoadingBarInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingBarService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(tap(event => {
        if (event instanceof HttpResponse) {
          this.loadingService.StopLoading();
        } else {
          this.loadingService.StartLoading();
        }
      }));
  }
}
