import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogin: string;
  userPassword: string;
  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  public login(login, password): void {debugger;
    console.log('login triggered');

    fetch('http://localhost:3004/users').then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data);
      data.forEach(item => {
        if (item.login === login.value && item.password === password.value) {
          console.log('success login!');
          this.authService.login(item);
          this.router.navigate(['courses']);
        }
      });
    }.bind(this)).catch(function() {
      console.log('Internal error');
    });
  }

}
