function townPopulation(input) {
    
    let towns = {};

    for(let el of input) {
        let [name, population] = el.split(' <-> ');
        population = Number(population);

        if(towns[name] !== undefined) {
            population += towns[name];
        }
        towns[name] = population
    }

    let arr = Object.entries(towns);

    for(let [name, population] of arr) {
        console.log(`${name} : ${population}`)
    }
}

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);
