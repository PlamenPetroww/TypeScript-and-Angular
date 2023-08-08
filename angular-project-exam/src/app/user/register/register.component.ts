import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassord = control.get('confirmPassword')?.value;

    if (password && confirmPassord && password !== confirmPassord) {
      return { passwordDontMatch: true };
    } else {
      return null;
    }
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]],
  },
  {validators:passwordsMatchValidator()}
  );

  emailDomains = DEFAULT_EMAIL_DOMAINS;

  constructor(
    private router: Router,
    private authService: AuthService,
    private toast: HotToastService,
    private userService: UserService,
    private fb: NonNullableFormBuilder
  ) {}

  ngOnInit(): void {}

  get username() {
    return this.registerForm.get('username')
  }

  get email() {
    return this.registerForm.get('email')
  }

  get password() {
    return this.registerForm.get('password')
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword')
  }

  submit() {
    const {username, email, password} = this.registerForm.value;
  
  if(!this.registerForm.valid || !username || !password || !email) {
    return;
  }

  this.authService.signUp(email, password).pipe(
    this.toast.observe({
      success: 'Congatulation! You have a account!',
      loading: 'Signing up ...',
      error: ({message}) => `${message}`,
    })
  )
  .subscribe(() => {
    this.router.navigate(['/']);
  })
  }
}
