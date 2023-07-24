import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  emailDomains= DEFAULT_EMAIL_DOMAINS;

  constructor(private router: Router) {}

  register(form: NgForm): void {
    console.log(form.value)
    //this.router.navigate(['/']);
  }

}
