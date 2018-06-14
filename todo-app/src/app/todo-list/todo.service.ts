import { Injectable } from '@angular/core';
// Импортим интерфейсы наших данных
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
        title: 'Install ng-cli',
        creationDate: '05.29.2018',
        duration: 30,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet cursus sit amet.',
      },
      {
        id: 1,
        title: 'Create github repo',
        creationDate: '06.10.2018',
        duration: 20,
        description: 'Aliquam ultrices sagittis orci a scelerisque purus semper eget. Etiam tempor orci eu lobortis elementum nibh tellus. Eget mauris pharetra et ultrices.',
      },
      {
        id: 2,
        title: 'Install dependencies',
        creationDate: '07.14.2018',
        duration: 15,
        description: 'Adipiscing tristique risus nec feugiat in fermentum posuere urna.',
      },
      {
        id: 3,
        title: 'Build basic app',
        creationDate: '07.16.2018',
        duration: 90,
        description: 'Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Facilisis sed odio morbi quis.',
      },
      {
        id: 4,
        title: 'Commit changes',
        creationDate: '08.21.2018',
        duration: 15,
        description: 'Cursus risus at ultrices mi. Risus quis varius quam quisque id diam vel. Lectus arcu bibendum at varius. Nunc congue nisi vitae suscipit.',
      },
    ];
  }
}
