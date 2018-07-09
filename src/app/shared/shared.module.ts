import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from './directives/directives.module';
import { NameSortingPipe } from './pipes/name-sorting.pipe';
import { DurationSortingPipe } from './pipes/duration-sorting.pipe';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule
  ],
  declarations: [NameSortingPipe, DurationSortingPipe],
  exports: [DurationSortingPipe]
})
export class SharedModule { }
