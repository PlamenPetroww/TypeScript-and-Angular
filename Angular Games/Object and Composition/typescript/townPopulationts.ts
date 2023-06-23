function townPopulationts(input: string[]): void {
    let townsts: {[city: string]: number} = {};
    
    for(let el of input) {
        let [name, populationStr] = el.split(' <-> ');
        let population = Number(populationStr);
        if(townsts[name] !== undefined) {
            population += townsts[name];
        }
        townsts[name] = Number(population);
    }

    let arr = Object.entries(townsts);

    for(let [name, population] of arr) {
        console.log(`${name} : ${population}`)
    }

}

townPopulationts(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);