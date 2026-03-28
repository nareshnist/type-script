Great 👍 Let’s learn **TypeScript OOP (Object-Oriented Programming)** step by step, very slowly and clearly.

I’ll explain:

* WHY OOP exists
* CLASS basics
* properties (public/private/protected/readonly/static)
* constructors
* methods
* inheritance
* abstraction
* interfaces vs abstract classes
* edge cases (VERY important for interviews)

---

# 1. Why OOP exists (Simple idea)

OOP means:

> “We model real-world things into code”

Example:

* Car
* User
* Bank Account

Instead of writing random functions, we group:

* data (properties)
* behavior (methods)

inside one unit → called **Class**

---

# 2. Class in TypeScript (Basic)

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hi, I am ${this.name}`);
  }
}

const p1 = new Person("Naresh", 25);
p1.sayHello();
```

---

## 🧠 What is happening?

* `class Person` → blueprint
* `new Person()` → creates object
* `constructor()` → runs automatically
* `this` → current object

---

# 3. Access Modifiers (VERY IMPORTANT)

TypeScript gives 3 main access levels:

| Modifier  | Meaning                    |
| --------- | -------------------------- |
| public    | accessible everywhere      |
| private   | only inside class          |
| protected | inside class + child class |

---

## 3.1 public (default)

```ts
class User {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const u = new User("Naresh");
console.log(u.name); // OK
```

---

## 3.2 private (very important edge case)

```ts
class User {
  private password: string;

  constructor(password: string) {
    this.password = password;
  }
}

const u = new User("12345");

console.log(u.password); // ❌ ERROR
```

### 🔥 Edge Case (VERY IMPORTANT)

Even if JS allows access internally, TS blocks it at compile time.

👉 But in real JS runtime:

```ts
(u as any).password // still possible 😬
```

So:

> TypeScript private = compile-time safety only

---

## 3.3 protected

```ts
class Parent {
  protected secret = "hidden";
}

class Child extends Parent {
  show() {
    console.log(this.secret); // OK
  }
}
```

---

### ❌ Edge case

```ts
const c = new Child();
console.log(c.secret); // ERROR
```

---

# 4. readonly (important in interviews)

```ts
class Product {
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}

const p = new Product(1);
p.id = 10; // ❌ ERROR
```

---

## 🔥 Edge Case

readonly only blocks reassignment:

```ts
class A {
  readonly arr = [1, 2, 3];
}

const a = new A();
a.arr.push(4); // ✅ allowed 😬
```

👉 WHY?
Because object reference is same, only value inside changes.

---

# 5. Constructor shortcut (VERY useful)

Instead of:

```ts
class User {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}
```

We can write:

```ts
class User {
  constructor(public name: string) {}
}
```

👉 This is called:

> Parameter Properties

---

# 6. Methods in class

```ts
class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
}
```

---

## 🔥 Edge Case: `this` problem

```ts
class Counter {
  count = 0;

  increment() {
    this.count++;
  }
}

const c = new Counter();
const fn = c.increment;

fn(); // ❌ ERROR (this lost)
```

### Why?

Because function detached from object.

### Fix:

```ts
const fn = c.increment.bind(c);
fn(); // ✅ works
```

---

# 7. static (VERY IMPORTANT)

Static means:

> belongs to class, NOT object

```ts
class MathUtil {
  static add(a: number, b: number) {
    return a + b;
  }
}

MathUtil.add(2, 3); // ✅
```

---

## ❌ Edge Case

```ts
const m = new MathUtil();
m.add(); // ❌ ERROR
```

---

## 🔥 Static vs Instance

| Type     | Access |
| -------- | ------ |
| instance | object |
| static   | class  |

---

# 8. Inheritance (extends)

```ts
class Animal {
  eat() {
    console.log("eating");
  }
}

class Dog extends Animal {
  bark() {
    console.log("barking");
  }
}
```

---

## Usage:

```ts
const d = new Dog();
d.eat();  // from parent
d.bark(); // own method
```

---

## 🔥 Method overriding

```ts
class Animal {
  speak() {
    console.log("animal sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("bark");
  }
}
```

---

## Edge Case: super()

```ts
class Animal {
  speak() {
    console.log("animal");
  }
}

class Dog extends Animal {
  speak() {
    super.speak(); // call parent
    console.log("dog");
  }
}
```

---

# 9. Abstract Class (VERY IMPORTANT)

> Cannot create object directly

```ts
abstract class Shape {
  abstract getArea(): number;
}
```

---

## Child must implement:

```ts
class Circle extends Shape {
  getArea(): number {
    return 3.14 * 10 * 10;
  }
}
```

---

## ❌ Edge Case

```ts
const s = new Shape(); // ❌ ERROR
```

---

# 10. Interface vs Abstract Class

## Interface (ONLY structure)

```ts
interface User {
  name: string;
  age: number;
}
```

---

## Abstract class (structure + logic)

```ts
abstract class User {
  abstract getName(): string;

  print() {
    console.log("Hello");
  }
}
```

---

## Key difference:

| Feature         | Interface | Abstract |
| --------------- | --------- | -------- |
| implementation  | ❌         | ✅        |
| multiple use    | ✅         | ❌        |
| object creation | ❌         | ❌        |

---

# 11. VERY IMPORTANT EDGE CASES (INTERVIEW GOLD)

---

## 11.1 Structural typing (VERY IMPORTANT in TS)

```ts
class A {
  name: string = "A";
}

const obj = { name: "test" };

const a: A = obj; // ✅ allowed
```

👉 WHY?
TypeScript checks STRUCTURE, not class name.

---

## 11.2 Multiple inheritance NOT allowed

```ts
class A {}
class B {}
class C extends A, B {} // ❌ ERROR
```

👉 Solution: use interfaces

---

## 11.3 Private vs JavaScript reality

```ts
class A {
  private x = 10;
}
```

Still accessible in JS via:

```ts
(a as any).x
```

---

## 11.4 Interface merging

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

// merged automatically
```

---

## 11.5 readonly object trap

```ts
readonly obj = { a: 1 };

obj.a = 2; // ✅ allowed
```

---

# 12. Real Mental Model (IMPORTANT)

Think like this:

### Class = Blueprint

### Object = Real thing

### Inheritance = reuse + extend

### Interface = contract

### Abstract = partial contract + logic

### Static = class-level utility

### Private = hidden data

### Protected = shared with children

### Readonly = cannot reassign

---

# If you want next step 🚀

I can teach you:

### 1. Real-world OOP project (Bank system / E-commerce)

### 2. Interview questions (very important)

### 3. OOP vs Functional programming

### 4. SOLID principles (advanced OOP)

### 5. Design patterns in TypeScript

Just tell me 👍
