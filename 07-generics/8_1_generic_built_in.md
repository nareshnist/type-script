Exactly Naresh! 🎯 Nuvvu correct direction lo alochistunnav.

Nuvvu cheppindi:

> `Array` ante type already create chesaru. Dantlo ye data untundo manam use chesetappudu chepthunnam kada?

✅ 100% Correct.

---

## Simple Example

TypeScript team already oka generic type create chesindi.

Simplified version:

```ts id="8jdr8m"
interface Array<T> {
  length: number;
  push(item: T): void;
  pop(): T | undefined;
}
```

Idi actual implementation kaadu, concept kosam.

---

### Ippudu manam use chestunnam

```ts id="mukcl2"
const names: Array<string> = [
  "Naresh",
  "Ravi"
];
```

Ikkada:

```ts id="vb1q1w"
T = string
```

---

TypeScript internally ila alochisthundi:

```ts id="c9w1qc"
interface Array<string> {
  length: number;
  push(item: string): void;
  pop(): string | undefined;
}
```

---

Kabatti:

```ts id="ul2ymt"
names.push("Kiran");
```

✅ Valid

---

```ts id="8g5vho"
names.push(100);
```

❌ Error

Endukante

```ts id="m44pzf"
T = string
```

---

# Number Array

```ts id="v7k27n"
const numbers: Array<number> = [
  1,
  2,
  3
];
```

Ikkada:

```ts id="n4zg7z"
T = number
```

---

Internal ga:

```ts id="kh8ig3"
interface Array<number> {
  push(item: number): void;
}
```

---

Kabatti:

```ts id="vud3l8"
numbers.push(10);
```

✅

---

```ts id="fzoczd"
numbers.push("Naresh");
```

❌

---

# Idi Generic Enduku?

Array ni TypeScript team ila create cheyyaledu:

```ts id="kixnzn"
interface StringArray {}
```

```ts id="6h2f0g"
interface NumberArray {}
```

```ts id="9n45tl"
interface BooleanArray {}
```

Ila chesthe thousands of types create cheyyali.

---

Instead:

```ts id="4i96rr"
interface Array<T> {}
```

Oka template create chesaru.

Manam use chesetappudu:

```ts id="4d3jot"
Array<string>
```

or

```ts id="bqjlwm"
Array<number>
```

or

```ts id="n6ov0r"
Array<User>
```

ani cheptham.

---

# Real Life Analogy

Suppose factory box tayaru chestundi.

Factory:

```ts id="b2l54n"
Box<T>
```

matrame create chestundi.

---

Customer 1:

```ts id="57ddul"
Box<Book>
```

---

Customer 2:

```ts id="rzv2pb"
Box<Laptop>
```

---

Customer 3:

```ts id="l3wq5r"
Box<Phone>
```

---

Factory ki lopala em pettestharo teliyadu.

Customer use chesetappudu decide chestadu.

---

# Nuvvu ippudu cheppina sentence ni TypeScript language lo rayali ante

```ts id="yrhnyl"
interface Array<T>
```

ante:

> Array structure ni mundhe create chesaru.

```ts id="cm9wjl"
Array<string>
```

ante:

> Ee particular array lo strings untayi ani manam use chesetappudu specify chestunnam.

---

Anduke Generic ni **"Type Placeholder"** antaru.

```ts id="e2hyc3"
Array<T>
```

Ikkada

```ts id="91ktfc"
T
```

placeholder.

---

```ts id="tt33y8"
Array<string>
```

Ikkada

```ts id="rqkrdo"
T = string
```

replace ayyindi.

---

Ippudu oka question:

```ts
type Box<T> = {
  value: T;
}
```

Nuvvu cheppu.

```ts
type Box<T> = {
  value: T;
}

const data: Box<number> = {
  value: 100
}
```

Ikkada `T` ki final ga ye value assign ayyindi?

A) string
B) number
C) boolean

Answer cheppu. Tarvata manam **TypeScript generics ni TypeScript team ela design chesindi** ane deeper understanding ki veldham.
