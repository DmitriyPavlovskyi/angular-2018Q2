import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBy'
})
export class NameSortingPipe implements PipeTransform {

  transform(courses: any[], searchString: string): any[] {
    let filteredCourses;

    if (!searchString) {
      return courses;
    }

    filteredCourses = courses.filter(course => course.title.toLowerCase().includes(searchString.toLowerCase()));

    return filteredCourses;
  }

}
