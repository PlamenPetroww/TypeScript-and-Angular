function storeCataloguests(input) {
    var shop = {};
    var ch = '';
    var chToObj = [];
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var el = input_1[_i];
        var _a = el.split(' : '), product = _a[0], priceStr = _a[1];
        var price = Number(priceStr);
        ch = product[0];
        shop[product] = price;
        if (chToObj.includes(ch)) {
            continue;
        }
        chToObj.push(ch);
    }
    var sorted = Object.entries(shop).sort(function (_a, _b) {
        var keyA = _a[0], valueA = _a[1];
        var keyB = _b[0], valueB = _b[1];
        return keyA.localeCompare(keyB);
    });
    var sortedCh = chToObj.sort(function (a, b) {
        return a.localeCompare(b);
    });
    for (var _b = 0, sortedCh_1 = sortedCh; _b < sortedCh_1.length; _b++) {
        var el = sortedCh_1[_b];
        console.log(el);
        var firstCh = el[0];
        for (var _c = 0, _d = Object.entries(sorted); _c < _d.length; _c++) {
            var el_1 = _d[_c];
            var nextCh = el_1[1][0][0];
            if (firstCh !== nextCh) {
                continue;
            }
            console.log("  ".concat(el_1[1][0], ": ").concat(el_1[1][1]));
        }
    }
}
console.log(storeCataloguests(['Appricot : 20.4',
    'Fridge : 1500',
    'DV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']));
