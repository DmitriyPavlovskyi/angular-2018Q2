import { Injectable } from '@angular/core';
import { UserData } from '@app/shared/models/user.model';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin$: BehaviorSubject<boolean>;

  constructor(public router: Router) {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.isLogin$ = new BehaviorSubject(this.userData && !!this.userData.token);

    try {
      this.userData = JSON.parse(this.userData);
    } catch (e) {
      console.log('Invalid user data');
    }
  }

  public userData: UserData;

  public login(user): void {
    this.userData = {
      id: user.id,
      firstName: user.name.first,
      lastName: user.name.last,
      token: user.fakeToken,
      login: user.login
    };

    localStorage.setItem('userData', JSON.stringify(this.userData));
    console.log('---login triggered');
    this.isLogin$.next(true);

    this.router.navigate(['courses'], { replaceUrl: true });
  }

  public get authorizationToken(): string {
    return this.userData.token;
  }

  public logout(): void {
    localStorage.removeItem('userData');
    this.userData = null;
    this.isLogin$.next(false);
    console.log('---logout triggered');

    this.router.navigate(['login']);
  }

  public isAuthenticated(): boolean {
    console.log('---is authenticated triggered');

    return this.isLogin$;
  }

  public getUserInfo(): UserData {
    console.log('---get user info triggered');
    return this.userData;
  }

}
