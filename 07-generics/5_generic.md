Bagundi 👍. Ippudu Generic lo first real problem chuddam.

## Ee code chudu

```ts
function getProperty<T>(obj: T) {
  return obj.name;
}
```

TypeScript error isthundi.

### Error

```ts
Property 'name' does not exist on type 'T'
```

---

## Enduku error?

TypeScript perspective lo alochinchu.

Nuvvu cheppindi:

```ts
function getProperty<T>(obj: T)
```

Ante

> "T edaina avvachu"

---

### Call 1

```ts
getProperty({
  name: 'Naresh'
});
```

Ikkada problem ledu.

---

### Call 2

```ts
getProperty(100);
```

Ikkada:

```ts
T = number
```

Number ki

```ts
100.name
```

untunda?

❌ Ledu.

---

### Call 3

```ts
getProperty(true);
```

Ikkada:

```ts
T = boolean
```

Boolean ki

```ts
true.name
```

untunda?

❌ Ledu.

---

Kabatti TypeScript antundi:

> "Nuvvu T ani cheppav. T string avvachu, number avvachu, boolean avvachu. Andaru `name` property kaligi undaru."

Anduke error.

---

# Manam actually em kavali?

Manaki `name` property unna objects matrame accept cheyyali.

```ts
{
  name: string;
}
```

---

## Solution

```ts
function getProperty<T extends { name: string }>(
  obj: T
) {
  return obj.name;
}
```

Ikkada new word vachindi:

```ts
extends
```

---

## Meaning

```ts
T extends { name: string }
```

ante:

> "T edaina avvachu, kani name property compulsory undali."

---

### Valid

```ts
getProperty({
  name: 'Naresh'
});
```

✅

---

```ts
getProperty({
  name: 'Naresh',
  age: 30
});
```

✅

---

```ts
getProperty({
  name: 'Naresh',
  city: 'Hyderabad'
});
```

✅

---

### Invalid

```ts
getProperty({
  age: 30
});
```

❌

Error:

```ts
Property 'name' is missing
```

---

### Invalid

```ts
getProperty(100);
```

❌

---

# Real Life Analogy

Suppose company ID card rule.

Without constraint:

```ts
T
```

Ante

> Evaraina ravachu.

Employee, Visitor, Delivery Boy, Anyone.

---

With constraint:

```ts
T extends Employee
```

Ante

> Employee badge unna vallane allow chestam.

---

TypeScript lo kuda same.

```ts
T
```

↓

Any type

---

```ts
T extends { name: string }
```

↓

Name property unna types matrame.

---

# Real Project Example

Nuvvu Security Bulletins project lo work chestunnav kada.

```ts
type SecurityBulletin = {
  uuid: string;
  title: string;
};
```

Function:

```ts
function getUuid<T extends { uuid: string }>(
  item: T
) {
  return item.uuid;
}
```

Usage:

```ts
getUuid({
  uuid: '123',
  title: 'Bulletin'
});
```

✅

---

```ts
getUuid({
  title: 'Bulletin'
});
```

❌

Endukante `uuid` ledu.

---

# Important Point

Generic:

```ts
<T>
```

ante

> "Any type"

Constraint:

```ts
<T extends Something>
```

ante

> "Any type kaadu. Ee rules follow ayye types matrame."

---

### Memory Formula

```ts
<T>
```

👉 Freedom

---

```ts
<T extends X>
```

👉 Freedom + Rules

---

Idi Generic Constraints yokka basic idea.

Ippudu next natural step:

```ts
function getValue<T, K>(obj: T, key: K)
```

ikkada **`T` okati, `K` inkoti enduku? Multiple generics enduku use chestam?** ani concept. Idi artham ayithe TypeScript generics meeda strong foundation vastundi.
