import { Route } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list/todo-list.component';
import { HomeComponent } from './home/home/home.component';

export const ROUTES: Route[] = [
  { path: 'listing', component: TodoListComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'listing', pathMatch: 'full' }
];
