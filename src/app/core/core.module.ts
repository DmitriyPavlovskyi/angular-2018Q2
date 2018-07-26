import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesModule } from '@app/core/courses/courses.module';
import { HomeModule } from '@app/core/home/home.module';
import { AddCourseModule } from '@app/core/add-course/add-course.module';

@NgModule({
  imports: [
    CommonModule, CoursesModule, HomeModule, AddCourseModule
  ],
  declarations: [],
  exports: []
})
export class CoreModule { }
