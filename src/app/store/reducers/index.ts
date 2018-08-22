import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

import * as fromCourses from './courses';
import * as fromUsers from './users';

export interface State {
  courses: fromCourses.State;
  users: fromUsers.State;
}

export const reducers: ActionReducerMap<State> = {
  courses: fromCourses.reducer,
  users: fromUsers.reducer,
};

export const getCoursesState = createFeatureSelector<fromCourses.State>('courses');
export const getUsersState = createFeatureSelector<fromUsers.State>('users');

export const getCourses = createSelector(
  getCoursesState,
  fromCourses.getCourses,
);

export const getActiveCourse = createSelector(
  getCoursesState,
  fromCourses.getActiveCourse,
);

export const getUsers = createSelector(
  getUsersState,
  fromUsers.getUsers,
);
