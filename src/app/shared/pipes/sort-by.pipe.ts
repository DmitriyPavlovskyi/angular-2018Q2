import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe  implements PipeTransform {
  transform(courses: any[], field: string, sortBy: string): any[] {
    if (sortBy.toLowerCase() === 'ascending') {
      courses.sort((a: number, b: number) => {
        if (a[field] < b[field]) {
          return -1;
        } else if (a[field] > b[field]) {
          return 1;
        } else {
          return 0;
        }
      });
    } else if (sortBy.toLowerCase() === 'descending') {
      courses.sort((a: number, b: number) => {
        if (a[field] > b[field]) {
          return -1;
        } else if (a[field] < b[field]) {
          return 1;
        } else {
          return 0;
        }
      });
    }

    return courses;
  }
}
