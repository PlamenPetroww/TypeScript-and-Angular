class Human {
    speak() {
        console.log('Hello!');
    }
}


class Person extends Human{
    private name: string;
    public age: number;

    constructor(name: string, age: number) {
        super();
        this.name = name;
        this.age = age;
    }
}

const personPlamen = new Person ('Plamen', 24);
personPlamen.speak()