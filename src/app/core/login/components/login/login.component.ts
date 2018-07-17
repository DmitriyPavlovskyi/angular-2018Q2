import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  public login(): void {
    console.log('login triggered');

    this.authService.login('hello', 'world');
  }

}
