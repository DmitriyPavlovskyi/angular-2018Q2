import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { TodoListItem } from '@app/shared/models/todo-list-item.model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoListItemComponent implements OnInit {
@Input() course: TodoListItem;
@Output() deleteItem: EventEmitter<number> = new EventEmitter<number>();
  constructor(public router: Router) { }

  ngOnInit() {}

  handleEdit() {
    console.log('---List item. Edit triggered');
    // this.router.navigate([`editCourse/${this.course.id}`]);
    this.router.navigate(['editCourse', this.course.id]);
  }

  handleDelete() {
    this.deleteItem.emit(this.course.id);
    console.log('---List item. Delete triggered');
    return this.course.id;
  }

}
