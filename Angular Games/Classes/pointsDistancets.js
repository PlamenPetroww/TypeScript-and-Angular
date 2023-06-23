var Pointts = /** @class */ (function () {
    function Pointts(x, y) {
        this.x = x;
        this.y = y;
    }
    Pointts.distance = function (p3, p4) {
        var dxts = p3.x - p4.x;
        var dyts = p3.y - p4.y;
        return Math.sqrt(Math.pow(dxts, 2) + Math.pow(dyts, 2));
    };
    Pointts.add = function (p3, p4) {
        var dpts1 = p3.x + p4.x;
        var dpts2 = p3.y + p4.y;
        return dpts1 + dpts2;
    };
    return Pointts;
}());
var p3 = new Pointts(5, 5);
var p4 = new Pointts(8, 7);

console.log(Pointts.distance(p3, p4));
