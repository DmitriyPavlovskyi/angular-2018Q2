import { Directive } from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirective {
  constructor() {
    console.log('test directive');
  }
}
