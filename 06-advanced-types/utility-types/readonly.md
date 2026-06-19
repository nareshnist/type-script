Great 👍 — ippudu **`Readonly<T>`** ni deep ga clear ga chuddam 🔥
(frontend lo especially React/Vue lo chala important)

---

# 🔥 3. `Readonly<T>` — Full Deep Explanation

## 🔹 Definition

👉 `Readonly<T>` ante **object properties ni immutable (change cheyakudadhu) ga marchadam**

---

## 🔹 Basic Example

```ts id="8q6bdr"
type User = {
  name: string;
  age: number;
}

const user: Readonly<User> = {
  name: "Naresh",
  age: 25
}
```

### ❌ Modify try chesthe:

```ts id="k5a4dg"
user.name = "Ravi" // ❌ error
```

👉 error: **Cannot assign to 'name' because it is a read-only property**

---

## 🔹 Telugu lo artham

👉 `Readonly` ante:
**"once set ayyaka marchakudadhu"**

---

## 🔹 Real-world meaning

```ts id="1qf5gh"
const config = {
  apiUrl: "https://api.com"
}
```

👉 config change kakudadhu → `Readonly` use chestam

---

## 🔹 Function Example

```ts id="2y7n9k"
type User = {
  name: string;
}

function printUser(user: Readonly<User>) {
  // user.name = "Ravi" ❌ not allowed
  console.log(user.name)
}
```

👉 function lo accidental changes avoid chestundi

---

## 🔹 React / Vue use case 🔥

### 🎯 Props should not be mutated

```ts id="hwr1nv"
type Props = {
  title: string;
}

function Component(props: Readonly<Props>) {
  // props.title = "new" ❌ error
}
```

👉 best practice: props immutable undali

---

## 🔹 Array Example 🔥

```ts id="k9t5xv"
const numbers: Readonly<number[]> = [1, 2, 3]

numbers.push(4) // ❌ error
numbers[0] = 10 // ❌ error
```

👉 array kuda change cheyalemu

---

## 🔹 Important Note ⚠️

👉 `Readonly` only **top-level properties** ki apply avutundi

```ts id="tnt2m4"
type User = {
  name: string;
  address: {
    city: string;
  }
}

const user: Readonly<User> = {
  name: "Naresh",
  address: {
    city: "Hyd"
  }
}
```

### ❌ This is allowed 😲

```ts id="7h6f9y"
user.address.city = "Vizag" // ✅ allowed
```

👉 enduku?

* `address` readonly
* kani `address.city` kaadu

---

## 🔹 Deep Readonly (Advanced)

Nested kuda lock cheyali ante:

```ts id="4n9t9n"
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object
    ? DeepReadonly<T[K]>
    : T[K]
}
```

---

## 🔹 Real-world Scenarios

### ✅ Use cases:

* config objects
* constants
* props (React/Vue)
* state safety
* API response (read-only view)

---

## 🔹 When NOT to use ❌

* data change cheyali ante
* forms / mutable state

---

## 🔹 Combination Example 🔥

```ts id="gchz8k"
type User = {
  name: string;
  age: number;
}

type ReadonlyUser = Readonly<User>
type PartialReadonlyUser = Readonly<Partial<User>>
```

---

## 🔹 Mind Hack 💡

* `Readonly` → **lock 🔒 chestundi**
* change cheyakudadhu

---

## 🔹 Summary

👉 `Readonly<T>` =
**"object properties ni immutable ga marchadam"**

---

## 🔹 Small Practice

```ts id="y8j6bp"
type Product = {
  name: string;
  price: number;
}
```

👉 create:

* `ReadonlyProduct`
* try modify chey (error observe chey)

---

## 🚀 Next Step

Next nenu explain chestanu:

👉 `Pick<T, K>` (very useful for UI 🔥)

---

Continue cheddama? 😎
