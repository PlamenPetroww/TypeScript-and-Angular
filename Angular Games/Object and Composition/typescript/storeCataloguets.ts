function storeCataloguests(input: string[]):void {
    
    let shop : {[product: string]: number} = {};
    let ch = '';
    let chToObj: any[]= [];

    for(let el of input) {
        let [product, priceStr] = el.split(' : ');
        let price = Number(priceStr);
        ch = product[0];
        shop[product] = price;
        if(chToObj.includes(ch)) {
            continue;
        }
        chToObj.push(ch);
    } 
    let sorted = Object.entries(shop).sort(([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB)
    })
    let sortedCh = chToObj.sort((a, b) => {
        return a.localeCompare(b);
    })

    for(let el of sortedCh) {
        console.log(el);
        let firstCh = el[0];
        for(let el of Object.entries(sorted)) {
            let nextCh = el[1][0][0];
            if(firstCh !== nextCh) {
                continue;
            }
            console.log(`  ${el[1][0]}: ${el[1][1]}`)
        }
    }

}

storeCataloguests(['Appricot : 20.4',
'Fridge : 1500',
 'DV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)