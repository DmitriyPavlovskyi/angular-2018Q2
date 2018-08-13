import { Component, OnInit, Input } from '@angular/core';
import { UserData } from '@app/shared/models/user.model';
import { UserService, TodoItemListState } from '@app/core/courses/courses.service';
import { TodoListItem } from '@app/shared/models/todo-list-item.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
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

    this.services.handleSearch(newValue).subscribe((data: TodoListItem[]) => {
      this.state.list = data;
  });
  }
}
