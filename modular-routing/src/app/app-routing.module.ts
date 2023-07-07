import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user/list' },
  { path: 'todo-list', component: TodoListComponent },
];

//wenn ist mit AppRoutingModule -> class AppRoutingModule muss active sein!, auch in app.module.ts!

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
