import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesModule } from '@app/core/courses/courses.module';
import { HomeModule } from '@app/core/home/home.module';

@NgModule({
  imports: [
    CommonModule, CoursesModule, HomeModule
  ],
  declarations: [],
  exports: []
})
export class CoreModule { }
