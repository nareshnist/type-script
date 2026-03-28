// 1. Method Overloading (TypeScript way)
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    return Calculator;
}());
var c1 = new Calculator();
console.log(c1.add(10, 20));
console.log(c1.add(10, "40"));
