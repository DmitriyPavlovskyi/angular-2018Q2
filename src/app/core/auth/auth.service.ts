import { Injectable } from '@angular/core';
import { UserData } from '@app/shared/models/user.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public router: Router) {
    const userData = localStorage.getItem('userData');

    try {
      this.userData = JSON.parse(userData);
    } catch(e) {
      console.log('Invalid user data');
    }
  }

  public userData: UserData;

  public login(email, password): void {
    this.userData = {
      id: 0,
      firstName: 'John',
      lastName: 'Smith',
      token: 'testToken',
      email: email
    };

    localStorage.setItem('userData', JSON.stringify(this.userData));
    console.log('---login triggered');

    this.router.navigate(['courses'], { replaceUrl: true });
  }

  public logout(): void {
    localStorage.removeItem('userData');
    this.userData = null;
    console.log('---logout triggered');

    this.router.navigate(['login']);
  }

  public isAuthenticated(): boolean {
    console.log('---is authenticated triggered');

    return !!this.userData;
  }

  public getUserInfo(): UserData {
    console.log('---get user info triggered');
    return this.userData;
  }

}
