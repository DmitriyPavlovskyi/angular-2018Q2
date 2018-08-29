import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoursesService } from '@app/core/courses/courses.service';
import * as fromRoot from '@app/store/reducers';
import * as coursesActions from '@app/store/actions/courses';
import { TodoListItem } from '@app/shared/models/todo-list-item.model';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  @Input() courses: TodoListItem[];
  public routeParams: any = {};

  course = new FormGroup({
    title: new FormControl('', [ Validators.required, Validators.maxLength(50) ]),
    description: new FormControl('', [ Validators.required, Validators.maxLength(500) ]),
    length: new FormControl('', [ Validators.required, Validators.max(600)] ),
    date: new FormControl('', [ Validators.required ])
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

      if (course) {
        this.course.setValue({
          title: course.name,
          description: course.description,
          length: course.length,
          date: course.date
        });
      }
    });

    this.store.dispatch(new coursesActions.GetCourseById(this.route.snapshot.params.id));
   }

   handleCancel() {
    console.log('---Edit course. Cancel triggered');
    this.router.navigate(['courses']);
  }

  handleSave() {
    const editedCourse = {
      name: this.course.value.name,
      description: this.course.value.description,
      duration: this.course.value.length,
      creationDate: this.course.value.date,
      id: this.route.snapshot.params.id
    };

    this.services.update(this.course.value.id, editedCourse);
    console.log('---Edit course. Save triggered, edited course object is: ', this.course.value);
    this.router.navigate(['courses']);
  }
}
