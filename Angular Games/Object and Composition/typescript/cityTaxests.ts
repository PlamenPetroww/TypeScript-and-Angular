function cityTaxests(name: string, population: number, treasury: number) {

    return {
        name,
        population,
        treasury,
        taxRates: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRates
        },
        applyGrowth(percent) {
            this.population += Math.floor(this.population * percent / 100);
        },
        applyRecession(percent) {
            this.treasury -= Math.floor(this.treasury * percent / 100);
        },
    };

};

const cityts = 
cityTaxes('Tortuga',
7000,
15000);
console.log(cityts);