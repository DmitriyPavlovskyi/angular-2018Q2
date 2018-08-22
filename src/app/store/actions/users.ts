import { Action } from '@ngrx/store';
import { TodoListItem } from '@app/shared/models/todo-list-item.model';

export const LOAD_USERS = 'LOAD_USERS';

export class LoadUsers implements Action {
    readonly type = LOAD_USERS;

    constructor() { }
}

// export class AddNewCourse implements Action {
//   readonly type = ADD_NEW_COURSE;

//   constructor(public payload) { }
// }

// export class AddOne implements Action {
//   readonly type = ADD_ONE;

//   constructor(public payload: Film) { }
// }

// export type Action = AddOne | Select;

export type Action = LoadUsers;
