class Circlets {
    radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }

    get area() {
        return Math.PI * (this.radius ** 2);
    }
}

const circlets = new Circlets(2);
