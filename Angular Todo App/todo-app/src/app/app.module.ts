import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentAppComponentComponent } from './component-app-component/component-app-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentAppComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
