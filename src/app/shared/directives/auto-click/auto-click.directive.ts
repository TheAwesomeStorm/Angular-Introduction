import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlatformDetectorService } from '../../../core/platform-detector/platform-detector.service';

@Directive({
  selector: '[appAutoClick]'
})
export class AutoClickDirective implements OnInit {

  constructor(private element: ElementRef, private platformDetector: PlatformDetectorService) { }

  ngOnInit() {
    this.platformDetector.isPlatformBrowser() && this.element.nativeElement.click();
  }
}
