import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReduxSimulationComponent } from './redux-simulation/redux-simulation.component';
import { StoreModule } from '@ngrx/store';
import { TranslateComponent } from './translate/translate.component';
import { translateReducer } from './translate/translate.reducer';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    ReduxSimulationComponent,
    TranslateComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({message: translateReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
