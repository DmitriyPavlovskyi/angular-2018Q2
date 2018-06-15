import { Component, OnInit, Input } from '@angular/core';
import { UserData } from '../../../shared/models/user.model';
import { UserService } from '../../../core/courses/courses.service';

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

}
