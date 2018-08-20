import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/auth/auth.service';
import { Store } from '@ngrx/store';
import { UserData } from '@app/shared/models/user.model';
import { LOGIN } from '@app/actions';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

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
    this.store.dispatch({ type: LOGIN });

    console.log('login triggered');

    this.http.get('http://localhost:3004/users')
    .subscribe(function(response) {debugger;
      // TODO: edited
      // response.forEach(item => {
      //   if (item.login === login.value && item.password === password.value) {
      //     console.log('success login!');
      //     this.authService.login(item);
      //     this.router.navigate(['courses']);
      //   }
      // });
    });
    // .catchError(function() {
    //   console.log('Internal error');
    // });
  }

}
