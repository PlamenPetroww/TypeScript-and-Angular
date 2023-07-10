import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOfferComponent } from './new-offer/new-offer.component';
import { CurrentOfferComponent } from './current-offer/current-offer.component';
import { OfferRoutingModule } from './offer-routing.module';



@NgModule({
  declarations: [
    NewOfferComponent,
    CurrentOfferComponent
  ],
  imports: [
    CommonModule,
    OfferRoutingModule
  ]
})
export class OfferModule { }
