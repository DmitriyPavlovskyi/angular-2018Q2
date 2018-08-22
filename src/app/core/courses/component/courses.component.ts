import { Component, OnInit, Input } from '@angular/core';
import { UserData } from '@app/shared/models/user.model';
import { Store } from '@ngrx/store';
import * as fromRoot from '@app/store/reducers';
import { CoursesService, TodoItemListState } from '@app/core/courses/courses.service';
import { TodoListItem } from '@app/shared/models/todo-list-item.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  user: UserData;
  state: TodoItemListState;
  courses: TodoListItem[];

  constructor(public services: CoursesService, private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.store.select(fromRoot.getCourses).subscribe((courses) => {
      console.log(courses);
      this.courses = courses;
    });

    this.services.todoItems$.subscribe((newState) => {
      if (!newState) {
        this.services.loadTodoItems();
      }
        this.state = newState;
    });
  }

  handleSearch(newValue) {
    this.services.search(newValue).subscribe((data: any) => {
      this.state.list = data;
    });
  }
}
