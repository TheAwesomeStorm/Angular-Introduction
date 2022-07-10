import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert, AlertType } from './alert';
import { NavigationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alertSubject: Subject<Alert | null> = new Subject<Alert | null>();

  keepAliveOnNavigation = false;

  constructor(router: Router) {
    router.events.subscribe((event) => {
      if(event instanceof NavigationStart) {
        if (this.keepAliveOnNavigation) {
          this.keepAliveOnNavigation = false;
        } else {
          this.Clear();
        }
      }
    })
  }

  Alert(alertType: AlertType, message: string, keepAliveOnNavigation: boolean = false) {
    this.keepAliveOnNavigation = keepAliveOnNavigation;
    this.alertSubject.next(new Alert(alertType, message));
  }

  GetAlert() {
    return this.alertSubject.asObservable();
  }

  Clear() {
    this.alertSubject.next(null);
  }
}
