సూపర్ Naresh 👍
నువ్వు already **class + access modifiers** clear చేసుకున్నావు — ఇప్పుడు next level concepts ని **deep ga, step-by-step Telugu లో** చూద్దాం.

---

# 🧱 1. Constructor (Deep Understanding)

## 👉 What is constructor?

Class object create చేసినప్పుడు **automatic ga run అయ్యే function**

```ts
class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
```

---

## 👉 Y (ఎందుకు?)

👉 Object create చేసిన వెంటనే initial data set చేయడానికి

```ts
const u = new User("Naresh");
```

---

## ⚠️ Important Points

### 1. Only one constructor allowed

```ts
class Test {
  constructor() {}
  // constructor(a: number) {} ❌ Not allowed
}
```

👉 TS లో multiple constructors direct ga ఉండవు

---

## 🧠 Solution (simulate multiple constructors)

```ts
class User {
  name: string;

  constructor(name?: string) {
    this.name = name || "Guest";
  }
}
```

---

# 👨‍👦 2. Parent + Child + super()

## 👉 Problem first

```ts
class Parent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name: string) {
    // ❌ Error if super not called
    this.name = name;
  }
}
```

---

## 👉 Why error?

👉 Child class → parent properties already exist
👉 So parent constructor run అవ్వాలి first

---

## ✅ Correct way

```ts
class Child extends Parent {
  constructor(name: string) {
    super(name); // 👈 must
  }
}
```

---

## 🧠 Rule (VERY IMPORTANT)

👉 If child has constructor → MUST call `super()`
👉 It must be **first line**

---

## ⚠️ Edge case

```ts
class Child extends Parent {
  age: number;

  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }
}
```

---

