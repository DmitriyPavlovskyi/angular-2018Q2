import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[todoHighlight]'
});

export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
  }
}
