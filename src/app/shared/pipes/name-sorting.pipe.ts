import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameSorting'
})
export class NameSortingPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
