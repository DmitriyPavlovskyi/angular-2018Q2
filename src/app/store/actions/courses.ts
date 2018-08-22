import { Action } from '@ngrx/store';
import { TodoListItem } from '@app/shared/models/todo-list-item.model';

export const LOAD_COURSES = 'LOAD_COURSES';
export const GET_COURSE_BY_ID = 'GET_COURSE_BY_ID';
export const ADD_NEW_COURSE = 'ADD_NEW_COURSE';

export class LoadCourses implements Action {
    readonly type = LOAD_COURSES;

    constructor() { }
}

export class GetCourseById implements Action {
  readonly type = GET_COURSE_BY_ID;

  constructor(public payload) { }
}

export class AddNewCourse implements Action {
  readonly type = ADD_NEW_COURSE;

  constructor(public payload) { }
}


// export class AddOne implements Action {
//   readonly type = ADD_ONE;

//   constructor(public payload: Film) { }
// }

// export type Action = AddOne | Select;

export type Action = LoadCourses | GetCourseById | AddNewCourse;
