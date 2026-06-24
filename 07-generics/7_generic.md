Bagundi 👍. Constraint concept complete ayindani assume chesi next step ki veldham.

## Multiple Generics Enduku?

Ippativaraku manam:

```ts id="8vrz6q"
function getValue<T>(value: T): T {
  return value;
}
```

chusam.

Ikkada oka generic matrame undi:

```ts id="0mbnd4"
T
```

---

Kani konni situations lo oka type saripodu.

Example:

```ts id="mly4s8"
const user = {
  name: "Naresh",
  age: 30
};
```

Naku object nundi specific property value kavali.

```ts id="4m43zs"
getProperty(user, "name");
```

Result:

```ts id="3xw82q"
"Naresh"
```

---

### First Attempt

```ts id="34svk5"
function getProperty<T>(
  obj: T,
  key: string
) {
  return obj[key];
}
```

Problem:

```ts id="v4c97p"
obj[key]
```

error vasthundi.

Endukante TypeScript ki telidu:

* `obj` lo aa key unda?
* leda?

---

## Solution: Rendava Generic

```ts id="t2e8y4"
function getProperty<T, K extends keyof T>(
  obj: T,
  key: K
) {
  return obj[key];
}
```

Ikkada rendu generics unnayi.

### T

Object type

```ts id="xh67i6"
{
  name: string;
  age: number;
}
```

---

### K

Object key type

```ts id="v8c8m8"
"name" | "age"
```

---

## `keyof` ante enti?

```ts id="c4u8it"
type User = {
  name: string;
  age: number;
};
```

```ts id="7cgr7o"
keyof User
```

result:

```ts id="v3b6b4"
"name" | "age"
```

---

## Usage

```ts id="h5j2az"
const user = {
  name: "Naresh",
  age: 30
};

getProperty(user, "name");
```

TypeScript internally:

```ts id="98y1bn"
T = {
  name: string;
  age: number;
}
```

---

```ts id="8x20jz"
K = "name"
```

Valid ✅

---

### Invalid Example

```ts id="jl6zjv"
getProperty(user, "city");
```

Error ❌

Endukante

```ts id="20k0h0"
"city"
```

`name | age` lo ledu.

---

# Real Life Analogy

Suppose:

```ts id="vut0z0"
T = House
```

House lo rooms:

```ts id="14g8lu"
bedroom
kitchen
hall
```

---

```ts id="jlnzyu"
K extends keyof T
```

ante:

> House lo unna room names matrame use cheyyali.

Valid:

```ts id="r1gdz5"
bedroom
```

✅

---

Invalid:

```ts id="z8es49"
swimmingPool
```

❌

House lo aa room ledu.

---

# Real Project Example

Nuvvu security bulletins project lo:

```ts id="n0crz3"
type Bulletin = {
  uuid: string;
  title: string;
  status: string;
};
```

Reusable sorter function:

```ts id="k6mj1q"
function sortBy<T, K extends keyof T>(
  items: T[],
  key: K
) {
  // sorting logic
}
```

Usage:

```ts id="6f3jkn"
sortBy(bulletins, "title");
```

✅

---

```ts id="vxwvt0"
sortBy(bulletins, "uuid");
```

✅

---

```ts id="fqodsf"
sortBy(bulletins, "city");
```

❌

TypeScript mundhe catch chestundi.

---

## Ippativaraku Nerchukunnavi

### 1. Single Generic

```ts id="vvdy5x"
<T>
```

Any type.

---

### 2. Generic Type

```ts id="evafhx"
ApiResponse<T>
```

Reusable template.

---

### 3. Constraint

```ts id="fr6s52"
<T extends Something>
```

Rules add cheyyadam.

---

### 4. Multiple Generics

```ts id="fg87ld"
<T, K>
```

Oka danikante ekkuva type placeholders.

---

### 5. Keyof

```ts id="84u2h4"
keyof T
```

Object keys union.

---

Generic fundamentals lo next very important topic:

```ts id="epx5pj"
interface Box<T> {}
```

vs

```ts id="nd33l5"
type Box<T> = {}
```

and

```ts id="s6lf8x"
Promise<T>
Array<T>
Record<K, V>
```

Ivi daily project lo ekkuva kanipistayi. Veetini artham chesukunte TypeScript generics meeda strong grip vastundi.
