import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss'],
})
export class ToolboxComponent implements OnInit {
  @Output() search = new EventEmitter();
  searchTerm = new Subject<string>();
  constructor(public router: Router) {}

  ngOnInit() {
    this.searchTerm.subscribe((inputValue) => this.handleSearch(inputValue));
  }

  handleSearch(inputValue: string) {
    if (inputValue.length !== 0 && inputValue.length % 3 === 0) {
      this.search.emit(this.searchTerm);
    }
  }

  handleAddCourse() {
    console.log('---Toolbox. Add course triggered');
    this.router.navigate(['courses', 'new']);
  }
}
