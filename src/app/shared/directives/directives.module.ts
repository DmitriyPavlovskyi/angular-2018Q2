import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDirective } from '@app/shared/directives/test.directive';
import { HighlightDirective } from '@app/shared/directives/todo-list-item.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [TestDirective, HighlightDirective],
  exports: [TestDirective, HighlightDirective]
})
export class DirectivesModule { }
