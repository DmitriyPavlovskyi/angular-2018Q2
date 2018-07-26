import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '@app/core/login/components/login/login.component';
import { FeaturesModule } from '@app/features/features.module';

@NgModule({
  imports: [
    CommonModule,
    FeaturesModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
