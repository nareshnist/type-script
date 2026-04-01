// abstruct  normal methods + abstract methode for child class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log('Animal is moving');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Bark");
    };
    return Dog;
}(Animal));
var d1 = new Dog();
console.log(d1.makeSound());
d1.move();
//. practice 
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    Employee.prototype.displayName = function () {
        console.log("The Employee Name is ".concat(this.name));
    };
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name) {
        return _super.call(this, name) || this;
    }
    Developer.prototype.calculateSalary = function () {
        return 70000;
    };
    return Developer;
}(Employee));
var dev1 = new Developer('Naresh');
console.log(dev1.displayName());
console.log(dev1.calculateSalary());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.calculateSalary = function () {
        return 100000;
    };
    return Manager;
}(Employee));
var m1 = new Manager('Nilame');
console.log(m1.displayName());
