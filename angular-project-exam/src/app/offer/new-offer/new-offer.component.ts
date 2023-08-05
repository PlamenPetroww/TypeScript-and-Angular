import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { HotToastService } from '@ngneat/hot-toast';
import { UserService } from 'src/app/user/user.service';
import { tap } from 'rxjs';


@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.css'],
})
export class NewOfferComponent implements OnInit{

  userId : any;

  constructor(private apiService: ApiService,
    private router: Router ,
    private fb: FormBuilder,
    private toast: HotToastService,
    private userService: UserService
    ) {}

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

  ngOnInit(): void {
    /* this.userService.currentUser$.pipe(tap()).subscribe((user) => {
      this.userId = user!.uid;
      console.log('this.userId', this.userId);
    }); */
  }

  create(): void {

    if(!this.userService.isLogged) {
      console.log('NE si lognat')
    } else {
      console.log('Lognat si')
    }
    let author: any;

    if (this.form.invalid) {
      return;
    }
    author = this.userId;

    const {title, img, description, duration, price} = this.form.value as {
      title: string,
      img: string,
      description: string,
      duration: string,
      price: string
    };

    this.apiService.createLesson(author,title, img, description, duration, price).subscribe(() => {
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


