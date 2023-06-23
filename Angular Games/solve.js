class Person {
    constructor(name) {
        this.name = name;
        this.age = age;
    }
}

let peter = new Person('Peter');
let john = new Person('John')

console.log(peter)
console.log(john);

const collection = new Map()

collection.set('peter', '+1-4558-8874');
collection.set('adam', '1+-555-87445');

console.log(collection.get('peter'))

for(let entry of collection) {
    console.log(`Name: ${entry[0]},Phone: ${entry[1]}`)
}
