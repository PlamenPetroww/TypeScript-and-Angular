/* import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { HotToastService } from '@ngneat/hot-toast';
import { UserService } from 'src/app/user/user.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, tap } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.css'],
})
export class NewOfferComponent implements OnInit {

  userId: any;
  user: User | null = null;


  private isLoggedSubject = new BehaviorSubject<boolean>(false);
  isLogged$ = this.isLoggedSubject.asObservable();

  constructor(
    private apiService: ApiService,
    private router: Router,
    private fb: FormBuilder,
    private toast: HotToastService,
    private userService: UserService,
    private auth: AngularFireAuth
  ) {this.auth.authState.subscribe((user) => {
    // console.log(user?.uid)
    this.isLoggedSubject.next(!!user);
  });}


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
    
  }

  create(): void {
    let author: any;

    if (this.form.invalid) {
      return;
    }
    author = this.userId;
    console.log('this.userId');
    console.log('author', author);

    const { title, img, description, duration, price } = this.form.value as {
      title: string;
      img: string;
      description: string;
      duration: string;
      price: string;
    };

    this.apiService
      .createLesson(author, title, img, description, duration, price)
      .subscribe(() => {
        console.log(author);
        this.router.navigate(['/lessons']);
      });
  }

  create(): void {
    if (!this.userService.getIsLoggedValue()) {
      console.log('User is not logged in');
      return;
    }
  
    const { title, img, description, duration, price } = this.form.value as {
      title: string;
      img: string;
      description: string;
      duration: string;
      price: string;
    };
  
    this.userService.currentUser$
      .pipe(
        untilDestroyed(this),
        tap((user) => {
          if (user) {
            const author = user.uid;
            console.log('Author:', author);
  
            this.apiService
              .createLesson(author, title, img, description, duration, price)
              .subscribe(() => {
                console.log('Lesson created');
                this.router.navigate(['/lessons']);
              });
          } else {
            console.log('User is not logged in');
          }
        })
      )
      .subscribe();
  }
  

  cancel() {
    this.toast.observe({
      success: 'Are you sure ?',
      loading: 'Canceled ...',
      error: ({ message }) => `${message}`,
    });
  }
}
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { HotToastService } from '@ngneat/hot-toast';
import { UserService } from 'src/app/user/user.service';
import { BehaviorSubject, tap } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../../types/user';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.css'],
})
export class NewOfferComponent implements OnInit {

  userId: any;
  userEmail: any;
  user: User | null = null;

  tel: any;
  private isLoggedSubject = new BehaviorSubject<boolean>(false);
  isLogged$ = this.isLoggedSubject.asObservable();

  constructor(
    private apiService: ApiService,
    private router: Router,
    private fb: FormBuilder,
    private toast: HotToastService,
    private userService: UserService,
    private auth: AngularFireAuth
  ) {
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.isLoggedSubject.next(true);
        this.userId = user.uid;
        this.userEmail = user.email;
      } else {
        this.isLoggedSubject.next(false);
        this.userId = null;
        this.userEmail = null;
      }
    });
  }


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
    this.userService.currentUser$
    .pipe(
      tap((user) => {
        if (user) {
          console.log(user.uid);
          console.log('this.user')
        }
      })
    )
    .subscribe();
  }

  create(): void {
    if (!this.userService.isLogged) {
      return;
    }
    const { title, img, description, duration, price } = this.form.value as {
      title: string;
      img: string;
      description: string;
      duration: string;
      price: string;
    };

    this.apiService
      .createLesson(this.userId, title, img, description, duration, price)
      .subscribe(() => {
        console.log('Lesson created successfully');
        this.router.navigate(['/lessons']);
      });
    }

  cancel() {
    this.toast.observe({
      success: 'Are you sure ?',
      loading: 'Canceled ...',
      error: ({ message }) => `${message}`,
    });
  }
}
