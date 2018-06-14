import { Route } from '@angular/router';
import { CoursesComponent } from './courses/courses/courses.component';
import { HomeComponent } from './home/home/home.component';

export const ROUTES: Route[] = [
  { path: 'listing', component: CoursesComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'listing', pathMatch: 'full' }
];
