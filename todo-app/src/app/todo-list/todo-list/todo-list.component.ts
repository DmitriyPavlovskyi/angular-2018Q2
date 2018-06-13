import { Component, OnInit } from '@angular/core';
import { TodoListItem } from '../todo-list-item.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  // TodoListItem говорит в каком формате будут данные
  public todoItems: TodoListItem[] = [];

  // Говорим конструктору сходить на TodoService в сервисах
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    // Теперь можем достать наши данные из сервиса
    this.todoItems = this.todoService.getTodoItems();
  }

}
