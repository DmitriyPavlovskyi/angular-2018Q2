import { Action, createSelector } from '@ngrx/store';

export const LOGIN = 'LOGIN';

const initialState = {
  user: {
    id: null,
    firstName: null,
    lastName: null,
    token: null,
    login: null
  }
};

export function userReducer(state = initialState, action: Action) {debugger;
  // TODO: edited
  switch (action.type) {
    case LOGIN:
      return Object.assign({} , state.user, {
        firstName: 'John111',
        lastName: 'Smith',
        token: '58ebfdf7f1f558c5c86e17f6'
      }
    );

    default: return state;
  }
}

export const selectUser = (state: any) => state.user;

export const getUser = createSelector(
  selectUser,
);
