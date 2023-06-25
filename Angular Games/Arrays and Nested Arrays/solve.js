function solve(input) {

    arr = input.sort();
    arr = arr.sort((a, b) => {
        return a - b;
    })
    console.log(arr)
}

solve([1, 2, 400, -200, 820, -2, 34, 3, 4, 5, 6])