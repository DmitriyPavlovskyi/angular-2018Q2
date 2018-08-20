import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import * as userReducer from '../../store/reducers/user';
import { tap } from 'rxjs/operators';
import { AppState } from '../../store/reducers/user';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store: Store<AppState>) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.store.pipe(
      select(userReducer.authToken),
      tap((authToken) => {

        // Clone the request and replace the original headers with
        // cloned headers, updated with the authorization.
        const authReq = req.clone({
          headers: req.headers.set('Authorization', authToken)
        });

        // send cloned request with header to the next handler.
        return next.handle(authReq);
      }));
  }
}
