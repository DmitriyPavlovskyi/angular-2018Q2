import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  newCourse = new FormGroup({
    title: new FormControl(null, [ Validators.required, Validators.maxLength(50) ]),
    description: new FormControl(null, [ Validators.required, Validators.maxLength(500) ]),
    length: new FormControl(0, [ Validators.required, Validators.max(600)] ),
    date: new FormControl(null, [ Validators.required ])
  });

  onGetDate(dateValue: string): void {
    this.course.date = parseInt(dateValue, 10);
  }

  onGetDuration(durationValue: string): void {
    this.course.length = parseInt(durationValue, 10);
  }

  constructor(public router: Router, private store: Store<fromRoot.State>) { }

  ngOnInit() {}

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
