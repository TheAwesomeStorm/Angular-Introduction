import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { Photo } from '../../photo/photo'

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnChanges {
  @Input() photos: Photo[] = []
  rows: Photo[][] = [];
  constructor() { }

  ngOnChanges (changes: SimpleChanges) {
    if(changes['photos']) {
      this.rows = this.groupColumns(this.photos)
    }
  }

  groupColumns(photos: Photo[]) {
    const newRows: Photo[][] = [];
    for(let index = 0; index < photos.length; index+=3) {
      newRows.push(photos.slice(index, index + 3))
    }
    return newRows
  }
}
