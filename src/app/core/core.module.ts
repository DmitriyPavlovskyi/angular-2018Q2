import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesModule } from './courses/courses.module';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    CommonModule, CoursesModule, HomeModule
  ],
  declarations: [],
  exports: []
})
export class CoreModule { }
