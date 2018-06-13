import { Injectable } from '@angular/core';
import { TodoListItem } from './todo-list-item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  public getTodoItems(): TodoListItem[] {
    return [
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
  }
}
