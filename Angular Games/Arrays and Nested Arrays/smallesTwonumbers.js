function solve(input) {

    let arr = input.sort((a, b) => {
        return a - b;
    })
    let first = arr[0];
    let second = arr[1]
    console.log(`${first} ${second}`);
}

solve([30, 15, 50, 5])