import { Route } from '@angular/router';
import { CoursesComponent } from './core/courses/component/courses.component';
import { HomeComponent } from './core/home/component/home.component';

export const ROUTES: Route[] = [
  { path: 'courses', component: CoursesComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'courses', pathMatch: 'full' }
];
