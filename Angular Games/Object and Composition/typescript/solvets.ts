function solvets(input: string[]): void {
    let objts: { [city: string]: number } = {};

    for (let item of input) {
        let [city, peoplets] = item.split(' <-> ');

        if (!objts.hasOwnProperty(city)) {
            objts[city] = Number(peoplets);
        } else {
            objts[city] += Number(peoplets);
        }
    }

    for (let [city, people] of Object.entries(objts)) {
        console.log(`${city} : ${people}`);
    }
}

solvets(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);
