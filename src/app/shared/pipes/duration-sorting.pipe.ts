import { Pipe, PipeTransform } from '@angular/core';

const min = 60;

@Pipe({
  name: 'durationSorting'
})
export class DurationSortingPipe implements PipeTransform {

  transform(value: number): string {
    const hours = Math.floor(value / min);
    const minutes = value - hours * min;

    return hours ? `${hours}h ${minutes}min` : `${minutes}min`;
  }

}
