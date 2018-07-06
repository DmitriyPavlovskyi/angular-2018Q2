import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appTodoHighlight]'
})
export class HighlightDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    console.log('gadfasd');
    this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid red');
  }
}
