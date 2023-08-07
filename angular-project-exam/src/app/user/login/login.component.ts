import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { AuthService } from '../auth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { catchError, take } from 'rxjs';
import { MessageComponent } from 'src/app/core/message/message.component';
import {MatSnackBar} from '@angular/material/snack-bar'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoggin: boolean = false;
  message: string = 'asd'

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  emailDomains = DEFAULT_EMAIL_DOMAINS;

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: NonNullableFormBuilder,
    // private messageContent: MessageComponent,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit() {
    const { email, password } = this.loginForm.value;

    if (this.loginForm.invalid || !email || !password) {
      return;
    }

    this.authService.login(email, password).subscribe(() => {
      // this.snackbar.open(this.message, undefined, {panelClass: 'success', duration: 2000});
      this.router.navigate(['/']);
    });
  }
}

/* this.authService.login(email, password).pipe(
      catchError((error) => {
        if(error.status === 401) {
          this.router.navigate(['/login'])
        } else {
          this.messageContent.showMessage('Login failed. Please try again.')
          return error.status;
        }
      })
    ).subscribe(() => {
      this.isLoggin=true
      console.log('Well done')
      this.messageContent.showMessage('You are logged in!')
      this.router.navigate(['/'])
    })
  } */
