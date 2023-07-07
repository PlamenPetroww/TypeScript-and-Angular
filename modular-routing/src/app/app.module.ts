import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { TodoModule } from './todo/todo.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, routes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    UserModule,
    HttpClientModule,
    // deaktiviert RouterModule wenn wir mapping mit AppRoutingModule
    //RouterModule.forRoot(routes),
    // deaktiviert AppRoutingModule wenn wir mapping mit RouterModule
    AppRoutingModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
