import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Offer } from 'src/app/types/offers';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.css'],
})
export class NewOfferComponent implements OnInit {
  offerList: Offer[] = [];
  offerArray: Offer[] = [];
  isLoading: boolean = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getLessons().subscribe({
      next: (offers) => {
        this.offerList = offers;
        this.offerArray = Object.values(this.offerList);
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = true;
        console.log(`Error: ${error}`);
      },
    });
  }
}

/* constructor(private apiService: ApiService) {}
  isLoading: boolean = true;

  ngOnInit(): void {
    this.isLoading = false;
    this.apiService.getOffers().subscribe(offers => {
      console.log(offers);
    })
  } */
