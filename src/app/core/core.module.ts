import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesModule } from '@app/core/courses/courses.module';
import { HomeModule } from '@app/core/home/home.module';
import { AddCourseModule } from '@app/core/add-course/add-course.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { SharedModule } from '@app/shared/shared.module';
import { FeaturesModule } from '@app/features/features.module';

@NgModule({
  imports: [
    CommonModule, CoursesModule, HomeModule, AddCourseModule, SharedModule, FeaturesModule
  ],
  declarations: [NotFoundComponent, EditCourseComponent],
  exports: []
})
export class CoreModule { }
