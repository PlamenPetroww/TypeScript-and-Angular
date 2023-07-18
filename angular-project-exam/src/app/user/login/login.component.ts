import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailDomains = DEFAULT_EMAIL_DOMAINS;

  constructor(private router: Router) {}

  login(form: NgForm): void {
    console.log(form.value)
    //this.router.navigate(['/']);
  }

}
