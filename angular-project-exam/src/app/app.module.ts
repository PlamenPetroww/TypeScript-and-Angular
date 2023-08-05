import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { OfferModule } from './offer/offer.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LessonsListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    UserModule,
    OfferModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
