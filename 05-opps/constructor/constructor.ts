// class User {
//   name: string;

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

class Parent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name: string) {
    // ❌ Error if super not called
    super(name)
  }
}

let c1 = new Child('naresh')
console.log(c1.name)