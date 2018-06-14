import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ToolboxComponent } from './toolbox/toolbox.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [HeaderComponent, BreadcrumbsComponent, ToolboxComponent],
  exports: [HeaderComponent]
})
export class CoreModule { }
