import { Directive } from '@angular/core';

@Directive({
  selector: '[testDirective]'
});

export class TestDirective {
  constructor() {
    console.log('test directive');
  }
}
