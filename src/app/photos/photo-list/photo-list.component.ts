import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Photo } from '../photo/photo'
import { Subject } from 'rxjs'

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = []
  filter: string = ''
  debounce: Subject<string> = new Subject<string>()
  constructor (private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data['photos']
  }
  onKeyUp(target: any) {
    if(target instanceof EventTarget) {
      const element = target as HTMLInputElement
      this.filter = element.value
    }
  }
}
