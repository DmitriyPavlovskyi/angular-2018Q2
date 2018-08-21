import { Injectable } from '@angular/core';
import { UserData } from '@app/shared/models/user.model';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as userReducer from '../../store/reducers/user';
import { AppState } from '../../store/reducers/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin$: BehaviorSubject<boolean>;
  user$: Observable<UserData>;
  public userData: UserData;

  constructor(public router: Router, private store: Store<AppState>) {
    this.user$ = this.store.pipe(select(userReducer.getUser));
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.isLogin$ = new BehaviorSubject(this.userData && !!this.userData.token);
  }

  public login(user): void {
    // this.userData = {
    //   id: user.id,
    //   firstName: user.name.first,
    //   lastName: user.name.last,
    //   token: user.fakeToken,
    //   login: user.login
    // };

    localStorage.setItem('userData', JSON.stringify(this.userData));
    console.log('---login triggered');
    this.isLogin$.next(true);

    this.router.navigate(['courses'], { replaceUrl: true });
  }

  set isLogin(bool) {
    this.isLogin$.next(bool);
  }

  public logout(): void {
    localStorage.removeItem('userData');
    this.userData = null;
    this.isLogin$.next(false);
    console.log('---logout triggered');

    this.router.navigate(['login']);
  }

  public isAuthenticated(): any {
    console.log('---is authenticated triggered');

    return this.isLogin$;
  }

  public getUserInfo(): UserData {
    console.log('---get user info triggered');
    return this.userData;
  }
}
