import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '@app/core/courses/courses.service';
import { TodoListItem } from '@app/shared/models/todo-list-item.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  @Input() courses: TodoListItem[];
  public routeParams: any = {};
  public currentCourse: any = {};

  constructor(private route: ActivatedRoute, public services: UserService, public router: Router) { }

  ngOnInit() {
    this.courses = this.services.getTodoItems();

    this.route.params.subscribe((data) => {
      this.routeParams.id = data['id'];
    });
    this.route.data.subscribe((data) => {
      this.courses.map(course => {
        if (course.id === parseInt(this.routeParams.id, 10)) {
          return this.currentCourse = course;
        }}
      );
    });
   }

   handleCancel() {
    console.log('---Edit course. Cancel triggered');
    this.router.navigate(['courses']);
  }

  handleSave(currentCourse) {debugger;
    const editedCourse = {
      title: this.currentCourse.title,
      description: this.currentCourse.description,
      duration: this.currentCourse.duration,
      creationDate: this.currentCourse.creationDate,
      id: this.currentCourse.id
    };

    this.services.updateTodoItems(this.currentCourse.id, editedCourse);
    console.log('---Edit course. Save triggered, edited course object is: ', this.currentCourse);
    this.router.navigate(['courses']);
  }
// TODO:
// Write save method
}
