import { Directive, Renderer2, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appTodoHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() courseDate: number;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.hightlightCourseFreshness(this.courseDate);
  }

  private hightlightCourseFreshness(courseDate: number): void {
    const currentDate = new Date().getTime();

    if (courseDate > currentDate) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid blue');
    } else if (courseDate <= currentDate) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid green');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
    }
  }
}
