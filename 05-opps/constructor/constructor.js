// class User {
//   name: string;
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
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// let u1 = new User("naresh");
// // 1. Only one constructor allowed
// class Test {
//   constructor() {}
//   // constructor(a:number){} // Multiple constructor implementations are not allowed.ts(2392)
// }
// // 🧠 Solution (simulate multiple constructors)
// class User1 {
//   name: string;
//   constructor(name?: string) {
//     this.name = name || "Default values";
//   }
// }
// let u2 = new User1();
// console.log(u2.name);
// 👨‍👦 2. Parent + Child + super()
var Parent = /** @class */ (function () {
    function Parent(name) {
        this.name = name;
    }
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name) {
        // ❌ Error if super not called
        return _super.call(this, name) || this;
    }
    return Child;
}(Parent));
var c1 = new Child('naresh');
// console.log(c1.name)
