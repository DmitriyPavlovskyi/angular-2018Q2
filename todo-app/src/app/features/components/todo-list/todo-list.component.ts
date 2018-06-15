import { Component, OnInit, Input } from '@angular/core';
import { TodoListItem } from '../../../shared/models/todo-list-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() courses: TodoListItem;

  constructor() { }

  ngOnInit() {}

}
