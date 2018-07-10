import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from './directives/directives.module';
import { NameSortingPipe } from './pipes/search.pipe';
import { DurationSortingPipe } from './pipes/duration.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule
  ],
  declarations: [NameSortingPipe, DurationSortingPipe, SortByPipe],
  exports: [DurationSortingPipe, NameSortingPipe, SortByPipe]
})
export class SharedModule { }
