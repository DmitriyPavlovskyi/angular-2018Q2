import { Component, OnInit } from '@angular/core';
import { TodoListItem } from '../todo-list-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  // TodoListItem говорит в каком формате будут данные
  public todoItems: TodoListItem[] = [
    {
      id: 0,
      title: 'Install ng-cli'
    },
    {
      id: 1,
      title: 'Create github repo'
    },
    {
      id: 2,
      title: 'Install dependencies'
    },
    {
      id: 3,
      title: 'Build basic app'
    },
    {
      id: 4,
      title: 'Commit changes'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
