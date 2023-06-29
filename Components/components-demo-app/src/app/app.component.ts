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

class Wallet {
  balance = 0;
  name = '';

  constructor(name: string, balance: number) {
    this.balance = balance;
    this.name = name;
  }
}

class Car {
  model = '';
  
  constructor(model: string) {
    this.model = model;
  }
}

class Person {
  wallet: Wallet;
  car: Car;

  constructor(car: Car, wallet: Wallet, name: string) {
    this.car = car;
    this.wallet = wallet;
  }
}

const lisasCar = new Car('BMW');
const linasWallet = new Wallet('Lina', 500);
const personLina = new Person(lisasCar, linasWallet, 'Lisa')
