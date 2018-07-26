import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  dateValue: string;
  @Output() getDate = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  handleChanges(dateValue) {
    this.getDate.emit(dateValue);
  }

}
