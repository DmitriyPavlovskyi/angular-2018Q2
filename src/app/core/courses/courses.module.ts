import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from '@app/core/courses/component/courses.component';
import { FeaturesModule } from '@app/features/features.module';
import { SharedModule } from '@app/shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    FeaturesModule,
    SharedModule,
    NgxSpinnerModule
  ],
  exports: [NgxSpinnerModule],
  declarations: [CoursesComponent]
})
export class CoursesModule { }
