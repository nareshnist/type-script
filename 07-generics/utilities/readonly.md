Super 🎉

Niku `Record` enduku use chestaro artham ayyindi ante utility types lo important milestone cross chesav.

---

# Next Utility Type: Readonly<T>

## Real-Time Problem

Suppose API nundi user data vachindi.

```ts id="f9a2v4"
type User = {
  id: number;
  name: string;
}
```

```ts id="q8z1wy"
const user: User = {
  id: 1,
  name: "Naresh"
}
```

Evaro team member porapatuna:

```ts id="r7m4kc"
user.id = 100;
```

or

```ts id="n3y8pv"
user.name = "Ravi";
```

change chesaru.

Kani mana requirement:

> API nundi vachina data ni mutate cheyyakudadhu.

Appudu:

```ts id="g5v2na"
Readonly<User>
```

use chestam.

---

## Example

```ts id="m8c7lu"
type User = {
  id: number;
  name: string;
}
```

```ts id="z1p6hf"
const user: Readonly<User> = {
  id: 1,
  name: "Naresh"
}
```

---

### Valid

```ts id="w4j9tb"
console.log(user.name);
```

✅ Read cheyyachu

---

### Invalid

```ts id="v6x2qe"
user.name = "Ravi";
```

❌ Error

---

### Invalid

```ts id="c9n5yr"
user.id = 100;
```

❌ Error

---

# Internal ga em chestundi?

```ts id="s7k3am"
Readonly<User>
```

↓

```ts id="u2p8vl"
{
  readonly id: number;
  readonly name: string;
}
```

---

# Security Bulletin Real Example

```ts id="a1m7ko"
type Bulletin = {
  uuid: string;
  title: string;
}
```

```ts id="b5q2xn"
const bulletin: Readonly<Bulletin> = {
  uuid: "abc",
  title: "RHSA-2026"
}
```

Someone tries:

```ts id="e8v4jf"
bulletin.title = "Changed Title";
```

❌ Error

---

# Memory Trick

Imagine government document.

Passport number:

```text id="r4k7uz"
AB123456
```

Passport issue ayyaka change cheyyalem.

Readonly.

---

## Formula

### Partial

```ts id="h2n9wc"
Partial<User>
```

👉 Make everything optional

---

### Pick

```ts id="p8v3jl"
Pick<User, 'name' | 'email'>
```

👉 Select fields

---

### Omit

```ts id="y6m1kr"
Omit<User, 'password'>
```

👉 Remove fields

---

### Record

```ts id="k3w8qt"
Record<string, User>
```

👉 Lookup table

---

### Readonly

```ts id="n7v5bx"
Readonly<User>
```

👉 Nobody can modify properties

---

# Practice

```ts id="f4x9me"
type Product = {
  id: number;
  title: string;
  price: number;
}
```

### Q1

`Readonly<Product>` use chesi object create cheyyi.

---

### Q2

Idi valid aa invalid aa?

```ts id="m1q8rv"
product.price = 1000;
```

---

### Q3

`Readonly<Product>` internally ela untundo rayi.

Code rayi. 😊


#### =============================================================================================================================


🔥 Very good Naresh.

Q1, Q2 correct.

Q3 lo oka small correction undi.

---

## Q1

```ts
type Product = {
    id:number;
    title:string;
}

const product:Readonly<Product> = {
    id:1,
    title:"iphone 16"
}
```

✅ Correct

---

## Q2

```ts
product.price = 1000;
```

❌ Invalid

Endukante:

```ts
Readonly<Product>
```

properties ni modify cheyyanivvadu.

---

## Q3

Nuvvu rasindi:

```ts
{
 readonly id:1,
 readonly title:'naresh'
}
```

❌ Small mistake.

TypeScript utility types **types ni transform chestayi**, values ni kaadu.

Correct answer:

```ts
{
  readonly id: number;
  readonly title: string;
}
```

Leda complete ga:

```ts
type ReadonlyProduct = {
  readonly id: number;
  readonly title: string;
}
```

✅ Idi correct.

---

# Important Concept

Observe:

Original:

```ts
type Product = {
  id: number;
  title: string;
}
```

Readonly:

```ts
type ReadonlyProduct = {
  readonly id: number;
  readonly title: string;
}
```

Readonly em marchindi?

```text
id:number
↓
readonly id:number
```

```text
title:string
↓
readonly title:string
```

Type ni preserve chesindi.

Readonly modifier add chesindi.

---

# Real Project Example

Suppose Nuxt application lo API response vachindi.

```ts
const bulletin: Readonly<SecurityBulletin> = data;
```

Evaraina porapatuna:

```ts
bulletin.title = 'Updated Title';
```

ani rasthe compile-time error vastundi.

Kabatti:

> "Ee data read cheyyachu, modify cheyyakudadhu"

ani TypeScript ki chepthunnam.

---

# Quick Revision Test

Code rayaku.

Just answer.

### Q1

```ts
Partial<User>
```

Real-world use case?

---

### Q2

```ts
Pick<User, 'name' | 'email'>
```

Real-world use case?

---

### Q3

```ts
Omit<User, 'password'>
```

Real-world use case?

---

### Q4

```ts
Record<string, User>
```

Real-world use case?

---

### Q5

```ts
Readonly<User>
```

Real-world use case?

---

Format:

```text
Q1:
Q2:
Q3:
Q4:
Q5:
```

Nuvvu real-world explanation isthe, utility types foundation complete. Tarvata manam **Required<T>** leda **TypeScript Mapped Types** ki vellachu. 🚀
