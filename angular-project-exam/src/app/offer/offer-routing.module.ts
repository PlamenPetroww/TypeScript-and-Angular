import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { NewOfferComponent } from './new-offer/new-offer.component';
import { CurrentOfferComponent } from './current-offer/current-offer.component';
import { LoadOfferComponent } from './load-offer/load-offer.component';

const routes: Routes = [
  {
    path: 'lessons',

    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MainComponent,
      },
      {
        path: ':lessonId',
        component: CurrentOfferComponent,
      },
    ],
  },
  { path: 'add-lesson', component: NewOfferComponent },
  {
    path: 'load-offer/:lessonId',
    component: LoadOfferComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class OfferRoutingModule {}
