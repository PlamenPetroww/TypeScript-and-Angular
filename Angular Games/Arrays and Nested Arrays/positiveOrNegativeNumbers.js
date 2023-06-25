function solve(input) {

    let positive = [];

    for(let el of input) {
        if(el < 0) {
            positive.unshift(el);
        } else {
            positive.push(el)
        }
    }
    positive.forEach(element => {
        console.log(element)
    });
}

solve([7, -2, 8, 9])
console.log("------------------")
solve([3, -2, 0, -1])