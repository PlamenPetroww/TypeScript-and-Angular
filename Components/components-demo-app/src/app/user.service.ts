//import { Injectable } from '@angular/core';
import { User } from './types/JsonPlaceHolderUser';

// @Injectable({
//   providedIn: 'root',
// })
export class UserService {

  users: User[] = [];
  

  constructor() {
    setInterval(() => {
      this.users.push({
        name: 'DemoName',
        age: 0
      });
      // console.log('User is added!');
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

  getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users').then((res) => 
    res.json()
    );
  }
}
