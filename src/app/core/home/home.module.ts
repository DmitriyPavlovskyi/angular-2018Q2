import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home.component';
import { RouterModule } from '@angular/router';
import { FeaturesModule } from '@app/features/features.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FeaturesModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
