import { Component } from '@angular/core';
import { User } from './types/User';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Title from App Component!';
  appUsers: User[] = [];

  constructor(public userService: UserService) {
    this.appUsers = this.userService.users;
  }

    setUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
      this.userService.addUser(inputName, inputAge);
    }

  
}


