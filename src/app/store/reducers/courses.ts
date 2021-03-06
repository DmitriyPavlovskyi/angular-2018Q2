import { Action } from '@ngrx/store';
import * as coursesActions from '../actions/courses';
import { TodoListItem } from '@app/shared/models/todo-list-item.model';
import { UserData } from '@app/shared/models/user.model';


export interface State {
  courses: TodoListItem[];
  activeCourse: TodoListItem;
}

export const initialState: State = {
  courses: [
    {
    'id': 8693,
    'name': 'duis mollit reprehenderit ad',
    'description': 'Est minim ea aute sunt laborum minim eu excepteur. Dolor officia culpa labore oluptate ea nostrud.',
    'isTopRated': false,
    'date': '2017-09-28T04:39:24+00:00',
    'authors': [
      {
        'id': 1370,
        'firstName': 'Polly',
        'lastName': 'Sosa'
      }
    ],
    'length': 157
  },
  {
    'id': 4980,
    'name': 'magna excepteur aute deserunt',
    'description': 'Sunt culpa officia minim commodo eiusmod irure sunt nostrud. Mollit aliquip id voluptate consectetur laborum.',
    'isTopRated': false,
    'date': '2016-05-31T02:02:36+00:00',
    'authors': [
      {
        'id': 8413,
        'firstName': 'Greta',
        'lastName': 'Richardson'
      },
      {
        'id': 7458,
        'firstName': 'Deana',
        'lastName': 'Bruce'
      },
      {
        'id': 5508,
        'firstName': 'Patsy',
        'lastName': 'Bright'
      }
    ],
    'length': 207
  }, ],
  activeCourse: null
};

export function reducer(state = initialState, action: coursesActions.Action) {
  switch (action.type) {
    case coursesActions.LOAD_COURSES: {
      return state;
    }

    case coursesActions.GET_COURSE_BY_ID: {
      const activeCourse = state.courses.find((item) => item.id === parseInt(action.payload, 10));

      return {courses: [...state.courses], activeCourse};
    }

    case coursesActions.ADD_NEW_COURSE: {
      return {...state, courses: [...state.courses, action.payload]};
    }

    default:
      return state;
  }
}

export const getCourses = (state: State) => state.courses;
export const getActiveCourse = (state: State) => state.activeCourse;
