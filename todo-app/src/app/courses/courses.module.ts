import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { TodoListModule } from '../todo-list/todo-list.module';
import { ToolboxComponent } from './toolbox/toolbox.component';

@NgModule({
  imports: [
    CommonModule,
    TodoListModule
  ],
  declarations: [CoursesComponent, ToolboxComponent],
  exports: [TodoListModule],
})
export class CoursesModule { }
