import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .pipe(
        map(() => this.activatedRoute)
      )
      .pipe(
        map(activatedRoute => {
          while(activatedRoute.firstChild) activatedRoute = activatedRoute.firstChild;
          return activatedRoute;
        })
      )
      .pipe(
        switchMap(activatedRoute => activatedRoute.data)
      )
      .subscribe(data => this.titleService.setTitle(data['title']))
  }
}
