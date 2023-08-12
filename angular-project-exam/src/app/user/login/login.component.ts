import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { AuthService } from '../auth.service';
import { Subject, catchError, takeUntil } from 'rxjs';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { MessageComponent } from 'src/app/core/message/message.component';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  auth = getAuth();

  emailIcon = faAt;
  passwordIcon = faKey;

  loginForm = this.fb.group({
    email: [
      '',
      [Validators.required, Validators.email, Validators.minLength(6)],
    ],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  emailDomains = DEFAULT_EMAIL_DOMAINS;

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: NonNullableFormBuilder,
    private message: MessageComponent
  ) {}

  ngOnInit(): void {
    /* onAuthStateChanged(this.auth, (user) => {
      if(user) {
        console.log(user.email)
      }
    }) */

  }

  private destroy$ = new Subject<void>();

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
      .login$(email, password)
      .pipe(
        catchError((error) => {
          this.message.showToastrAfterUnsuccess();
          return error;
        }),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.message.showToastrAfterSuccess();
        
        this.router.navigate(['/']);
      });
    }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
