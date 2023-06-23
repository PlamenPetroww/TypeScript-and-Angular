function solve(input) {

    let car1 = {
        model: 'Race Car',
        start() {
            console.log(`${this.model} goes vroom!`)
        }
    };
    let car2 = {
        model: 'Station Wagon',
        start: car1.start
    };
    car2.start()
}

solve()