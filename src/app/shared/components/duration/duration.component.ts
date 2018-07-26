import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss']
})
export class DurationComponent implements OnInit {
  durationValue: string;
  @Output() getDuration = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleChanges(durationValue) {
    this.getDuration.emit(durationValue);
  }

}
