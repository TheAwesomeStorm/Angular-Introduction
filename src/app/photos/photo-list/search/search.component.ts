import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core'
import { debounceTime, Subject } from 'rxjs'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  debounce: Subject<EventTarget | null> = new Subject<EventTarget | null>()
  @Output() onTyping = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(eventTarget => this.onTyping.emit(this.onKeyUp(eventTarget)))
  }

  ngOnDestroy () {
    this.debounce.unsubscribe()
  }

  onKeyUp(target: EventTarget | null): string {
    if(target instanceof EventTarget) {
      const element = target as HTMLInputElement
      return element.value
    } else {
      return ''
    }
  }

}
