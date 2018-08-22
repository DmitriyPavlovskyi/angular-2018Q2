import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './store/reducers';
import * as coursesActions from './store/actions/courses';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private store: Store<fromRoot.State>) {
    store.dispatch(new coursesActions.LoadCourses());
  }
}
