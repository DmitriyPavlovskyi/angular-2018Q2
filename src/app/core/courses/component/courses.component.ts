import { Component, OnInit, Input } from '@angular/core';
import { UserData } from '@app/shared/models/user.model';
import { UserService, TodoItemListState } from '@app/core/courses/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  searchValue = '';
  user: UserData;
  state: TodoItemListState;

  constructor(public services: UserService, ) { }

  ngOnInit() {
    this.services.todoItems$.subscribe((newState) => {
      if (!newState) {
        this.services.loadTodoItems();
      }
        this.state = newState;
    });
  }

  handleSearch(newValue) {
    console.log(newValue);

    this.searchValue = newValue;
  }
}
