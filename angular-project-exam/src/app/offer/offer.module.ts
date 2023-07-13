import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOfferComponent } from './new-offer/new-offer.component';
import { CurrentOfferComponent } from './current-offer/current-offer.component';
import { OfferRoutingModule } from './offer-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NewOfferComponent, CurrentOfferComponent],
  imports: [CommonModule, OfferRoutingModule, SharedModule],
})
export class OfferModule {}
