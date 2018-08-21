import { Component, OnInit, Input } from '@angular/core';
import { UserData } from '@app/shared/models/user.model';
import { UserService, TodoItemListState } from '@app/core/courses/courses.service';
import { TodoListItem } from '@app/shared/models/todo-list-item.model';
import { Store, select } from '@ngrx/store';
import { AppState } from '@app/store/reducers/user';
import * as userReducer from '../../../store/reducers/user';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  user: UserData;
  state: TodoItemListState;

  constructor(public services: UserService, private store: Store<AppState>) { }

  ngOnInit() {
    this.services.todoItems$.subscribe((newState) => {
      if (!newState) {
        this.services.loadTodoItems();
      }
        this.state = newState;
    });

    this.store.pipe(select(userReducer.getUser))
    .subscribe(user => {
      console.log(user);
      debugger;
    });
  }

  handleSearch(newValue) {
    this.services.search(newValue).subscribe((data: any) => {
      this.state.list = data;
    });
  }
}
