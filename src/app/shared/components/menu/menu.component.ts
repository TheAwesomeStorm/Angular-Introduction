import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  display = false;

  constructor() { }

  ngOnInit(): void {
  }

  ToggleDisplay() {
    this.display = !this.display;
  }

}
