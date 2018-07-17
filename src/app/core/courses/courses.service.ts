import { Injectable } from '@angular/core';
import { TodoListItem } from '@app/shared/models/todo-list-item.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getTodoItems(): TodoListItem[] {
    return [
      {
       id: 0,
       title: 'Learn HTML',
       creationDate: 1530870511382,
       duration: 90,
       isTopRated: true,
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet cursus sit amet.',
     },
     {
       id: 1,
       title: 'CSS Fundamentals',
       creationDate: 1530860811382,
       duration: 60,
       isTopRated: false,
       description: 'Aliquam ultrices sagittis orci a scelerisque purus semper eget. Etiam tempor orci eu lobortis elementum nibh tellus. Eget mauris pharetra et ultrices.',
     },
     {
       id: 2,
       title: 'Webpack Deep Dive',
       creationDate: 1530770811382,
       duration: 120,
       isTopRated: true,
       description: 'Adipiscing tristique risus nec feugiat in fermentum posuere urna.',
     },
     {
       id: 3,
       title: 'JavaScript Essential Training',
       creationDate: 1540830811382,
       duration: 45,
       isTopRated: true,
       description: 'Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Facilisis sed odio morbi quis.',
     },
     {
       id: 4,
       title: 'Learn Angular basics',
       creationDate: 1630900811382,
       duration: 100,
       isTopRated: false,
       description: 'Cursus risus at ultrices mi. Risus quis varius quam quisque id diam vel. Lectus arcu bibendum at varius. Nunc congue nisi vitae suscipit.',
     },
    ];
  }
}
