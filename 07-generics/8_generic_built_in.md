Super. Ippudu niku function generics basic ga artham ayyayi. Ippudu **manam already use chestunna generics** chuddam.

Nijanga cheppali ante, nuvvu rojuki generics use chestunnav. Kani adi generic ani teliyakapovachu 😄

---

# 1. Array<T>

Manam daily vadedi.

```ts id="4x8nq5"
const names: string[] = ["Naresh", "Ravi"];
```

Internally TypeScript lo idi ila untundi:

```ts id="5rb34u"
Array<string>
```

---

```ts id="pk8pq8"
const numbers: number[] = [1, 2, 3];
```

Equivalent:

```ts id="vcvfr0"
Array<number>
```

---

### Generic ekkada undi?

```ts id="m65evu"
Array<T>
```

TypeScript Array ni generic ga create chesindi.

---

When:

```ts id="8mykl7"
Array<string>
```

T = string

---

When:

```ts id="jh2ab2"
Array<number>
```

T = number

---

# 2. Promise<T>

Nuvvu Nuxt, GraphQL work chestunnav kada.

```ts id="p6cqgx"
async function getUser() {
  return {
    id: 1,
    name: "Naresh"
  };
}
```

TypeScript infer chestundi:

```ts id="wgpp9z"
Promise<{
  id: number;
  name: string;
}>
```

---

Promise generic structure:

```ts id="sjtkx5"
Promise<T>
```

T ante:

> Future lo resolve ayye value type.

---

Example:

```ts id="e8xq39"
Promise<string>
```

↓

```ts id="7j74lp"
"Naresh"
```

vastundi.

---

Example:

```ts id="9iq8kw"
Promise<number>
```

↓

```ts id="e0bj1y"
100
```

vastundi.

---

# 3. ApiResponse<T>

Manam create chesindi.

```ts id="lxqlxh"
type ApiResponse<T> = {
  data: T;
};
```

Usage:

```ts id="x2xbq4"
ApiResponse<User>
```

↓

```ts id="g08u3o"
{
  data: User
}
```

---

```ts id="0j9ih4"
ApiResponse<Product>
```

↓

```ts id="58bwht"
{
  data: Product
}
```

---

# 4. Interface Generic

Type laage interface ki kuda generics pettachu.

```ts id="mcc5kx"
interface Box<T> {
  value: T;
}
```

---

String box:

```ts id="3zkcc9"
const box: Box<string> = {
  value: "Naresh"
};
```

---

Number box:

```ts id="bdz2f2"
const box: Box<number> = {
  value: 100
};
```

---

Ikkada

```ts id="c64y8u"
Box<T>
```

template.

---

# Real Life Analogy

Amazon parcel box imagine cheyyi.

```ts id="2d8mkl"
Box<T>
```

---

Inside phone:

```ts id="7jvgki"
Box<Phone>
```

---

Inside laptop:

```ts id="on84n8"
Box<Laptop>
```

---

Inside book:

```ts id="vxpmze"
Box<Book>
```

---

Box same.

Content maruthundi.

Exactly generic concept ide.

---

# 5. Record<K, V>

Idi TypeScript lo chala common.

```ts id="mpa5h5"
Record<string, string>
```

Meaning:

```ts id="h5g3hh"
{
  [key: string]: string
}
```

---

Example:

```ts id="hqzcbt"
const users: Record<string, string> = {
  firstName: "Naresh",
  city: "Hyderabad"
};
```

---

Ikkada:

```ts id="uxs7i7"
Record<K, V>
```

K = Key Type

V = Value Type

---

# Multiple Generics Example

```ts id="r6n67q"
type KeyValue<K, V> = {
  key: K;
  value: V;
};
```

Usage:

```ts id="d0zddn"
const data: KeyValue<string, number> = {
  key: "age",
  value: 30
};
```

---

# Most Important Realization

Nuvvu idi chusthe:

```ts id="9r2n1n"
Promise<User>
```

or

```ts id="f8qimn"
Array<string>
```

or

```ts id="0e68is"
Record<string, number>
```

Bayapadaku.

Generic formula apply cheyyi:

```ts id="oab3o4"
Something<T>
```

Ante:

> "Something ane template undi. T ni replace cheyyi."

---

### Example

```ts id="z1jjg5"
Array<string>
```

↓

```ts id="8v6plh"
Array lo string items
```

---

```ts id="1yph17"
Promise<User>
```

↓

```ts id="2cbj8f"
Promise resolve ayyaka User vastadu
```

---

```ts id="9v3t3v"
ApiResponse<Product>
```

↓

```ts id="4m9n4n"
Response lo Product untundi
```

---

Ippudu Generic fundamentals lo last important topic migilindi:

```ts
function identity<T = string>(value: T)
```

Ikkada `T = string` ante enti?

**Default Generic Types**. Idi chala libraries (Vue, React, Nuxt, TypeScript utilities) lo use chestaru. Nuvvu next adhi nerchukunte generics foundation complete ayipothundi.
