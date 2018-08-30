import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './component/add-course.component';
import { SharedModule } from '@app/shared/shared.module';
import { FeaturesModule } from '@app/features/features.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, SharedModule, FeaturesModule, ReactiveFormsModule
  ],
  declarations: [AddCourseComponent]
})
export class AddCourseModule { }
