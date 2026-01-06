# TypeScript: Interface vs Type (In-Depth Guide)

This document provides a **deep, practical explanation** of `interface` and `type` in TypeScript. It is **README-ready** and suitable for long-term reference.

---

## 🔥 Core Rule (Remember First)

> **Interface → describes OBJECT SHAPES**
> **Type → describes ANY type expression**

Both are powerful, but they solve **different problems**.

---

## 1️⃣ Interface — Deep Explanation

### 📌 What is an Interface?

An `interface` defines the **structure of an object**.

It answers:

> "What properties must this object have?"

---

### ✅ Basic Example

```ts
interface User {
  id: number;
  name: string;
  email?: string;
}
```

* `id` and `name` are mandatory
* `email` is optional

---

### ✅ Usage

```ts
const user: User = {
  id: 1,
  name: "Naresh"
};
```

✔ Compile-time safety
✔ Missing properties cause errors

---

### 🧠 Why Interfaces Are Powerful

* Clean object modeling
* Excellent tooling support
* Easy to extend
* Used heavily in libraries & frameworks

---

### 🔹 Interface Extension (OOP-style)

```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}
```

✔ Clear inheritance
✔ Highly readable

---

### 🔥 Declaration Merging (ONLY Interfaces)

```ts
interface User {
  id: number;
}

interface User {
  name: string;
}
```

Automatically becomes:

```ts
interface User {
  id: number;
  name: string;
}
```

🧠 Used by:

* DOM typings
* Plugin systems
* Library augmentation

---

## 2️⃣ Type — Deep Explanation

### 📌 What is a Type?

A `type` is a **name for any TypeScript type expression**.

It can describe:

* primitives
* unions
* intersections
* tuples
* functions
* literals
* conditional types

---

### ✅ Examples

```ts
type ID = number | string;
```

```ts
type Status = "idle" | "loading" | "success";
```

```ts
type Point = [number, number];
```

```ts
type Callback = (value: string) => void;
```

✔ Interfaces **cannot** do these

---

## 3️⃣ Object Modeling: Interface vs Type

```ts
interface UserI {
  id: number;
  name: string;
}

type UserT = {
  id: number;
  name: string;
};
```

✔ Behavior is the same
❗ Difference is capability, not syntax

---

## 4️⃣ Extending vs Combining

### Interface → `extends`

```ts
interface Admin extends User {
  role: "admin";
}
```

### Type → Intersection (`&`)

```ts
type Admin = User & {
  role: "admin";
};
```

🧠 Interfaces are more readable for objects

---

## 5️⃣ Discriminated Unions (Type-Only Feature)

```ts
type ApiResponse =
  | { status: "success"; data: string }
  | { status: "error"; message: string }
  | { status: "loading" };
```

✔ Safe type narrowing
✔ Compile-time protection
✔ Impossible with interface alone

---

## 6️⃣ Function Types (Prefer `type`)

```ts
type Handler = (event: Event) => void;
```

Interface alternative (less common):

```ts
interface Handler {
  (event: Event): void;
}
```

---

## 7️⃣ What Interfaces CANNOT Do

❌ Cannot define unions
❌ Cannot alias primitives
❌ Cannot represent tuples
❌ Cannot express conditional types

---

## 🔥 Industry Best Practice Rule

> **Use `interface` for DATA MODELS**
> **Use `type` for STATE, LOGIC & COMPOSITION**

---

## 🧠 Decision Table

| Use Case                     | Recommended |
| ---------------------------- | ----------- |
| API request/response objects | `interface` |
| Component props              | `interface` |
| Domain models                | `interface` |
| Union / Literal types        | `type`      |
| Function signatures          | `type`      |
| Conditional & utility types  | `type`      |

---

## 🚫 Common Mistakes

* Using `type` everywhere
* Using `interface` for unions
* Casting instead of modeling
* Overusing optional chaining

---

## 🧠 Final Mental Model

> **Interface → Shape of an Object**
> **Type → Name for Any Type Expression**

---

## ✅ You Are Now Ready

You now understand **when and why** to use:

* `interface`
* `type`

This knowledge is sufficient for **enterprise-level TypeScript development**.
