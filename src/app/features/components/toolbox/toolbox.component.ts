import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {
  searchValue: string;
  constructor() {}

  ngOnInit() {
  }

  handleSearch(searchValue) {
    console.log('---Toolbox. Search triggered. Input value is: ', searchValue);
  }

  handleAddCourse() {
    console.log('---Toolbox. Add course triggered');
  }

  handleChange() {
    console.log('---Toolbox. Input changed');
  }

}
