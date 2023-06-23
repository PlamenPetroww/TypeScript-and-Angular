function solve(input) {

    let obj = {};

    for(let item of input) {
        let [city, people] = item.split(' <-> ');
        people = Number(people);
        if(!obj.hasOwnProperty(city)) {
            obj[city] = {};
            obj[city] = people;
        } else {
            obj[city] += people;
        }
    };
    for(let [city, people] of Object.entries(obj)) {
        console.log(`${city} : ${people}`)
    }
}

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])