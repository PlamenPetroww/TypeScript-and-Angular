class Point {
    constructor(x, y) {
        this.x = x,
        this.y = y
    }

    static distance (p1, p2) {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        return Math.sqrt(dx ** 2 + dy ** 2);
    }

    static add (p1, p2) {
        const dp1 = p1.x + p2.x;
        const dp2 = p1.y + p2.y;
        return dp1 + dp2;
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.add(p1, p2));