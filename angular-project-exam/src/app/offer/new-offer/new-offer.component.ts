import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.css'],
})
export class NewOfferComponent{
  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(4)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    duration: [
      '',
      [Validators.required, Validators.max(15), Validators.min(2)],
    ],
    price: [
      '',
      [Validators.required, Validators.max(1000), Validators.min(50)],
    ],
  });

  constructor(private apiService: ApiService,private router: Router ,private fb: FormBuilder, private toast: HotToastService) {}

  create(): void {
    if (this.form.invalid) {
      return;
    }
  
    const {title, description, duration, price} = this.form.value as {
      title: string,
      description: string,
      duration: string,
      price: string
    };

    this.apiService.createLesson(title, description, duration, price).subscribe(() => {
      this.router.navigate(['/lessons'])
    })
  
  }
  
  cancel() {
    this.toast.observe(
      {
      success: 'Are you sure ?',
      loading: 'Canceled ...',
      error: ({message}) => `${message}`,
    }
    )
  }
  
  
}


