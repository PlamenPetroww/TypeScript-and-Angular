function solvets(input) {
    var result = {};
    for (var i = 0; i < input.length; i += 2) {
        var weight = Number(input[i + 1]);
        result[input[i]] = weight;
    }
    console.log(result);
}
solvets(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
