import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '@app/shared/directives/directives.module';
import { NameSortingPipe } from '@app/shared/pipes/search.pipe';
import { DurationSortingPipe } from '@app/shared/pipes/duration.pipe';
import { SortByPipe } from '@app/shared/pipes/sort-by.pipe';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule
  ],
  declarations: [NameSortingPipe, DurationSortingPipe, SortByPipe],
  exports: [DurationSortingPipe, NameSortingPipe, SortByPipe]
})
export class SharedModule { }
