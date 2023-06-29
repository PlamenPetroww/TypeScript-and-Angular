import { Component } from '@angular/core';
import { User } from './types/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Title from App Component!';

  users: User[] = [
    { name: 'Plamen', age: 21 },
    { name: 'Petko', age: 31 },
    { name: 'Valq', age: 40 },
    { name: 'Gosho', age: 26 },
  ];
  

  constructor() {
    setInterval(() => {
      this.users.push({
        name: 'DemoName',
        age: 0
      });
      console.log('User is added!');
    }, 3000);
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    const user = {
      name: inputName.value,
      age: Number(inputAge.value),
    };
    if(inputName.value == '' || inputAge.value == '') {
      return;
    }
    this.users = [...this.users, user];
    inputName.value = '';
    inputAge.value = '';

  }
}


