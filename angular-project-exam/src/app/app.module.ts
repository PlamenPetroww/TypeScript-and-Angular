import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { OffersListComponent } from './offers-list/offers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LessonsListComponent,
    OffersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
