import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
@ViewChild('loginForm') loginForm: NgForm | undefined;

  ngOnInit(): void {
    //will be render only the static content

  }

  // ngAfterView(): void {
  //   will render the final content with the dynamic components
  // }
  submitHandler(): void {
    if(!this.loginForm) return;
    const form = this.loginForm;
    if (form.invalid) {
      // If the form is not valid
      return;
    }
    // Set only to string, when Authentication is correct
    form.setValue({email: '',password: ''});
    const value: { email: string; password: string } = form.value;
    // value to Authentication
    console.log(value.email);
    console.log(value.password);
  }
}
