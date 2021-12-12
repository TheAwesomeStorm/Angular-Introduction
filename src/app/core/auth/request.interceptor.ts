import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent
} from '@angular/common/http'
import { Observable } from 'rxjs';
import { TokenService } from '../token/token-service'

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler):
    Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>>
  {
    if (this.tokenService.hasToken()) {
      const token = this.tokenService.getToken() as string
      request = request.clone({
        setHeaders: {
          'x-access-token': token
        }
      })
    }
    return next.handle(request);
  }
}
