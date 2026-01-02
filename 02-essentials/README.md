# TypeScript (TS) – Complete Beginner README

---

## What is TypeScript (TS)?

**TypeScript** is a **superset of JavaScript**.

* Every JavaScript file is valid TypeScript
* TypeScript adds **static typing** and **developer tooling** on top of JavaScript
* TypeScript code is compiled into JavaScript


Example:

```js
// JavaScript
let age = 25;
age = "twenty"; // No error (runtime bug)

// 
```

```ts
// TypeScript
let age: number = 25;
age = "twenty"; // ❌ Compile-time error
```

---

## Why Should We Use TypeScript?

JavaScript issues in large projects:

* Errors appear at runtime
* Hard to maintain large codebases
* No clear function contracts
* Refactoring is risky

**TypeScript fixes these problems by catching errors early and making code predictable.**

---

## Advantages of TypeScript

### 1. Early Error Detection

Errors are caught while writing code.

```ts
function add(a: number, b: number): number {
  return a + b;
}

add(10, "20"); // ❌ Error
```

---

### 2. Better Code Readability

Types act as documentation.

```ts
function getUser(id: number): User {}
```

Anyone reading this knows:

* Input type
* Output type

---

### 3. Excellent IDE Support

* Auto-completion
* Type hints
* Safe refactoring
* Go to definition

(Especially powerful in VS Code)

---

### 4. Safer Refactoring

If you change a type or rename something, TypeScript highlights all affected places.

---

### 5. Best for Large Applications

Used by:

* Angular (mandatory)
* React
* Vue
* Nuxt
* Enterprise-level applications

---

### 6. Modern JavaScript Support

* Latest JS features
* Compiles to older JS for browser compatibility

---

## How TypeScript Works

TypeScript **cannot run directly in browsers**.

Flow:

```
TypeScript (.ts)
   ↓ compile
JavaScript (.js)
   ↓
Browser / Node.js
```

---

## How to Compile TypeScript

### Step 1: Install TypeScript

```bash
npm install -g typescript
```

Verify installation:

```bash
tsc --version
```

---

### Step 2: Create a TypeScript File

```ts
// index.ts
let message: string = "Hello TypeScript";
console.log(message);
```

---

### Step 3: Compile TypeScript to JavaScript

```bash
tsc index.ts
```

This generates:

```js
// index.js
var message = "Hello TypeScript";
console.log(message);
```

---

### Step 4: Run the Compiled JavaScript

```bash
node index.js
```

---

## Using tsconfig.json (Important)

Create config file:

```bash
tsc --init
```

Example `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "outDir": "dist",
    "strict": true
  }
}
```

Compile all TypeScript files:

```bash
tsc
```

---

## Where TypeScript Is Commonly Used

* Angular applications
* React applications
* Vue & Nuxt projects
* Node.js backends
* Jest & Cypress tests

---

## When NOT to Use TypeScript

* Very small scripts
* One-time demo code
* Learning basic JavaScript fundamentals

For production apps → **Always use TypeScript**

---

## Final Summary

| Topic              | Answer                |
| ------------------ | --------------------- |
| What is TS?        | JavaScript with types |
| Why use it?        | Catch bugs early      |
| Main advantage     | Safe & scalable       |
| Runs in browser?   | No                    |
| Needs compilation? | Yes                   |
| Output             | JavaScript            |

---

## Recommendation

For modern front-end development:

> **JavaScript for learning → TypeScript for real projects**

---

*End of README*



###### DATA TYPES 

# TypeScript Basic Types – Explanation & Practice (One-Shot README)

> Copy-paste ready README covering **basic TypeScript types**, short explanations, and **practice questions with answers**.

---

## 1. number

Used for integers and floating-point numbers.

```ts
let age: number = 28;
let price: number = 99.5;
```

Type safety:

```ts
age = "28"; // ❌ Error
```

---

## 2. string

Used for textual data.

```ts
let name: string = "Naresh";
let greeting: string = `Hello ${name}`;
```

---

## 3. boolean

Represents true / false values.

```ts
let isLoggedIn: boolean = true;
```

---

## 4. array

Stores multiple values of the **same type**.

```ts
let marks: number[] = [10, 20, 30];
let users: string[] = ["A", "B"];
```

Alternate syntax:

```ts
let flags: Array<boolean> = [true, false];
```

❌ Invalid:

```ts
let marks: number[] = [10, 20, "30"]; // string not allowed
```

---

## 5. object

Used for structured data with known properties.

```ts
let user: {
  id: number;
  name: string;
  isAdmin: boolean;
} = {
  id: 1,
  name: "Naresh",
  isAdmin: true
};
```

Type inference:

```ts
let user = {
  id: 1,
  name: "Naresh"
};
// inferred type: { id: number; name: string }
```

---

## 6. tuple

Fixed length array with **fixed order and fixed types**.

```ts
let employee: [string, number] = ["Ravi", 101];
```

❌ Wrong order:

```ts
let employee: [string, number] = [101, "Ravi"];
```

---

## 7. literal types

Restricts variable to **specific values only**.

```ts
let theme: "dark" | "light";

theme = "dark";   // ✅
theme = "light";  // ✅
theme = "blue";   // ❌
```

Very useful for UI states and conditions.

---

## 8. enum

Defines a set of named constants.

### Numeric enum

```ts
enum Role {
  Admin,
  User,
  Guest
}

let myRole: Role = Role.Admin;
```

### String enum

```ts
enum Status {
  Success = "SUCCESS",
  Error = "ERROR"
}
```

---

## 9. any

Disables type checking (avoid in real projects).

```ts
let data: any = 10;
data = "hello";
data = true;
```

---

# Practice Questions

## Question 1

What is wrong with this code?

```ts
let marks: number[] = [10, 20, "30"];
```

### Answer

`marks` is declared as `number[]`, but a string value is added, which is not allowed.

---

## Question 2

Fix the tuple declaration.

```ts
let employee: [string, number] = [101, "Ravi"];
```

### Answer

```ts
let employee: [string, number] = ["Ravi", 101];
```

Tuples require correct **order + type**.

---

## Question 3

Which values are allowed?

```ts
let theme: "dark" | "light";
```

### Answer

Allowed values:

* "dark"
* "light"

Not allowed:

* "blue"
* "auto"

---

## Question 4

What is the inferred type?

```ts
let user = {
  id: 1,
  name: "Naresh"
};
```

### Answer

```ts
{
  id: number;
  name: string;
}
```

---

## Question 5 (Real-world)

API status can be:

* "idle"
* "loading"
* "success"
* "error"

### Best Type

```ts
let apiStatus: "idle" | "loading" | "success" | "error";
```

### Why?

* Prevents invalid values
* Best for UI and API state management
* Safer than `string`, `object`, or `any`

---

## Final Notes

* Use **literal types** for fixed values
* Use **tuples** when order matters
* Avoid `any` in production code
* Let TypeScript infer types whenever possible

---

*End of README*



# TypeScript Day 3 – Non‑Null (!) and Optional (?) Operators

> One‑shot, copy‑paste ready README explaining **`?` (optional / optional chaining)** and **`!` (non‑null assertion)** with clear examples and real‑world usage.

---

## 1️⃣ Optional Operator `?`

In TypeScript, `?` means **“this value may be undefined or null”**.

It helps **avoid runtime errors** when accessing properties or calling methods.

---

## A) Optional Property (`?` in type)

Used in **object types / interfaces** when a property is not mandatory.

```ts
type User = {
  id: number;
  name?: string; // optional
};

const user1: User = { id: 1 };
const user2: User = { id: 2, name: "Naresh" };
```

### Why use it?

* Property may or may not exist
* Prevents type errors
* Common in API responses

---

## B) Optional Chaining (`?.`)

Used while **accessing properties or methods safely**.

```ts
let user = {
  profile: {
    email: "test@mail.com"
  }
};

console.log(user.profile?.email); // ✅ safe
console.log(user.address?.city);  // ✅ undefined (no crash)
```

### Without `?.` (runtime error ❌)

```ts
user.address.city; // ❌ Cannot read property 'city'
```

### With `?.`

```ts
user.address?.city; // ✅ undefined
```

✔ Avoids runtime errors

---

## C) Optional Method Call

```ts
let logMessage: (() => void) | undefined;

logMessage?.(); // only runs if function exists
```

---

## 2️⃣ Non‑Null Assertion Operator `!`

`!` tells TypeScript:

> “Trust me, this value is **NOT null or undefined**.”

It **removes null/undefined checks at compile time**.

---

## A) Basic Example

```ts
let input: HTMLInputElement | null = document.querySelector("#name");

input!.value = "Naresh";
```

✔ TypeScript will not complain

⚠️ You are responsible for correctness

---

## B) Without `!` (TypeScript error)

```ts
input.value; // ❌ Object is possibly 'null'
```

---

## C) When to Use `!`

✅ Use when:

* You are **100% sure** value exists
* DOM elements after render
* Values set before usage

❌ Avoid when:

* Value may actually be null
* Data comes from APIs

---

## 3️⃣ `?` vs `!` (Important Difference)

| Operator | Meaning                 | Safety   |
| -------- | ----------------------- | -------- |
| `?`      | May be null / undefined | ✅ Safe   |
| `!`      | Definitely NOT null     | ⚠️ Risky |

---

## 4️⃣ Real‑World Example (API + UI)

```ts
type ApiResponse = {
  data?: {
    user?: {
      name: string;
    };
  };
};

const res: ApiResponse = {};

// Safe access
console.log(res.data?.user?.name);
```

---

## 5️⃣ Common Mistake ❌

Using `!` everywhere like type casting:

```ts
user!.profile!.email!
```

🚫 This defeats TypeScript safety

Prefer:

```ts
user?.profile?.email
```

---

## 6️⃣ Key Takeaways

* `?` prevents runtime crashes
* `!` skips TypeScript checks
* Prefer `?` in most cases
* Use `!` only when you are 100% sure

---

## Interview Tip 💡

> **Optional chaining (`?.`) is safer than non‑null assertion (`!`).**

Say this confidently 😉

---

*End of Day 3 README*


# TypeScript Types – Knowledge Check & Answers (One-Shot README)

> One-shot, copy-paste ready README that **tests your TypeScript knowledge** and includes **correct answers + clarifications** based on the last two conversations.

---

## Covered Topics

* Basic Types (`number`, `string`, `boolean`)
* Arrays & Tuples
* Object Types
* Literal Types
* Enums
* `any`
* Optional Chaining (`?.`)
* Non-null Assertion (`!`)

---

# 🧠 Knowledge Check Questions & Answers

---

## Question 1 — Array

```ts
let values: number[] = [1, 2, 3, "4"];
```

### ✅ Answer

This is invalid because `values` is declared as `number[]`, but a `string` value is added.

---

## Question 2 — Tuple

```ts
let user: [number, string];
user = [10, "Naresh", true];
```

### ✅ Answer

This will NOT compile.

Reason:

* Tuples have **fixed length** and **fixed order**
* Only two elements are allowed: `[number, string]`

---

## Question 3 — Object Type

Define a `Product` type with:

* `id` → number
* `name` → string
* `price` → number
* `discount` → optional number

### ✅ Answer

```ts
type Product = {
  id: number;
  name: string;
  price: number;
  discount?: number;
};
```

---

## Question 4 — Literal Type

```ts
let mode: "create" | "edit";
```

### ✅ Allowed Values

* "create"
* "edit"

### ❌ Not Allowed

* "delete"
* "view"

---

## Question 5 — Enum

```ts
enum Role {
  Admin,
  User,
  Guest
}
```

### ✅ Answer

```ts
Role.User === 1
```

Explanation:

* Enums start from `0` by default

---

## Question 6 — `any`

```ts
let response: any;
response.toUpperCase();
```

### ✅ Answer

* `any` disables TypeScript type checking
* Errors are NOT caught at compile time
* Can cause **runtime crashes**

🚫 Avoid using `any` in production code

---

## Question 7 — Optional Chaining (`?.`)

```ts
const user = {};
console.log(user.profile?.email);
```

### ✅ Output

```ts
undefined
```

Reason:

* `profile` does not exist
* Optional chaining safely returns `undefined`

---

## Question 8 — Non-null Assertion (`!`)

```ts
let input = document.querySelector("#name");
input!.value = "Naresh";
```

### ✅ Answer

* TypeScript will NOT throw an error
* `!` tells TS: **“this value is NOT null”**

⚠️ Important:

* `!` is **NOT type casting**
* Runtime error is still possible if element does not exist

---

## Question 9 — `?` vs `!`

### ✅ Answer

| Operator | Meaning         | Safety   |
| -------- | --------------- | -------- |
| `?.`     | Safe access     | ✅ Safer  |
| `!`      | Skip null check | ⚠️ Risky |

✔ Prefer `?.` whenever possible

---

## Question 10 — Real-world API State

Possible values:

* "idle"
* "loading"
* "success"
* "error"

### ✅ Best Type

```ts
let apiStatus: "idle" | "loading" | "success" | "error";
```

Reason:

* Prevents invalid values
* Ideal for UI & API state handling

---

## 🔑 Key Takeaways

* Arrays → same type values only
* Tuples → fixed length + fixed order
* Use literal types for known values
* Avoid `any`
* Prefer `?.` over `!`
* `!` is NOT type casting

---

## ✅ Final Assessment

* Knowledge Level: **Strong**
* Ready for next topic: **Interface vs Type** 🚀

---

*End of README*




NEVER with function return type
Enum