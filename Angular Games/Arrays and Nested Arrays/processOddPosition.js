function solve(input) {

    return input
    .filter((n, i) => i % 2 !== 0)
    .map(n => n * 2)
    .reverse()
    .join(" ");
    
}

let result = solve([3,0,10,4,7,3]);
console.log(result)
/* solve([10, 15, 20, 25]) */
solve([3,0,10,4,7,3])