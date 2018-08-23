import { Action } from '@ngrx/store';
import * as usersActions from '../actions/users';
import { UserData } from '@app/shared/models/user.model';


export interface State {
  users: UserData[];
  isAuthorizedUser: any;
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
  ],
  isAuthorizedUser: null
};

export function reducer(state = initialState, action: usersActions.Action) {
  switch (action.type) {
    case usersActions.LOAD_USERS: {
      return state;
    }

    case usersActions.CHECK_IS_AUTHORIZE_USER: {
      const {login, password} = action.payload;
      let newState = {...state};

      state.users.map(item => {
        if (item.login === login && item.password === password) {
          newState =  {...newState, isAuthorizedUser: item};
        }
      });

      return newState;
    }

    default:
      return state;
  }
}

export const getUsers = (state: State) => state.users;
export const getIsAuthorizedUser = (state: State) => state.isAuthorizedUser;
