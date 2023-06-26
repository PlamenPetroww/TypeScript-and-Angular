import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { TodoListComponentComponent } from './todo-list-component/todo-list-component.component';

@NgModule({
  declarations: [
    TodoListComponentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class AppModule { }
