function townPopulationts(input) {
    var townsts = {};
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var el = input_1[_i];
        var _a = el.split(' <-> '), name_1 = _a[0], populationStr = _a[1];
        var population = Number(populationStr);
        if (townsts[name_1] !== undefined) {
            population += townsts[name_1];
        }
        townsts[name_1] = Number(population);
    }
    var arr = Object.entries(townsts);
    for (var _b = 0, arr_1 = arr; _b < arr_1.length; _b++) {
        var _c = arr_1[_b], name_2 = _c[0], population = _c[1];
        console.log("".concat(name_2, " : ").concat(population));
    }
}
console.log(townPopulationts(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']));
