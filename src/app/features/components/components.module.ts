import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from '@app/shared/directives/directives.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DirectivesModule,
    SharedModule
  ],
  declarations: [HeaderComponent, FooterComponent, TodoListComponent, TodoListItemComponent, ToolboxComponent, LoadMoreComponent],
  exports: [HeaderComponent, FooterComponent, TodoListComponent, TodoListItemComponent, ToolboxComponent, LoadMoreComponent]
})
export class ComponentsModule { }
