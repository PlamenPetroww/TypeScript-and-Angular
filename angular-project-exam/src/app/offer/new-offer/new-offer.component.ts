import { Component } from '@angular/core';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.css']
})
export class NewOfferComponent {
  isLoading: boolean = true;

  ngOnInit(): void {
    this.isLoading = false;
  }
}
