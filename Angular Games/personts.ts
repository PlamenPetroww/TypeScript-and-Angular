class Personts {
    firstName: string;
    lastName: string;
    age: number;
    email: string;

    constructor(firstName: string, lastName: string, age: number, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

let p3 = new Personts('Anna', 'Simpson', 22, 'anna@yahoo.com');
let p4 = new Personts('Plamen', 'Petrov', 33, 'petrov.abv.bg');
let peoplets = [p3, p4];

console.log(peoplets.join('\n'));
