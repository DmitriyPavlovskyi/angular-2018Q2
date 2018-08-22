import { Action } from '@ngrx/store';
import * as usersActions from '../actions/users';
import { UserData } from '@app/shared/models/user.model';


export interface State {
  users: UserData[];
}

export const initialState: State = {
  users: [
    {
      id: 6093,
      name: {
        last: 'Smith',
        first: 'John'
      },
      fakeToken: '58ebfdf7f1f558c5c86e17f6',
      password: 'admin',
      login: 'admin'
    },
    {
      id: 2905,
      name: {
        last: 'Beasley',
        first: 'Brock'
      },
      fakeToken: '58ebfdf7ec92657b493b24da',
      password: 'id',
      login: 'Morales'
    }
  ]
};

export function reducer(state = initialState, action: usersActions.Action) {
  switch (action.type) {
    case usersActions.LOAD_USERS: {debugger;
      return state;
    }

    default:
      return state;
  }
}

export const getUsers = (state: State) => state.users;
