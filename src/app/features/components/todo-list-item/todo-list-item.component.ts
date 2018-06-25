import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoListItem } from '@app/shared/models/todo-list-item.model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {
@Input() course: TodoListItem;
@Output() deleteItem: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {}

  handleEdit() {
    console.log('---List item. Edit triggered');
  }

  handleDelete() {
    this.deleteItem.emit(this.course.id);
    console.log('---List item. Delete triggered');
  }

}
