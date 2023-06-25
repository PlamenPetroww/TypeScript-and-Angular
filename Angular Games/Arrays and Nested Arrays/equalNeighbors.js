function solve(input) {

    let counter = 0;

    for (let i = 0; i < input.length - 1; i++) {
        for (let k = 0; k <= input.length + 1; k++) {
            let firstChar = input[i][0 + k];
            let secondChar = input[i + 1][0 + k];
            if(firstChar === undefined || secondChar === undefined) {
                continue;
            }
            if (firstChar === secondChar) {
                counter++;
            }
        }
    }
    return counter;
}

console.log(solve([['2', '2', '5', '7', '4'],
                    ['4', '0', '5', '3', '4'],
                    ['2', '5', '5', '2', '2']]))
console.log("---------------");
console.log(solve([['2', '3', '4', '7', '0'],
                   ['4', '0', '5', '3', '4'],
                   ['2', '3', '5', '4', '2'],
                   ['9', '8', '7', '5', '4']]))



