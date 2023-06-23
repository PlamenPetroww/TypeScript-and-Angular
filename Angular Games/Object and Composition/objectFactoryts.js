function objectFactoryts(libraryts, ordersts) {
    var result = [];
    for (var _i = 0, ordersts_1 = ordersts; _i < ordersts_1.length; _i++) {
        var _a = ordersts_1[_i], template = _a.template, parts = _a.parts;
        var orderts = Object.assign({}, template);
        for (var _b = 0, parts_1 = parts; _b < parts_1.length; _b++) {
            var part = parts_1[_b];
            var func = libraryts[part];
            ordersts[part] = func;
        }
        result.push(orderts);
    }
    return result;
}
var libraryts = {
    print: function () {
        console.log("".concat(this.name, " is printing a page"));
    },
    scan: function () {
        console.log("".concat(this.name, " is scanning a document"));
    },
    play: function (artist, track) {
        console.log("".concat(this.name, " is playing '").concat(track, "' by ").concat(artist));
    },
};
var ordersts = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];
var productsts = objectFactoryts(libraryts, ordersts);
console.log(productsts);
