function solve(input) {

    let biggestNum = 0;
    let smallestNum = 0;
    let myNum = 0;

    for (let i = 0; i < input.length; i++) {
        let num = input[i];
        for (let j = 0; j < num.length; j++) {
            smallestNum = num[j];
            biggestNum = num[j + 1];
            if (biggestNum >= smallestNum) {
                if (myNum >= biggestNum) {
                    continue;
                } else {
                    myNum = biggestNum;
                }
            }
        }
    }
    console.log(myNum)
}

solve([[20, 50, 10],
[8, 33, 145]]);
solve([[3, 5, 7, 12],
[-1, 4, 32, 2],
[8, 32, 0, 43],
[1, 6, 13, 144]])