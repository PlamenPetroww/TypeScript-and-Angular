import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.css'],
})
export class NewOfferComponent implements OnInit {

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    
  }
}
