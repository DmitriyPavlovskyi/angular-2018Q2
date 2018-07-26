import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from '@app/core/courses/component/courses.component';
import { FeaturesModule } from '@app/features/features.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FeaturesModule,
    SharedModule
  ],
  declarations: [CoursesComponent],
  exports: [],
})
export class CoursesModule { }
