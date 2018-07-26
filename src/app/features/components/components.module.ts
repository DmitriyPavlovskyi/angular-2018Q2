import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@app/features/components/header/header.component';
import { FooterComponent } from '@app/features/components/footer/footer.component';

import { TodoListComponent } from '@app/features/components/todo-list/todo-list.component';
import { TodoListItemComponent } from '@app/features/components/todo-list-item/todo-list-item.component';
import { ToolboxComponent } from '@app/features/components/toolbox/toolbox.component';
import { LoadMoreComponent } from '@app/features/components/load-more/load-more.component';
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
