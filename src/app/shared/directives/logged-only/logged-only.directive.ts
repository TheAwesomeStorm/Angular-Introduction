import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { UserService } from '../../../core/user/user.service';

@Directive({
  selector: '[appLoggedOnly]'
})
export class LoggedOnlyDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2, private userService: UserService) { }

  ngOnInit() {
    !this.userService.isLogged() && this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
  }

}
