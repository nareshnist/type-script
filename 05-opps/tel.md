సరే Naresh 👍
మనము **TypeScript OOP (Object-Oriented Programming)** ని పూర్తిగా, step-by-step, **Telugu + English mix లో**, edge cases తో సహా చాలా clear గా నేర్చుకుందాం.

నేను నీకు ఒక్కో concept ని ఇలా explain చేస్తాను:

👉 **Y (ఎందుకు ఇది అవసరం)**
👉 **What (ఏమిటి ఇది)**
👉 **How (ఎలా వాడాలి)**
👉 **Edge cases / mistakes (ఇక్కడ ఎక్కువ మంది తప్పు చేస్తారు)**
👉 **Real example**

---

# 🚀 1. OOP అంటే ఏమిటి?

## 👉 Y (ఎందుకు OOP?)

Big applications (React, Angular, backend) లో code ఇలా ఉండాలి:

* reusable
* maintainable
* scalable

👉 Procedural code (functions only) పెద్ద projects లో messy అవుతుంది.

---

## 👉 What is OOP?

OOP = Object Oriented Programming

👉 Real world objects ని code లో represent చేయడం

Example:

* Car 🚗
* User 👤
* Product 🛒

---

# 🧱 2. Class (TypeScript OOP foundation)

## 👉 What is Class?

Class = Blueprint (ఒక design)

```ts
class Car {
  brand: string;
  speed: number;

  constructor(brand: string, speed: number) {
    this.brand = brand;
    this.speed = speed;
  }

  drive() {
    console.log(`${this.brand} is driving at ${this.speed}`);
  }
}
```

---

## 👉 Object creation

```ts
const car1 = new Car("Tesla", 120);
car1.drive();
```

---

## 👉 Y (why class?)

* multiple objects create చేయొచ్చు
* structure maintain అవుతుంది

---

## ⚠️ Edge Case 1: `this` confusion

```ts
const car = {
  brand: "BMW",
  show: function () {
    setTimeout(function () {
      console.log(this.brand); // ❌ undefined
    }, 1000);
  }
};
```

### ❗ Fix:

```ts
setTimeout(() => {
  console.log(this.brand); // ✅ works
}, 1000);
```

👉 Arrow function `this` bind చేస్తుంది

---

# 🔐 3. Access Modifiers

## 1. public (default)

```ts
class User {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}
```

👉 anywhere access చేయొచ్చు

---

## 2. private 🔒

```ts
class User {
  private password: string;

  constructor(password: string) {
    this.password = password;
  }
}
```

### ❗ Edge case:

```ts
const u = new User("123");
console.log(u.password); // ❌ Error
```

👉 Only class లోనే access

---

## 3. protected 🧬

👉 child classes మాత్రమే access చేయగలవు

```ts
class Parent {
  protected secret = "hidden";
}

class Child extends Parent {
  show() {
    console.log(this.secret); // ✅ allowed
  }
}
```

---

# 📘 4. Readonly properties

## 👉 What?

Value change చేయలేము after initialization

```ts
class Product {
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}
```

---

## ❗ Edge case:

```ts
const p = new Product(1);
p.id = 2; // ❌ Error
```

---

## 👉 Y?

* security
* data integrity

---

# 🧬 5. Inheritance (extends)

## 👉 What?

One class properties another class use చేయడం

```ts
class Animal {
  move() {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Barking...");
  }
}
```

---

## Usage:

```ts
const d = new Dog();
d.move(); // inherited
d.bark();
```

---

## ⚠️ Edge case: constructor issue

```ts
class Animal {
  constructor(public name: string) {}
}

class Dog extends Animal {
  constructor(name: string) {
    super(name); // ❗ must call super
  }
}
```

👉 లేకపోతే error వస్తుంది

---

# 🧠 6. Polymorphism (Important)

## 👉 What?

Same method, different behavior

```ts
class Animal {
  sound() {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Bark");
  }
}
```

---

## Runtime behavior:

```ts
const a: Animal = new Dog();
a.sound(); // Bark
```

---

# 🧩 7. Abstraction (Abstract class)

## 👉 What?

Blueprint but incomplete class

```ts
abstract class Vehicle {
  abstract start(): void;

  stop() {
    console.log("Stopped");
  }
}
```

---

## Child must implement:

```ts
class Car extends Vehicle {
  start() {
    console.log("Car started");
  }
}
```

---

## ❗ Edge case:

```ts
const v = new Vehicle(); // ❌ cannot create object
```

---

## 👉 Y?

* enforce structure
* force implementation

---

# 🧠 8. Interface (Very important in TS)

## 👉 What?

Contract (rule book)

```ts
interface User {
  name: string;
  age: number;
}
```

---

## Use:

```ts
const u: User = {
  name: "Naresh",
  age: 25
};
```

---

## ⚠️ Edge cases:

### 1. extra property

```ts
const u: User = {
  name: "Naresh",
  age: 25,
  city: "AP" // ❌ error
};
```

---

## 👉 Interface vs Class

| Feature        | Interface | Class |
| -------------- | --------- | ----- |
| memory         | no        | yes   |
| implementation | no        | yes   |
| runtime        | no        | yes   |

---

# ⚙️ 9. Static members

## 👉 What?

Class-level property (object కాదు)

```ts
class MathUtil {
  static add(a: number, b: number) {
    return a + b;
  }
}
```

---

## Usage:

```ts
MathUtil.add(2, 3); // 5
```

---

## ❗ Edge case:

```ts
const m = new MathUtil();
m.add(); // ❌ error
```

---

# 🧠 10. Full mental model (important)

👉 Class = blueprint
👉 Object = instance
👉 Interface = rule
👉 Abstract = partial blueprint
👉 Inheritance = reuse
👉 Private = hidden
👉 Readonly = fixed
👉 Static = global inside class

---

# 🔥 Common Interview Edge Cases Summary

### ❌ this lost context

### ❌ missing super()

### ❌ abstract class object creation

### ❌ interface extra properties

### ❌ private access outside class

### ❌ static called from object

---

# 🚀 If you want next step

I can teach you next:

### 1. OOP real-world project (User system / Login system)

### 2. TypeScript OOP interview questions (50+)

### 3. Angular OOP mapping (very important for your job)

### 4. Advanced OOP (SOLID principles)

Just చెప్పు 👍
