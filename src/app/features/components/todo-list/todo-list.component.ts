import { Component, OnInit, Input } from '@angular/core';
import { TodoListItem } from '@app/shared/models/todo-list-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() courses: TodoListItem;

  constructor() { }

  ngOnInit() {}

  handleDeleteCourse(id) {
    console.log('---Todo List. Course deletion triggered, course id: ', id);
  }

}
