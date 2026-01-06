# TypeScript: Interface & Discriminated Union

This document explains **Interfaces** and **Discriminated Unions** in TypeScript with clear concepts, examples, and real-world intuition. You can directly copy this into your README.

---

## 1️⃣ Interface in TypeScript

### 📌 What is an Interface?

An **interface** defines the **shape of an object**.

> Think of it as a **contract**: if an object claims to follow an interface, it **must implement all required properties**.

---

### ✅ Basic Example

```ts
interface User {
  id: number;
  name: string;
  email?: string;
}
```

* `id` → required, number
* `name` → required, string
* `email?` → optional

---

### ✅ Usage

```ts
const user: User = {
  id: 1,
  name: "Naresh"
};
```

✔ Compile-time safety
✔ Missing or wrong types are caught early

---

### 🧠 Why Use Interfaces?

❌ Without interface:

```ts
function printUser(user: { id: number; name: string }) {}
```

* Repetitive
* Hard to maintain

✅ With interface:

```ts
function printUser(user: User) {}
```

✔ Reusable
✔ Clean
✔ Self-documenting

---

### 🔹 Interface vs Type (Quick Comparison)

| Interface                    | Type                                  |
| ---------------------------- | ------------------------------------- |
| Best for object shapes       | Can define primitives, unions, tuples |
| Can be extended              | Can combine using unions              |
| Supports declaration merging | Cannot be reopened                    |

Example of extension:

```ts
interface Admin extends User {
  role: "admin";
}
```

---

## 2️⃣ Discriminated Union

### 📌 What is a Discriminated Union?

A **Discriminated Union** is a union of object types that share a **common literal property** (called a discriminator).

It allows TypeScript to **automatically narrow types safely**.

---

### 🧠 Real-world Scenario

An API response can be:

* Success
* Error
* Loading

Each state has **different properties**.

---

### ❌ Bad Approach (No Discriminator)

```ts
interface ApiResponse {
  status: string;
  data?: { name: string };
  message?: string;
}
```

❌ TypeScript cannot guarantee safety
❌ Forces optional chaining everywhere

---

### ✅ Correct Approach — Discriminated Union

#### Step 1: Define interfaces with literal discriminator

```ts
interface ApiSuccess {
  status: "success";
  data: {
    id: number;
    name: string;
  };
}

interface ApiError {
  status: "error";
  message: string;
}

interface ApiLoading {
  status: "loading";
}
```

---

#### Step 2: Create Union Type

```ts
type ApiResponse = ApiSuccess | ApiError | ApiLoading;
```

---

### 🧠 How TypeScript Narrows Types

```ts
if (response.status === "success") {
  response.data.name; // ✅ safe
}
```

TypeScript understands exactly **which object shape** is active.

---

### ✅ Best Practice: `switch` Statement

```ts
function handleApiResponse(response: ApiResponse): string {
  switch (response.status) {
    case "success":
      return response.data.name;

    case "error":
      return response.message;

    case "loading":
      return "Loading...";
  }
}
```

✔ No `any`
✔ No unsafe casting
✔ No optional chaining needed

---

## 🔥 Why Discriminated Unions Are Powerful

### Without them:

* Runtime errors
* Undefined access
* Unsafe code

### With them:

* Compile-time safety
* Smart auto-completion
* Cleaner logic
* Zero runtime checks

---

## 🚀 Real-world Usage

Discriminated unions are used in:

* API response handling
* Redux / state reducers
* Vue & React state machines
* Permission systems
* Feature flags

---

## 🧠 Mental Model (Remember This)

* **Interface** → describes *what an object looks like*
* **Discriminated Union** → describes *which version of the object you have*

---

## ✅ Quick Self-Check Questions

1. Why must the discriminator be a **literal**, not `string`?
2. Why is optional chaining unnecessary inside discriminated unions?
3. Can two union members share the same discriminator value?

---

✔ You can now safely use interfaces and discriminated unions in real-world TypeScript projects.

