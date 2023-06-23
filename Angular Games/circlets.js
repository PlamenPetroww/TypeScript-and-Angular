var Circlets = /** @class */ (function () {
    function Circlets(radius) {
        this.radius = radius;
    }
    Object.defineProperty(Circlets.prototype, "area", {
        get: function () {
            return Math.PI * (Math.pow(this.radius, 2));
        },
        enumerable: false,
        configurable: true
    });
    return Circlets;
}());
var circlets = new Circlets(2);
console.log(circlets.area)
