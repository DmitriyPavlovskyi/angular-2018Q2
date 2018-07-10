import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss'],
})
export class ToolboxComponent implements OnInit {
  @Output() search = new EventEmitter();
  searchValue: string;
  constructor() {}

  ngOnInit() {
  }

  handleSearch(searchValue) {
    console.log('---Toolbox. Search triggered');
    this.search.emit(searchValue);
  }

  handleAddCourse() {
    console.log('---Toolbox. Add course triggered');
    return '---Toolbox. Add course triggered';
  }
}
