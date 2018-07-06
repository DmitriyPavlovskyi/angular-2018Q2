import { Injectable } from '@angular/core';
import { UserData } from '@app/shared/models/user.model';
import { TodoListItem } from '@app/shared/models/todo-list-item.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getUserData(): UserData {
    return {
      id: 0,
      firstName: 'John',
      lastName: 'Smith'
    };
  }

  public getTodoItems(): TodoListItem[] {
    return [
      {
        id: 0,
        title: 'Learn HTML',
        creationDate: '06.07.2018',
        duration: 90,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet cursus sit amet.',
      },
      {
        id: 1,
        title: 'CSS Fundamentals',
        creationDate: '21.06.2018',
        duration: 60,
        description: 'Aliquam ultrices sagittis orci a scelerisque purus semper eget. Etiam tempor orci eu lobortis elementum nibh tellus. Eget mauris pharetra et ultrices.',
      },
      {
        id: 2,
        title: 'Webpack Deep Dive',
        creationDate: '06.03.2018',
        duration: 120,
        description: 'Adipiscing tristique risus nec feugiat in fermentum posuere urna.',
      },
      {
        id: 3,
        title: 'JavaScript Essential Training',
        creationDate: '21.06.2018',
        duration: 45,
        description: 'Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Facilisis sed odio morbi quis.',
      },
      {
        id: 4,
        title: 'Learn Angular basics',
        creationDate: '06.07.2018',
        duration: 100,
        description: 'Cursus risus at ultrices mi. Risus quis varius quam quisque id diam vel. Lectus arcu bibendum at varius. Nunc congue nisi vitae suscipit.',
      },
    ];
  }
}
