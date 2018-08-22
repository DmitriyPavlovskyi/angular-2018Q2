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
    this.services.getItemById(this.route.snapshot.params.id).subscribe((data) => {
      this.currentCourse = data;
    });
   }

   handleCancel() {
    console.log('---Edit course. Cancel triggered');
    this.router.navigate(['courses']);
  }

  handleSave(currentCourse) {
    const editedCourse = {
      name: this.currentCourse.name,
      description: this.currentCourse.description,
      duration: this.currentCourse.duration,
      creationDate: this.currentCourse.creationDate,
      id: this.currentCourse.id
    };

    this.services.update(this.currentCourse.id, editedCourse);
    console.log('---Edit course. Save triggered, edited course object is: ', this.currentCourse);
    this.router.navigate(['courses']);
  }
}
