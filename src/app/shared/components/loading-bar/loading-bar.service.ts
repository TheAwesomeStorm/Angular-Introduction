import { Injectable } from '@angular/core';
import { startWith, Subject } from 'rxjs';
import { LoadingBarStatus } from './loading-bar-status';

@Injectable({
  providedIn: 'root'
})
export class LoadingBarService {

  loadingStatus: Subject<LoadingBarStatus> = new Subject<LoadingBarStatus>();

  constructor() { }

  GetLoadingStatus() {
    return this.loadingStatus.asObservable()
      .pipe(startWith(LoadingBarStatus.stopped));
  }

  StartLoading() {
    this.loadingStatus.next(LoadingBarStatus.loading);
  }

  StopLoading() {
    this.loadingStatus.next(LoadingBarStatus.stopped)
  }
}
