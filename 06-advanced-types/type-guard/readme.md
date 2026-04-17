TypeScript lo **Type Guard** ante 👉 *runtime lo oka variable actual ga ye type lo undo check chesi, TypeScript ki clarity ivvadam*.

Simple ga cheppali ante:
👉 **“Idhi string aa? number aa? object aa?” ani confirm chesi safe ga code rayadam**

---

# 🔰 BASIC LEVEL

## ❓ Problem without Type Guard

```ts
function printLength(value: string | number) {
  console.log(value.length); // ❌ error
}
```

👉 enduku error?
`value` string ayithe `.length` untundi
`number` ayithe undadu

---

## ✅ Solution: Type Guard (typeof)

```ts
function printLength(value: string | number) {
  if (typeof value === "string") {
    console.log(value.length); // ✅ safe
  } else {
    console.log(value); // number
  }
}
```

---

## 🧠 Telugu Explanation

* `typeof` use chesi type check chestham
* TS ki clarity: “ikkada value string”

---

## 🧑‍💻 Real-time Example

```ts
function formatPrice(price: string | number) {
  if (typeof price === "number") {
    return "₹" + price.toFixed(2);
  }
  return price;
}
```

👉 API nundi sometimes string vastundi, sometimes number

---

# 🔥 INTERMEDIATE LEVEL

## 1️⃣ `instanceof` (Objects kosam)

```ts
class User {
  name: string = "Naresh";
}

class Admin {
  role: string = "admin";
}

function checkRole(person: User | Admin) {
  if (person instanceof Admin) {
    console.log(person.role); // ✅
  } else {
    console.log(person.name); // ✅
  }
}
```

---

## 2️⃣ `in` operator

```ts
type Dog = { bark: () => void };
type Cat = { meow: () => void };

function makeSound(animal: Dog | Cat) {
  if ("bark" in animal) {
    animal.bark(); // ✅
  } else {
    animal.meow(); // ✅
  }
}
```

---

## 🧑‍💻 Real-time Example (API response)

```ts
type Success = { data: string };
type Error = { error: string };

function handleResponse(res: Success | Error) {
  if ("data" in res) {
    console.log(res.data);
  } else {
    console.log(res.error);
  }
}
```

👉 Backend responses handle cheyadaniki daily use avutundi

---

# 🚀 ADVANCED LEVEL

## 1️⃣ Custom Type Guard (🔥 Very Important)

```ts
type User = {
  name: string;
};

function isUser(obj: any): obj is User {
  return obj && typeof obj.name === "string";
}
```

### Usage:

```ts
function printUser(data: unknown) {
  if (isUser(data)) {
    console.log(data.name); // ✅ safe
  }
}
```

👉 `obj is User` 👉 idi TypeScript ki signal

---

## 🧑‍💻 Real-time Example (Form / API validation)

```ts
type Product = {
  id: number;
  title: string;
};

function isProduct(obj: any): obj is Product {
  return (
    obj &&
    typeof obj.id === "number" &&
    typeof obj.title === "string"
  );
}

function processData(data: unknown) {
  if (isProduct(data)) {
    console.log(data.title);
  } else {
    console.log("Invalid data");
  }
}
```

👉 API data validate cheyadaniki super useful

---

## 2️⃣ Discriminated Union (🔥 Pro Level)

```ts
type Success = {
  status: "success";
  data: string;
};

type Error = {
  status: "error";
  message: string;
};

function handle(res: Success | Error) {
  if (res.status === "success") {
    console.log(res.data); // ✅
  } else {
    console.log(res.message); // ✅
  }
}
```

👉 React / Vue apps lo chala use avutundi

---

# 🧠 WHY TYPE GUARD (IMPORTANT)

### ❌ Without Type Guard

* runtime errors
* unsafe code
* TS warnings

### ✅ With Type Guard

* safe code
* better autocomplete
* less bugs
* readable logic

---

# 💼 DAY-TO-DAY USE CASES

👉 You will use Type Guards in:

1. API response handling
2. Form validation
3. Error handling
4. Dynamic data (unknown / any)
5. React props / state
6. Feature flags / configs

---

# 🔥 FINAL UNDERSTANDING

👉 Type Guard ante:

> “TypeScript ki runtime lo actual type teliyadaniki manam icche proof”

---

# 🚀 SMALL INTERVIEW ANSWER

👉
**Type Guard is a technique in TypeScript used to narrow down the type of a variable at runtime using checks like `typeof`, `instanceof`, `in`, or custom functions, ensuring type safety and preventing runtime errors.**

---

If you want next level 🔥
👉 I can give **React + Type Guard real project examples (forms, APIs, hooks)**
👉 or **Nuxt/Vue usage (your current stack)**
