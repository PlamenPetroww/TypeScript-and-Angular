import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Offer } from 'src/app/types/offers';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.css'],
})
export class NewOfferComponent implements OnInit {
  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(4)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    duration: ['', [Validators.required, Validators.max(15), Validators.min(2)]],
    price: ['', [Validators.required, Validators.max(1000), Validators.min(50)]],
  });

  constructor(private apiService: ApiService, private fb: FormBuilder) {}

  newOffer: Offer | undefined;

  // if(form.invalid) {
  //   return
  // };

  ngOnInit(): void {}

  create(): void {
    if (this.form.invalid) {
      return;
    }
  }
}
