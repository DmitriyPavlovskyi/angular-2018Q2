import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './component/courses.component';
import { FeaturesModule } from '@app/features/features.module';

@NgModule({
  imports: [
    CommonModule,
    FeaturesModule
  ],
  declarations: [CoursesComponent],
  exports: [],
})
export class CoursesModule { }
