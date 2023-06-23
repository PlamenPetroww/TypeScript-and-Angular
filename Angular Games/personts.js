var Personts = /** @class */ (function () {
    function Personts(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    Personts.prototype.toString = function () {
        return "".concat(this.firstName, " ").concat(this.lastName, " (age: ").concat(this.age, ", email: ").concat(this.email, ")");
    };
    return Personts;
}());
var p3 = new Personts('Anna', 'Simpson', 22, 'anna@yahoo.com');
var p4 = new Personts('Plamen', 'Petrov', 33, 'petrov.abv.bg');
var peoplets = [p3, p4];
console.log(peoplets.join('\n'));
