import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router'
import { ROUTES } from './app.routes';
import { CoursesModule } from './courses/courses.module';
import { HomeModule } from './home/home.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CoursesModule,
    HomeModule,
    RouterModule.forRoot(ROUTES),
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
