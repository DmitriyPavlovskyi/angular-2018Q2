import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

import * as fromCourses from './courses';

export interface State {
  courses: fromCourses.State;
}

export const reducers: ActionReducerMap<State> = {
  courses: fromCourses.reducer
};

export const getCoursesState = createFeatureSelector<fromCourses.State>('courses');

export const getCourses = createSelector(
  getCoursesState,
  fromCourses.getCourses,
);

export const getActiveCourse = createSelector(
  getCoursesState,
  fromCourses.getActiveCourse,
);
