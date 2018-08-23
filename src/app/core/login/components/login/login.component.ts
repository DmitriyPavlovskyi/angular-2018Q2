import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '@app/store/reducers';
import * as usersActions from '@app/store/actions/users';
import { AuthService } from '@app/core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogin: string;
  userPassword: string;
  constructor(public authService: AuthService, public router: Router, private store: Store<fromRoot.State>) { }


  ngOnInit() {}

  public login(login, password): void {
    console.log('login triggered');

    this.store.dispatch(new usersActions.CheckIsAuthorizedUser({
      login: login.value,
      password: password.value
    }));

    this.store.select(fromRoot.getIsAuthorizedUser).subscribe((isUserAuthorized) => {
      if (isUserAuthorized) {
        this.authService.login(isUserAuthorized);
        this.router.navigate(['courses']);
      }
    });
  }

}
