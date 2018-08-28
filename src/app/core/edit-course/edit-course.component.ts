import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoursesService } from '@app/core/courses/courses.service';
import * as fromRoot from '@app/store/reducers';
import * as coursesActions from '@app/store/actions/courses';
import { TodoListItem } from '@app/shared/models/todo-list-item.model';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  @Input() courses: TodoListItem[];
  public routeParams: any = {};
  public currentCourse: any = {};

  course = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    length: new FormControl(),
    date: new FormControl()
  });

  constructor(
    private route: ActivatedRoute,
    public services: CoursesService,
    public router: Router,
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.store.select(fromRoot.getActiveCourse).subscribe((course) => {
      console.log(course);
      this.currentCourse = course;
    });

    this.store.dispatch(new coursesActions.GetCourseById(this.route.snapshot.params.id));
   }

   handleCancel() {
    console.log('---Edit course. Cancel triggered');
    this.router.navigate(['courses']);
  }

  handleSave(currentCourse) {
    const editedCourse = {
      name: this.currentCourse.name,
      description: this.currentCourse.description,
      duration: this.currentCourse.length,
      creationDate: this.currentCourse.date,
      id: this.currentCourse.id
    };

    this.services.update(this.currentCourse.id, editedCourse);
    console.log('---Edit course. Save triggered, edited course object is: ', this.currentCourse);
    this.router.navigate(['courses']);
  }
}
