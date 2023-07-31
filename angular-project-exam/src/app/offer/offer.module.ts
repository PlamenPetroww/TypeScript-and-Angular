import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOfferComponent } from './new-offer/new-offer.component';
import { CurrentOfferComponent } from './current-offer/current-offer.component';
import { OfferRoutingModule } from './offer-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadOfferComponent } from './load-offer/load-offer.component';

@NgModule({
  declarations: [NewOfferComponent, CurrentOfferComponent, LoadOfferComponent],
  imports: [CommonModule, OfferRoutingModule, SharedModule, ReactiveFormsModule],
})
export class OfferModule {}
