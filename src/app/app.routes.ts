import { Route } from '@angular/router';
import { CoursesComponent } from '@app/core/courses/component/courses.component';
import { HomeComponent } from '@app/core/home/component/home.component';
import { AuthGuard } from '@app/core/auth/auth.guard';
import { LoginComponent } from '@app/core/login/components/login/login.component';
import { AddCourseComponent } from '@app/core/add-course/component/add-course.component';
import { NotFoundComponent } from '@app/core/not-found/not-found.component';
import { EditCourseComponent } from './core/edit-course/edit-course.component';


export const ROUTES: Route[] = [
  { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'addCourse', component: AddCourseComponent, canActivate: [AuthGuard] },
  { path: 'editCourse/:id', component: EditCourseComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: '**', component : NotFoundComponent },
];
