function cityTaxests(name, population, treasury) {
    return {
        name: name,
        population: population,
        treasury: treasury,
        taxRates: 10,
        collectTaxes: function () {
            this.treasury += this.population * this.taxRates;
        },
        applyGrowth: function (percent) {
            this.population += Math.floor(this.population * percent / 100);
        },
        applyRecession: function (percent) {
            this.treasury -= Math.floor(this.treasury * percent / 100);
        },
    };
};
var cityts = cityTaxests('Tortuga', 7000, 15000);
console.log(cityts);
