import { Route } from '@angular/router';
import { CoursesComponent } from './core/courses/component/courses.component';
import { HomeComponent } from './core/home/component/home.component';
import { AuthGuard } from '@app/core/auth/auth.guard';
import { LoginComponent } from '@app/core/login/components/login/login.component';


export const ROUTES: Route[] = [
  { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];
