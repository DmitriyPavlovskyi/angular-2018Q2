import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '@app/store/reducers';
import * as coursesActions from '@app/store/actions/courses';
import { NewCourse } from './new-course.model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  course: NewCourse;
  titleValue: string;
  descriptionValue: string;
  authorsValue: string;

  onGetDate(dateValue: string): void {
    this.course.date = parseInt(dateValue, 10);
  }

  onGetDuration(durationValue: string): void {
    this.course.length = parseInt(durationValue, 10);
  }

  constructor(public router: Router, private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.course = {
      name: '',
      description: '',
      date: 0,
      length: 0,
      authors: '',
      isTopRated: false,
    };
  }

  handleCancel() {
    console.log('---Add course. Cancel triggered');
    this.router.navigate(['courses']);
  }

  handleSave() {
    console.log('---Add course. Save triggered, new course object is: ', this.course);
    this.store.dispatch(new coursesActions.AddNewCourse(this.course));
    this.router.navigate(['courses']);
  }

}
