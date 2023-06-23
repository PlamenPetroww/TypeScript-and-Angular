class Circle {
    constructor(r) {
        this.radius = r;
    }

    get area() {
        return Math.PI * (this.radius ** 2);
    }
}

const circle = new Circle(2);
console.log(circle.area)