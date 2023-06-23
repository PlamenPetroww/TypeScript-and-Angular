function objectFactoryts(libraryts, ordersts) {
    let result: any[] = [];

    for(let {template, parts} of ordersts) {
        let orderts = Object.assign({}, template);

        for(let part of parts) {
            let func = libraryts[part];
            ordersts[part] = func;
        }

        result.push(orderts)
    }
    return result;
}

const libraryts = {
    print: function () {
        console.log(`${this.name} is printing a page`);
      },
      scan: function () {
        console.log(`${this.name} is scanning a document`);
      },
      play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
      },
    };
    const ordersts = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    }
  ];
  const productsts = objectFactoryts(libraryts, ordersts);
  console.log(productsts);
  