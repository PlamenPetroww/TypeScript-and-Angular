function solvets(input: Array<string | number>): void {

    let result: { [product: string]: number } = {};

    for (let i = 0; i < input.length; i += 2) {
        let weight = Number(i+1)
        result[input[i]] = weight;
    }
    console.log(result)
}


solvets(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
