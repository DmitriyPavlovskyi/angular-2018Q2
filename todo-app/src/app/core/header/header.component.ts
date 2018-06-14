import { Component, OnInit } from '@angular/core';
import { UserService } from '../core.service';
import { UserData } from '../user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userData:UserData;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userData = this.userService.getUserData();
  }

}
