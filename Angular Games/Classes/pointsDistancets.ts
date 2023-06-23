class Pointts {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    static distance (p3, p4) {
        const dxts = p3.x - p4.x
        const dyts = p3.y - p4.y;
        return Math.sqrt(dxts ** 2 + dyts ** 2);
    }

    static add (p3, p4) {
        const dpts1 = p3.x + p4.x;
        const dpts2 = p3.y + p4.y;
        return dpts1 + dpts2;
    }
}

let p3 = new Pointts(5, 5)
let p4 = new Pointts(8, 7)