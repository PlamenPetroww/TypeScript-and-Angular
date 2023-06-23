function solvets(input) {
    var objts = {};
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var item = input_1[_i];
        var _a = item.split(' <-> '), city = _a[0], peoplets = _a[1];
        if (!objts.hasOwnProperty(city)) {
            objts[city] = Number(peoplets);
        }
        else {
            objts[city] += Number(peoplets);
        }
    }
    for (var _b = 0, _c = Object.entries(objts); _b < _c.length; _b++) {
        var _d = _c[_b], city = _d[0], people = _d[1];
        console.log("".concat(city, " : ").concat(people));
    }
}
console.log(solvets(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']));
