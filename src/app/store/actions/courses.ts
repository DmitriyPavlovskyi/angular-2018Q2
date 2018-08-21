import { Action } from '@ngrx/store';
import { TodoListItem } from '@app/shared/models/todo-list-item.model';

export const LOAD_COURSES = 'LOAD_COURSES';

export class LoadCourses implements Action {
    readonly type = LOAD_COURSES;

    constructor() { }
}

// export class AddOne implements Action {
//   readonly type = ADD_ONE;

//   constructor(public payload: Film) { }
// }

// export type Action = AddOne | Select;

export type Action = LoadCourses;
