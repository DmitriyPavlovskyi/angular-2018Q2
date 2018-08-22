import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '@app/store/reducers';
import * as coursesActions from '@app/store/actions/courses';
import { TodoListItem } from '@app/shared/models/todo-list-item.model';
import { CoursesService } from '@app/core/courses/courses.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoListItemComponent implements OnInit {
@Input() course: TodoListItem;
@Output() deleteItem: EventEmitter<number> = new EventEmitter<number>();
  constructor(public router: Router, public services: CoursesService, private store: Store<fromRoot.State> ) {}

  ngOnInit() {}

  handleEdit() {debugger;
    console.log('---List item. Edit triggered');
    this.router.navigate(['courses', this.course.id]);
  }

  handleDelete() {
    this.deleteItem.emit(this.course.id);
    console.log('---List item. Delete triggered');
    this.services.delete(this.course.id);
    return this.course.id;
  }

}
