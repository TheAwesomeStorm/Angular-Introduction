import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core'

@Directive({
  selector: '[appDimOnHover]'
})
export class DimOnHoverDirective {

  @Input() brightness: string = '70%'

  constructor(
    private element: ElementRef,
    private render: Renderer2
  ) { }

  @HostListener('mouseover')
  dimOn(): void {
    this.render.setStyle(this.element.nativeElement, 'filter', `brightness(${this.brightness})`)
  }

  @HostListener('mouseleave')
  dimOff(): void {
    this.render.setStyle(this.element.nativeElement, 'filter', 'brightness(100%)')
  }

}
