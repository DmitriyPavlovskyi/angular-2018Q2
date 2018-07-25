import { Component, OnInit, Input } from '@angular/core';
import { TodoListItem } from '@app/shared/models/todo-list-item.model';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent implements OnInit {
  @Input() courses: TodoListItem[];

  constructor() { }

  ngOnInit() {}

  handleCLick() {
    console.log('---Load more. Load button triggered');
    return '---Load more. Load button triggered';
  }

}
