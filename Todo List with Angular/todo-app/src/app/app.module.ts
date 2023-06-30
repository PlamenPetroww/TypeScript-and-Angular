import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputNavigateComponent } from './input-navigate/input-navigate.component';

@NgModule({
  declarations: [
    AppComponent,
    InputNavigateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
