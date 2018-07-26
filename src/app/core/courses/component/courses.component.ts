import { Component, OnInit, Input } from '@angular/core';
import { UserData } from '@app/shared/models/user.model';
import { TodoListItem } from '@app/shared/models/todo-list-item.model';
import { UserService } from '@app/core/courses/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  searchValue = '';
  courses: TodoListItem[];
  user: UserData;

  constructor(public services: UserService) { }

  ngOnInit() {
    this.courses = this.services.getTodoItems();
  }

  handleSearch(newValue) {
    console.log(newValue);

    this.searchValue = newValue;
  }
}
