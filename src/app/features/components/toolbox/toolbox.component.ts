import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss'],
})
export class ToolboxComponent implements OnInit {
  @Output() search = new EventEmitter();
  searchValue: string;
  constructor(public router: Router) {}

  ngOnInit() {
  }

  handleSearch() {
    console.log('---Toolbox. Search triggered');
    this.search.emit(this.searchValue);
  }

  handleAddCourse() {
    console.log('---Toolbox. Add course triggered');
    this.router.navigate(['addCourse']);
  }
}
