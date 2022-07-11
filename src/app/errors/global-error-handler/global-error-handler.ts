import { ErrorHandler, Injectable, Injector } from '@angular/core';
import * as StackTrace from 'stacktrace-js';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { UserService } from '../../core/user/user.service';
import { ServerLogService } from './server-log.service';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) {
  }

  handleError(error: any): void {

    const location = this.injector.get(LocationStrategy);

    const userService = this.injector.get(UserService);

    const serverLogService = this.injector.get(ServerLogService);

    const router = this.injector.get(Router);

    const url = location instanceof PathLocationStrategy ? location.path() : '';

    const userName = userService.getUserName();

    const message = error.message ? error.message : error.toString();

    router.navigate(['/error']).then();

    StackTrace
      .fromError(error)
      .then(stackFrames => {
        const stackAsString = stackFrames.map(stackFrame => stackFrame.toString()).join('\n');
        console.log(message);
        console.log(stackAsString);
        serverLogService.log({ message, url, userName, stack: stackAsString }).subscribe({
          next: () => {
            console.log('Error logged on server');
          },
          error: (err) => {
            console.log(err);
            console.log('Fail to send error log to server');
          }
        });
      })
  }
}
