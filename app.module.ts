import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { todosComponent } from './showtodos/todos.component';
import { todoComponent } from './showtodos/todo/todo.component';
import { newtodoComponent } from './newtodo/newtodo.component';

@NgModule({
  declarations: [
    AppComponent,
    todosComponent,
    todoComponent,
    newtodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
