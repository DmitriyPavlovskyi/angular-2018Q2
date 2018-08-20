import { UserData } from './../../shared/models/user.model';
import { Action, createSelector } from '@ngrx/store';

export const LOGIN = 'LOGIN';


export interface AppState {
  user: UserData;
}

const initialState: AppState = {
  user: {
    id: null,
    firstName: null,
    lastName: null,
    token: null,
    login: null
  }
};

export function userReducer(state = initialState, action: Action) {
  // TODO: edited
  switch (action.type) {
    case LOGIN:
      return {
        ...state.user,
        firstName: 'John111',
        lastName: 'Smith',
        token: '58ebfdf7f1f558c5c86e17f6'
      };

    default: return state;
  }
}

export const selectUser = (state: any) => state.user;

export const getUser = createSelector(
  selectUser
);


export const authToken = createSelector(
  selectUser,
  (user) => user.token
);
