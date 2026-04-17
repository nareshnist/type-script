Nice 👍 idi chala mandiki confusion untundi — **`unknown` vs `any`** 🔥
Simple ga, clear ga ardham ayye laga cheptanu 👇

---

# 🧠 `unknown` ante emiti?

👉
**`unknown` = “naaku type teliyadu… kani blindly use cheyyanu”**

👉 TS chepthundi:
➡️ “use cheyali ante mundu check cheyyu (type guard use cheyyu)”

---

# 🔥 `any` vs `unknown`

| Type      | Behavior                          |
| --------- | --------------------------------- |
| `any`     | emi aina cheyyachu (unsafe ❌)     |
| `unknown` | check chesi use cheyyali (safe ✅) |

---

## ❌ `any` Example (Danger)

```ts
let data: any = "Naresh";
console.log(data.toUpperCase()); // ✅
```

👉 problem: number ayina kuda same code run avtundi → runtime error risk

---

## ✅ `unknown` Example (Safe)

```ts
let data: unknown = "Naresh";

// console.log(data.toUpperCase()); ❌ error
```

👉 direct ga use cheyyalem

---

## ✅ Correct Way (Type Guard tho)

```ts
if (typeof data === "string") {
  console.log(data.toUpperCase()); // ✅
}
```

---

# 🧑‍💻 REAL-TIME USE CASES

## 🚀 1. API Response

```ts
function handleResponse(data: unknown) {
  if (typeof data === "string") {
    console.log(data);
  }
}
```

👉 API nundi emi vastundo teliyadu → unknown use chestham

---

## 🚀 2. JSON.parse

```ts
const data: unknown = JSON.parse('{"name":"Naresh"}');
```

👉 JSON parse result → unknown ga treat cheyyadam better

---

## 🚀 3. Function Inputs (safe coding)

```ts
function process(data: unknown) {
  if (typeof data === "number") {
    return data * 2;
  }
}
```

---

## 🚀 4. Custom Type Guard combo (🔥 best practice)

```ts
type User = { name: string };

function isUser(obj: any): obj is User {
  return obj && typeof obj.name === "string";
}

function handle(data: unknown) {
  if (isUser(data)) {
    console.log(data.name); // ✅ safe
  }
}
```

---

# ❗ WHEN TO USE `unknown`

👉 Use `unknown` when:

### ✅ 1. Data source unknown

* API response
* external libraries
* user input

---

### ✅ 2. You want safety

* avoid runtime errors
* force type checking

---

### ✅ 3. Replace `any`

👉 modern TS rule:

> ❌ avoid `any`
> ✅ use `unknown`

---

# 🚫 WHEN NOT TO USE

👉 already type telisina appudu:

```ts
let name: string = "Naresh"; // no need unknown
```

---

# 🧠 SIMPLE ANALOGY

👉 `any` = stranger ni blindly trust chestav
👉 `unknown` = stranger ni verify chesi lopalaki pampistav 😄

---

# 🔥 FINAL UNDERSTANDING

👉
**`unknown` = safest top-level type**

👉
**Use it when you don’t know the type, but want to handle it safely using type guards**

---

# ⚡ ONE LINE (INTERVIEW)

👉
**`unknown` is a type-safe alternative to `any` that forces type checking before usage.**

---

If you want next 🔥
👉 I’ll show **real React/Vue bug caused by `any` vs fixed using `unknown`**
👉 or **step-by-step API handling pattern (production level)**
