import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { HighlightDirective } from '../shared/directives/todo-list-item.directive';
import { TestDirective } from '../shared/directives/test.directive';

@NgModule({
  imports: [
    CommonModule, ComponentsModule
  ],
  declarations: [TestDirective],
  exports: [ComponentsModule]
})
export class FeaturesModule { }
