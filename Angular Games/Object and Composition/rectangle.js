class Rectangle{
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea() {
        return this.width * this.height
    }
    
}
let rectOne = new Rectangle(4, 5, 'red');
let rectTwo = new Rectangle(10, 20, 'blue')
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
