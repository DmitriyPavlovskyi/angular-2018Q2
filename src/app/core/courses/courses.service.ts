import { Injectable } from '@angular/core';
import { TodoListItem } from '@app/shared/models/todo-list-item.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface TodoItemListState {
  list: TodoListItem[];
  hasMoreItems: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(public http: HttpClient) {}
  public SINGLE_LOAD_AMOUNT = 5;
  public todoItems$: BehaviorSubject<TodoItemListState> = new BehaviorSubject(null);

  public getItemById(id): Observable<any> {
    const state = this.todoItems$.value;

    return this.http.get(`http://localhost:3004/courses/${id}`);
  }

  public loadTodoItems(): void {
    const currentList = this.todoItems$.value && this.todoItems$.value.list || [];

    this.http.get(`http://localhost:3004/courses?start=${currentList.length}&count=${this.SINGLE_LOAD_AMOUNT}`)
    .subscribe((data: TodoListItem[]) => {
      const hasMoreItems =  data && data.length > 0;
      const list = [...currentList, ...data];

      this.todoItems$.next({
        list,
        hasMoreItems
      });
    })
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
  })
}


  public delete(id): void {
    this.http.delete(`http://localhost:3004/courses/${id}`)
    .subscribe(() => {
      this.reload();
    })
  }

  public update(id, data): void {
    const state = this.todoItems$.value;
    // TODO: Проверить запрос, почему не доходит правильный ответ
    this.http.patch(`http://localhost:3004/courses/${id}`, data)
    .subscribe(data => {
      console.log(data);
      this.reload();
    })
  }
}
