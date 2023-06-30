import { Injectable } from '@angular/core';
import { User } from './types/JsonPlaceHolderUser';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class UserService {

  users: User[] = [];
  

  constructor(private http: HttpClient) {
    // setInterval(() => {
    //   this.users.push({
    //     name: 'DemoName',
    //     email: '',
    //   });
    //   console.log('User is added!');
    // }, 3000);
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    // const user = {
    //   name: inputName.value,
    //   email: inputAge.value,
    // };
    // if(inputName.value == '' || inputAge.value == '') {
    //   return;
    // }
    // this.users = [...this.users, user];
    inputName.value = '';
    inputAge.value = '';

  }

  getUsers() {
    // PROMISE
    // return fetch('https://jsonplaceholder.typicode.com/users').then((res) => 
    // res.json()
    // );

    //OBSERVABLE
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
