Super. Ippudu Generic lo chala important concept ki veldham.

```ts
function getFirstItem<T>(items: T[]): T {
  return items[0];
}
```

Idi line by line decode cheddam.

---

# Step 1: T[] ante enti?

Manam already telusu:

```ts
string[]
```

ante

```ts
['a', 'b', 'c']
```

---

```ts
number[]
```

ante

```ts
[1, 2, 3]
```

---

Alage

```ts
T[]
```

ante

> "T type items unna array"

Type ippudu telidu.

Later decide avuthundi.

---

# Example 1

```ts
getFirstItem(['Naresh', 'Ravi']);
```

TypeScript chustundi:

```ts
['Naresh', 'Ravi']
```

idi

```ts
string[]
```

kabatti

```ts
T = string
```

Function ila maruthundi:

```ts
function getFirstItem(items: string[]): string {
  return items[0];
}
```

---

# Example 2

```ts
getFirstItem([10, 20, 30]);
```

TypeScript:

```ts
T = number
```

Function internally:

```ts
function getFirstItem(items: number[]): number {
  return items[0];
}
```

---

# Example 3

```ts
const users = [
  { id: 1, name: 'Naresh' },
  { id: 2, name: 'Ravi' }
];

getFirstItem(users);
```

TypeScript infer chestundi:

```ts
T = {
  id: number;
  name: string;
}
```

Function internally:

```ts
function getFirstItem(
  items: { id: number; name: string }[]
): { id: number; name: string } {
  return items[0];
}
```

---

# Step 2: Return type `: T` ela decide avuthundi?

Function:

```ts
function getFirstItem<T>(items: T[]): T {
  return items[0];
}
```

Observe:

```ts
items: T[]
```

Array lo unna item type

↓

```ts
T
```

---

Array lo first item:

```ts
items[0]
```

---

Suppose:

```ts
const names = ['Naresh', 'Ravi'];
```

Ikkada

```ts
names[0]
```

type enti?

```ts
string
```

kada.

---

Suppose:

```ts
const numbers = [10, 20];
```

Ikkada

```ts
numbers[0]
```

type enti?

```ts
number
```

---

Kabatti:

```ts
T[]
```

nundi item teesthe

```ts
T
```

vastundi.

Anduke return type:

```ts
:T
```

---

# Visual Memory Trick

Imagine basket.

```ts
Basket<string>
```

lopala:

```ts
['apple', 'orange']
```

First fruit:

```ts
basket[0]
```

↓

```ts
string
```

---

Another basket:

```ts
Basket<number>
```

lopala:

```ts
[10, 20, 30]
```

First item:

```ts
basket[0]
```

↓

```ts
number
```

---

# Real Project Example

Nuxt lo Security Bulletins data.

```ts
const bulletins = [
  {
    uuid: '123',
    title: 'Security Bulletin'
  },
  {
    uuid: '456',
    title: 'Another Bulletin'
  }
];
```

Function:

```ts
function getFirstItem<T>(items: T[]): T {
  return items[0];
}
```

Usage:

```ts
const firstBulletin = getFirstItem(bulletins);
```

TypeScript infer chestundi:

```ts
const firstBulletin: {
  uuid: string;
  title: string;
}
```

Automatic ga.

Manual ga type rayalsina avasaram ledu.

---

## Generic ni ippativaraku oka sentence lo

```ts
<T>
```

ante:

> "Type ni ippudu fix cheyyanu. Function/type use chese appudu TypeScript decide chestundi."

---

Ippudu next level basic concept:

```ts
function getProperty<T>(obj: T) {
  return obj.name;
}
```

Ee code enduku error isthundi?

Aa error valla **Generic Constraints (`extends`)** concept automatic ga artham avuthundi. Idi Generic learning lo next important step.
