function solve(input) {

    let result = [];
    let num = 0;
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let counter = 0;
    let startSecondDiagonal = 0;

    for(let i = 0; i < input.length; i++) {
        num = input[i];
        for(let j = 0; j < 1; j++) {
            firstDiagonal += num[j + counter];
            counter++;
        }
    }
    result.push(firstDiagonal);
    startSecondDiagonal = counter;
    for(let i = 0; i < input.length; i++) {
        num = input[i];
        for(let j = counter - 1; j >= 0; j--) {
            secondDiagonal += num[j];
            counter--;
            break;
        }
    }
    result.push(secondDiagonal);
    console.log(result.join(" "));
}

solve([[20, 40],
[10, 60]]);
solve([[3, 5, 17],
       [-1, 7, 14],
       [1, -8, 89]])

/* for (let i = 0; i < input.length; i++) {
        num = input[i];
        if (i % 2 !== 0) {
            for (let j = 0; j < num.length; j++) {
                if (j % 2 !== 0) {
                    firstDiagonal += num[j];
                } else {
                    secondDiagonal += num[j];
                }
            }
        } else {
            for (let j = 0; j < num.length; j++) {
                if (j % 2 === 0) {
                    firstDiagonal += num[j];
                } else {
                    secondDiagonal += num[j];
                }
            }
        }
    } */