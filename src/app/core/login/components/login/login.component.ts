import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/auth/auth.service';
import { Store } from '@ngrx/store';
import { UserData } from '@app/shared/models/user.model';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { LOGIN } from '@app/store/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogin: string;
  userPassword: string;
  constructor(public authService: AuthService, public router: Router, private store: Store<UserData>, private http: HttpClient) {
  }

  ngOnInit() {
  }

  public login(login, password): void {

    console.log('login triggered');

    const that = this;
    this.http.get('http://localhost:3004/users')
    .subscribe(function (response) {
      debugger;
      // TODO: edited
      response.forEach(item => {
        if (item.login === login.value && item.password === password.value) {
          console.log('success login!');
          that.store.dispatch({ type: LOGIN });
            // this.authService.login(item);
            that.authService.isLogin = true;
            that.router.navigate(['courses']);
          }
        });
      });
    // .catchError(function() {
    //   console.log('Internal error');
    // });
  }

}
