import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Photo } from '../../photo/photo';
import { UserService } from '../../../core/user/user.service';

@Directive({
  selector: '[appPhotoOwnership]'
})
export class PhotoOwnershipDirective implements OnInit {

  @Input() photo: Photo | undefined;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      if (user?.id !== this.photo?.userId) {
        this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
      }
    })
  }

}
