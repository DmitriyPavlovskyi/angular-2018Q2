import { Component, OnInit, Input } from '@angular/core';
import { UserData } from '@app/shared/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() user: UserData;

  constructor() {}

  ngOnInit() {}

  handleLogOff() {
    console.log('---Header. User log off triggered');
  }

}
