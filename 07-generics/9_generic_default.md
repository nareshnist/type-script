Bagundi. Ippudu **Generic Fundamentals lo last important basic topic** chuddam.

# Default Generic Types

Mundhu idi chudu:

```ts
function getValue<T>(value: T): T {
  return value;
}
```

Ikkada `T` compulsory.

---

Kani konni sarlu TypeScript antundi:

> User type ivvakapothe default ga ee type vadukunta.

Appudu ila rastam:

```ts
function getValue<T = string>(value: T): T {
  return value;
}
```

Ikkada

```ts
T = string
```

ante

> T ki default value `string`.

---

## Real Life Analogy

Suppose tea order chestunnav.

Shop owner:

> Sugar cheppakapothe default ga 1 spoon vestanu.

Alage:

```ts
<T = string>
```

ante

> Type cheppakapothe default ga string tiskunta.

---

## Example 1

```ts
type Box<T = string> = {
  value: T;
};
```

Usage:

```ts
const data: Box = {
  value: "Naresh"
};
```

Ikkada manam

```ts
Box
```

matrame rasam.

Type ivvaledu.

Kabatti TypeScript:

```ts
Box<string>
```

ani assume chestundi.

---

Equivalent:

```ts
const data: Box<string> = {
  value: "Naresh"
};
```

---

## Example 2

Default ni Override cheyyachu

```ts
const data: Box<number> = {
  value: 100
};
```

Ikkada

```ts
T = number
```

Default string ignore avuthundi.

---

## Real Project Example

API response.

```ts
type ApiResponse<T = unknown> = {
  data: T;
  success: boolean;
};
```

---

Type teliyakapothe:

```ts
const response: ApiResponse = {
  data: {},
  success: true
};
```

Ikkada:

```ts
T = unknown
```

---

Type telisthe:

```ts
const response: ApiResponse<User> = {
  data: {
    id: 1,
    name: "Naresh"
  },
  success: true
};
```

Ikkada:

```ts
T = User
```

---

# Why use Default Generics?

Without default:

```ts
type Box<T> = {
  value: T;
};
```

Every time:

```ts
Box<string>
Box<number>
Box<User>
```

rayali.

---

With default:

```ts
type Box<T = string> = {
  value: T;
};
```

Simple usage:

```ts
Box
```

possible.

---

# Generic Fundamentals Recap

### 1. Basic Generic

```ts
function getValue<T>(value: T): T
```

`T` = Type Placeholder

---

### 2. Generic Type

```ts
type ApiResponse<T> = {
  data: T;
}
```

Reusable template.

---

### 3. Generic Constraint

```ts
<T extends { name: string }>
```

Rule add chestam.

---

### 4. Multiple Generics

```ts
<T, K>
```

Multiple placeholders.

---

### 5. keyof

```ts
K extends keyof T
```

Object keys matrame allow.

---

### 6. Built-in Generics

```ts
Array<T>
Promise<T>
Record<K, V>
```

TypeScript already provide chestundi.

---

### 7. Default Generics

```ts
<T = string>
```

Type ivvakapothe default ga string use cheyyi.

---

Ippudu niku Generic foundation almost complete ayindi. Next stage lo **`keyof`, `extends`, `Record`, `Pick`, `Omit`, `Partial` laanti utility types generics ni ela use chestayo** nerchukunte TypeScript advanced types chala easy ga artham avuthayi.
