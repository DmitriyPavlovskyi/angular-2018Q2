import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { ToolboxComponent } from './toolbox/toolbox.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [HeaderComponent, FooterComponent, TodoListComponent, TodoListItemComponent, ToolboxComponent],
  exports: [HeaderComponent, FooterComponent, TodoListComponent, TodoListItemComponent, ToolboxComponent]
})
export class ComponentsModule { }
