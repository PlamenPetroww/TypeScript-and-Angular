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
  const personLina = new Person(lisasCar, linasWallet, 'Lina')