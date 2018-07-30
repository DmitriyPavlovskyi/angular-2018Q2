import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './component/add-course.component';
import { SharedModule } from '@app/shared/shared.module';
import { FeaturesModule } from '@app/features/features.module';

@NgModule({
  imports: [
    CommonModule, SharedModule, FeaturesModule
  ],
  declarations: [AddCourseComponent]
})
export class AddCourseModule { }
