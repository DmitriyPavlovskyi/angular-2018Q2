import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  handleCLick() {
    console.log('---Load more. Load button triggered');
    return '---Load more. Load button triggered';
  }

}
