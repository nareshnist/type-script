Chaala mandi ikkade confuse avutaru Naresh. Generic artham avuthundi, kani **`extends` (constraint)** enduku vachindo clear ga connect avvadu.

Mundhu constraint ane word marchipoddam. Problem nundi start cheddam.

---

## Step 1: Generic ki Full Freedom

```ts
function printValue<T>(value: T) {
  return value;
}
```

Ikkada:

```ts
printValue("Naresh");
printValue(100);
printValue(true);
```

anni work avuthayi.

Endukante:

```ts
T
```

ante

> "Naku em type vachina parledhu."

---

## Step 2: Oka Requirement vachindi

Suppose manam object lo `name` print cheyyali.

```ts
function getName<T>(obj: T) {
  return obj.name;
}
```

TypeScript antundi:

❌ Error

---

### TypeScript enduku bayapaduthundi?

Nuvvu cheppavu:

```ts
T
```

ante "edaina"

Kabatti ila call cheyyachu:

```ts
getName(100);
```

Ippudu TypeScript alochisthundi:

```ts
100.name
```

Valid aa?

❌ Kaadu

---

Ila kuda call cheyyachu:

```ts
getName(true);
```

```ts
true.name
```

❌ Kaadu

---

Kabatti TypeScript antundi:

> "Nuvvu T ni chala free ga vaduthunnav. Nenu guarantee ivvalenu `name` untundani."

---

# Step 3: Manam TypeScript ki Rule pettam

Manam antam:

> "Bro, nenu evarini accept cheyyanu.
> Name property unna vallani matrame accept chestanu."

Code:

```ts
function getName<T extends { name: string }>(obj: T) {
  return obj.name;
}
```

---

Ikkada

```ts
extends { name: string }
```

ante:

> T ki name property compulsory.

---

## Visual Example

### Allowed

```ts
getName({
  name: "Naresh"
});
```

Has name ✅

---

```ts
getName({
  name: "Naresh",
  age: 30
});
```

Has name ✅

---

```ts
getName({
  name: "Naresh",
  city: "Hyderabad"
});
```

Has name ✅

---

## Not Allowed

```ts
getName({
  age: 30
});
```

No name ❌

---

```ts
getName(100);
```

No name ❌

---

# Real Life Example

Suppose office building undi.

Without constraint:

```ts
<T>
```

ante

> Evaraina lopalaki ravachu.

* Employee ✅
* Visitor ✅
* Delivery boy ✅

---

With constraint:

```ts
<T extends Employee>
```

ante

> Employee card unna vallaki matrame entry.

---

TypeScript lo kuda same.

```ts
<T>
```

↓

Any type

---

```ts
<T extends { name: string }>
```

↓

Name property unna types matrame.

---

# Simple Definition

Constraint ante:

> Generic ki rules pettadam.

Without constraint:

```ts
<T>
```

Any type.

With constraint:

```ts
<T extends Something>
```

Something ni follow cheyyali.

---

## Nuvvu ee code ni chusi cheppu

```ts
function getTitle<T extends { title: string }>(
  item: T
) {
  return item.title;
}
```

Ee rendu lo yedi valid?

### A

```ts
getTitle({
  title: "Security Bulletin"
});
```

### B

```ts
getTitle({
  name: "Naresh"
});
```

Answer cheppu. Enduku valid / invalid ani kuda cheppu. Appudu constraint concept 100% settle ayipothundi.
