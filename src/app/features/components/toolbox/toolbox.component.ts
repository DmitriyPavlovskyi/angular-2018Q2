import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss'],
})
export class ToolboxComponent implements OnInit {
  searchValue: string;
  constructor() {}

  ngOnInit() {
  }

  handleSearch(searchValue) {
    console.log('---Toolbox. Search triggered');
    return searchValue;
  }

  handleAddCourse() {
    console.log('---Toolbox. Add course triggered');
    return '---Toolbox. Add course triggered';
  }
}
