import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '@app/shared/directives/directives.module';
import { NameSortingPipe } from '@app/shared/pipes/search.pipe';
import { DurationSortingPipe } from '@app/shared/pipes/duration.pipe';
import { SortByPipe } from '@app/shared/pipes/sort-by.pipe';
import { DateComponent } from './components/date/date.component';
import { DurationComponent } from './components/duration/duration.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    FormsModule
  ],
  declarations: [NameSortingPipe, DurationSortingPipe, SortByPipe, DateComponent, DurationComponent],
  exports: [DurationSortingPipe, NameSortingPipe, SortByPipe, DateComponent, DurationComponent, FormsModule]
})
export class SharedModule { }
