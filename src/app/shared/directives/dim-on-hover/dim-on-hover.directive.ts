import { Directive, ElementRef, HostListener } from '@angular/core'

@Directive({
  selector: '[appDimOnHover]'
})
export class DimOnHoverDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mouseover')
  dimOn(): void {
    console.log('dimOn')
  }

  @HostListener('mouseleave')
  dimOff(): void {
    console.log('dimOff')
  }

}
