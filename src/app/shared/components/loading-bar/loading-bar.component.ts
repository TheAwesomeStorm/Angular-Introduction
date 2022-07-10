import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from './loading-bar.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss']
})
export class LoadingBarComponent implements OnInit {

  loadingStatus$ = new Observable<string>();

  constructor(private loadingBarService: LoadingBarService) { }

  ngOnInit(): void {
    this.loadingStatus$ = this.loadingBarService.GetLoadingStatus()
      .pipe(map(loadingStatus => loadingStatus.valueOf()));
  }

}
