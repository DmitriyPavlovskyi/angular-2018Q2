import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    this.course.creationDate = parseInt(dateValue, 10);
  }

  onGetDuration(durationValue: string): void {
    this.course.duration = parseInt(durationValue, 10);
  }

  constructor(public router: Router) { }

  ngOnInit() {
    this.course = {
      title: '',
      description: '',
      creationDate: 0,
      duration: 0,
      authors: ''
    };
  }

  handleCancel() {
    console.log('---Add course. Cancel triggered');
    this.router.navigate(['courses']);
  }

  handleSave() {
    console.log('---Add course. Save triggered, new course object is: ', this.course);
    // this.router.navigate(['courses']);
  }

}
