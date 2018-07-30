import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesModule } from '@app/core/courses/courses.module';
import { HomeModule } from '@app/core/home/home.module';
import { AddCourseModule } from '@app/core/add-course/add-course.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule, CoursesModule, HomeModule, AddCourseModule
  ],
  declarations: [NotFoundComponent],
  exports: []
})
export class CoreModule { }
