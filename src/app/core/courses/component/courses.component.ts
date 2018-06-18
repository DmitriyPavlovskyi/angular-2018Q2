import { Component, OnInit } from '@angular/core';
import { UserService } from '../courses.service';
import { TodoListItem } from '@app/shared/models/todo-list-item.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: TodoListItem[];

  constructor(public services: UserService) { }

  ngOnInit() {
    this.courses = this.services.getTodoItems();
  }

}
