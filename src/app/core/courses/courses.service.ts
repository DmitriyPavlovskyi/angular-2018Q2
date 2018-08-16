import { Injectable } from '@angular/core';
import { TodoListItem } from '@app/shared/models/todo-list-item.model';
import { BehaviorSubject, Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { timeout } from '../../../../node_modules/@types/q';
import { filter } from '../../../../node_modules/rxjs-compat/operator/filter';

export interface TodoItemListState {
  list: TodoListItem[];
  hasMoreItems: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(public http: HttpClient, private spinner: NgxSpinnerService) {}
  public SINGLE_LOAD_AMOUNT = 5;
  public todoItems$: BehaviorSubject<TodoItemListState> = new BehaviorSubject(null);

  public getItemById(id): Observable<any> {
    const state = this.todoItems$.value;
    this.spinner.show();
    return this.http.get(`http://localhost:3004/courses/${id}`);
  }

  public loadTodoItems(): void {
    this.spinner.show();
    const currentList = this.todoItems$.value && this.todoItems$.value.list || [];

    this.http.get(`http://localhost:3004/courses?start=${currentList.length}&count=${this.SINGLE_LOAD_AMOUNT}`)
    .subscribe((data: TodoListItem[]) => {
      const hasMoreItems =  data && data.length > 0;
      const list = [...currentList, ...data];
      this.spinner.hide();
      this.todoItems$.next({
        list,
        hasMoreItems
      });
    });
  }

  public search(search: Observable<string>): Observable<any> {
    return search.debounceTime(400)
    .distinctUntilChanged()
    .filter( elem => {
      return elem.length >= 3 || elem.length === 0;
    })
    .switchMap(term => this.handleSearch(term));
  }

  public handleSearch (searchValue: string) {
    this.spinner.show();
    return this.http.get(`http://localhost:3004/courses?textFragment=${searchValue}`).map((res) => {
      setTimeout(() => this.spinner.hide(), 1000);
      return res;
    });
  }

  public reload(): void {
    const state = this.todoItems$.value;

    this.http.get(`http://localhost:3004/courses?start=0&count=${state.list.length}`)
    .subscribe((data: TodoListItem[]) => {
      const hasMoreItems =  data && data.length > 0;
      const list = data;

      this.todoItems$.next({
        list,
        hasMoreItems
      });
  });
}


  public delete(id): void {
    this.http.delete(`http://localhost:3004/courses/${id}`)
    .subscribe(() => {
      this.reload();
    });
  }

  public update(id, data): void {
    const state = this.todoItems$.value;
    // TODO: Проверить запрос, почему не доходит правильный ответ
    this.http.patch(`http://localhost:3004/courses/${id}`, data)
    .subscribe(data => {
      console.log(data);
      this.reload();
    });
  }
}
