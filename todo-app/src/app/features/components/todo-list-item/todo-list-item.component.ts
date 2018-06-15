import { Component, OnInit, Input } from '@angular/core';
import { TodoListItem } from '../../../shared/models/todo-list-item.model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
@Input() course: TodoListItem;
  constructor() { }

  ngOnInit() {}

}
