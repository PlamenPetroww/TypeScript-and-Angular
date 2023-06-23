function solve(commands){

    let count = 0;

    let parser = {
        increment() { count++; },
        decrement() { count--; },
        reset() { count = 0; }
    }

    for(let command of commands) {
        parser[command]();
    }
    console.log(count)
}

solve(['decrement', 'decrement', 'decrement']);

