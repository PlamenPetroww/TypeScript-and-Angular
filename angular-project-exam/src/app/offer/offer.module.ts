import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOfferComponent } from './new-offer/new-offer.component';
import { CurrentOfferComponent } from './current-offer/current-offer.component';



@NgModule({
  declarations: [
    NewOfferComponent,
    CurrentOfferComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OfferModule { }
