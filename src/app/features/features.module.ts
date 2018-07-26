import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '@app/features/components/components.module';

@NgModule({
  imports: [
    CommonModule, ComponentsModule
  ],
  declarations: [],
  exports: [ComponentsModule]
})
export class FeaturesModule { }
