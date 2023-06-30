import { Component, OnInit } from '@angular/core';
import { User } from './types/JsonPlaceHolderUser';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //  providers: [UserService],
})
export class AppComponent implements OnInit {
  title = 'Title from App Component!';
  appUsers: User[] = [];
  isLoading = true;

  constructor(public userService: UserService) {
    this.appUsers = this.userService.users;
  }

  ngOnInit() {
    // this.userService.getUsers().then((users) => {
    //   this.appUsers = users;
    //   this.isLoading = false;
    //});

    this.userService.getUsers().subscribe((users) => {
        this.appUsers = users;
        this.isLoading = false;
  })
  }

  setUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    this.userService.addUser(inputName, inputAge);
  }

}






