import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subject } from 'rxjs'
import { debounceTime } from 'rxjs'
import { Photo } from '../photo/photo'

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  photos: Photo[] = []
  filter: string = ''
  debounce: Subject<EventTarget | null> = new Subject<EventTarget | null>()

  constructor (private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data['photos']
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(eventTarget => this.onKeyUp(eventTarget))
  }

  ngOnDestroy () {
    this.debounce.unsubscribe()
  }

  onKeyUp(target: EventTarget | null) {
    if(target instanceof EventTarget) {
      const element = target as HTMLInputElement
      this.filter = element.value
    }
  }
}
