import { Component } from '@angular/core';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent {

  isLoading: boolean = true;

  ngOnInit(): void {
    this.isLoading = false;
  }

}
