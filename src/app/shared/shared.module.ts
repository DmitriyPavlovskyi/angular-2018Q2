import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from './directives/directives.module';
import { NameSortingPipe } from './pipes/name.pipe';
import { DurationSortingPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule
  ],
  declarations: [NameSortingPipe, DurationSortingPipe, OrderByPipe],
  exports: [DurationSortingPipe, NameSortingPipe]
})
export class SharedModule { }
