// Class in typesScript 
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
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        console.log("Hi i am ".concat(this.name));
    };
    return Person;
}());
var p1 = new Person("Naresh", 24);
p1.sayHello();
// Access modifies 
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var u1 = new User('Naresh');
console.log(u1.name);
// Privete access modifier
var User1 = /** @class */ (function () {
    function User1(psd) {
        this.password = psd;
    }
    return User1;
}());
var u2 = new User('12345');
console.log(u2.password);
// Protected 
var Parent = /** @class */ (function () {
    function Parent() {
        this.secret = 'hidden';
    }
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.show = function () {
        console.log(this.secret);
    };
    return Child;
}(Parent));
var c1 = new Child();
console.log(c1.show());
// readonly properties 
var Product = /** @class */ (function () {
    function Product(id, user) {
        this.id = id;
        this.user = user;
    }
    return Product;
}());
var p2 = new Product(121, { name: "naresh" });
console.log(p2.id);
p2.user.name = 'Nani';
console.log(p2.user.name);
// p2.id = 122;
// 5. Constructor shortcut (VERY useful)
var User2 = /** @class */ (function () {
    function User2(name) {
        this.name = name;
    }
    return User2;
}());
var User3 = /** @class */ (function () {
    function User3(name) {
        this.name = name;
    }
    return User3;
}());
var u3 = new User3("Naresh nani");
console.log(u3.name);
// 6. Methods in class
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.count = 0;
    }
    Calculator.prototype.increment = function () {
        this.count++;
    };
    return Calculator;
}());
var c = new Calculator();
var fn = c.increment;
fn();
