import { Component, OnInit, Input } from '@angular/core';
import { UserData } from '@app/shared/models/user.model';
import { AuthService } from '@app/core/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService) {}
  public user: UserData;

  ngOnInit() {
    this.user = this.authService.getUserInfo();
  }

  handleLogOut() {
    console.log('---Header. User log off triggered');
    this.authService.logout();
  }

}
