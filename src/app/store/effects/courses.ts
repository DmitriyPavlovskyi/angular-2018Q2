import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class CoursesEffects {
  // Listen for the 'LOGIN' action
  // @Effect()
  // login$: Observable<Action> = this.actions$.pipe(
  //   ofType('LOAD_COURSES'),
  //   mergeMap(action =>

      // service.fgdfg().pipe(
      //   // If successful, dispatch success action with result
      //   map(data => ({ type: 'LOGIN_SUCCESS', payload: data })),
      //   // If request fails, dispatch failed action
      //   catchError(() => of({ type: 'LOGIN_FAILED' }))
      // )
    // )
  // );

  constructor(private http: HttpClient, private actions$: Actions) {}
}
