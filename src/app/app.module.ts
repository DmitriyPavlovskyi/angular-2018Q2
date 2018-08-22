import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { FeaturesModule } from './features/features.module';
import { LoginModule } from '@app/core/login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from '@app/core/auth/auth-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from '@app/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { CoursesEffects } from '@app/store/effects/courses';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FeaturesModule,
    LoginModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CoursesEffects]),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
