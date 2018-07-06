import { Directive, Renderer2, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appTodoHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() courseDate: string;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    console.log('course date');
    this.hightlightCourseFreshness(this.courseDate);

  }

  private hightlightCourseFreshness(courseDate: string): void {
    // let currentDate = new Date();
    // let currentDay = currentDate.getDate();
    // let currentMonth = currentDate.getMonth()+1; //January is 0!
    // let currentYear = currentDate.getFullYear();
    //
    // if (currentDay < 10) {
    //     currentDay = '0' + currentDay;
    // }
    // 
    // if(currentMonth < 10) {
    //     currentMonth = '0' + currentMonth
    // }
    //
    // currentDate = currentDay + '/' + currentMonth + '/' + currentYear;


    if (courseDate === '06.07.2018') {
      this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid green');
    } else if (courseDate === '21.06.2018'){
      this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid red');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
    }
  }
}
