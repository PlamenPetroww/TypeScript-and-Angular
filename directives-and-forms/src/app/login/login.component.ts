import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  submitHandler(form: NgForm): void {
    if(form.invalid) { // If the form is not valid
      return;
    }
    // Set only to string, when Authentication is correct
    form.setValue({
      email: '',
      password: '',
    })
    const value: {email: string, password: string} = form.value;
    // value to Authentication
    console.log(value.email)
    console.log(value.password)
  }
}
