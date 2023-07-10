import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { NewOfferComponent } from './new-offer/new-offer.component';

const routes: Routes = [
  {
    path: 'courses',
    component: MainComponent,
  },
  { path: 'add-course', component: NewOfferComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class OfferRoutingModule {}
