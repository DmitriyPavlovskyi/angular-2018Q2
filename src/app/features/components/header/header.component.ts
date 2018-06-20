import { Component, OnInit, Input } from '@angular/core';
import { UserData } from '@app/shared/models/user.model';
import { UserService } from '@app/core/courses/courses.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() user: UserData;
  constructor(public services: UserService) { }

  ngOnInit() {
    this.user = this.services.getUserData();
  }

  handleLogOff() {
    console.log('---Header. User log off triggered')
  }

}
