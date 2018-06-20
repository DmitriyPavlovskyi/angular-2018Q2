import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleSearch() {
    console.log('---Toolbox. Search triggered');
  }

  handleAddCourse() {
    console.log('---Toolbox. Add course triggered');
  }

}
