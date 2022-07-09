import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-photo',
  templateUrl: 'photo.component.html',
})
export class PhotoComponent {
  private _url = '';
  @Input() set url(url: string) {
    if (url.startsWith('data')) {
      this._url = url;
      return;
    }
    this._url = 'http://localhost:3000/imgs/' + url;
  }
  get url() {
    return this._url;
  }
  @Input() description = ''
}
