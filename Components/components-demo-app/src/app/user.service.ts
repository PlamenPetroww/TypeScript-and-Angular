import { Injectable } from '@angular/core';
import { User } from './types/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {

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
