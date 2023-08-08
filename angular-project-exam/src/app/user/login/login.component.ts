import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { AuthService } from '../auth.service';
import { HotToastService } from '@ngneat/hot-toast';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {


  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  emailDomains = DEFAULT_EMAIL_DOMAINS;

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: NonNullableFormBuilder,
    private toast: HotToastService
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

    this.authService
    .login(email, password)
    .pipe(
      this.toast.observe({
        
        loading: 'Loading',
        success:'Logged',
        error: 'Invalid'
      })
    )
    .subscribe(() => {
      this.router.navigate(['/'])
    })
  }
}

