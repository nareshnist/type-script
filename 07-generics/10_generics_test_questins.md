Excellent idea 👍

Utilities ki vellakunda mundu, Generic fundamentals baga artham ayyayo ledo test cheskundam.

## Level 1: Basic Generic

### Q1

```ts
function identity<T>(value: T): T {
  return value;
}

const result = identity("Naresh");
```

`T` value enti?

A. number
B. string
C. boolean

---

### Q2

```ts
function identity<T>(value: T): T {
  return value;
}

const result = identity(100);
```

`result` type enti?

A. string
B. number
C. unknown

---

## Level 2: Generic Type

### Q3

```ts
type Box<T> = {
  value: T;
};

const data: Box<number> = {
  value: 100
};
```

`T` value enti?

A. string
B. number
C. boolean

---

### Q4

```ts
type ApiResponse<T> = {
  data: T;
};

type User = {
  id: number;
  name: string;
};

const response: ApiResponse<User> = {
  data: {
    id: 1,
    name: "Naresh"
  }
};
```

`response.data` type enti?

A. User
B. string
C. ApiResponse

---

## Level 3: Constraints

### Q5

```ts
function getName<T extends { name: string }>(
  obj: T
) {
  return obj.name;
}
```

Idi valid aa?

```ts
getName({
  name: "Naresh",
  age: 30
});
```

A. Valid
B. Invalid

---

### Q6

```ts
function getName<T extends { name: string }>(
  obj: T
) {
  return obj.name;
}
```

Idi valid aa?

```ts
getName({
  age: 30
});
```

A. Valid
B. Invalid

---

## Level 4: Multiple Generics

### Q7

```ts
function getProperty<T, K extends keyof T>(
  obj: T,
  key: K
) {
  return obj[key];
}

const user = {
  name: "Naresh",
  age: 30
};
```

Idi valid aa?

```ts
getProperty(user, "name");
```

A. Valid
B. Invalid

---

### Q8

Same code.

Idi valid aa?

```ts
getProperty(user, "city");
```

A. Valid
B. Invalid

---

## Level 5: Built-in Generics

### Q9

```ts
const names: Array<string> = [
  "Naresh",
  "Ravi"
];
```

Idi valid aa?

```ts
names.push(100);
```

A. Valid
B. Invalid

---

### Q10

```ts
const numbers: Array<number> = [
  1,
  2,
  3
];
```

Idi valid aa?

```ts
numbers.push(10);
```

A. Valid
B. Invalid

---

## Level 6: Default Generic

### Q11

```ts
type Box<T = string> = {
  value: T;
};

const data: Box = {
  value: "Naresh"
};
```

`T` value enti?

A. string
B. number
C. boolean

---

### Q12

```ts
type Box<T = string> = {
  value: T;
};

const data: Box<number> = {
  value: 100
};
```

Final ga `T` enti?

A. string
B. number
C. unknown

---

Reply format:

```text
Q1 - B
Q2 - B
Q3 - ...
...
Q12 - ...
```

Nuvvu answers isthe, nenu prati question ki explanation istha mariyu Generic lo weak areas ekkada unnayo identify chestha.



### ===========================================================================================================================


🎉 Super Naresh!

Nuvvu Generic concepts baga grasp chesav. Let's verify one by one.

| Question | Nee Answer | Correct? |
| -------- | ---------- | -------- |
| Q1       | string     | ✅        |
| Q2       | number     | ✅        |
| Q3       | number     | ✅        |
| Q4       | User       | ✅        |
| Q5       | Valid      | ✅        |
| Q6       | Invalid    | ✅        |
| Q7       | Valid      | ✅        |
| Q8       | Invalid    | ✅        |
| Q9       | Invalid    | ✅        |
| Q10      | Valid      | ✅        |
| Q11      | string     | ✅        |
| Q12      | number     | ✅        |

# Result

```text
12 / 12 Correct
```

🔥 Excellent.

---

## Nenu verify cheyyalanukunna concepts

### Q1 - Q2

```ts
function identity<T>(value: T): T
```

Nuvvu artham chesukunna vishayam:

> T call chesinappudu decide avuthundi.

✅ Clear.

---

### Q3 - Q4

```ts
type ApiResponse<T>
type Box<T>
```

Nuvvu artham chesukunna vishayam:

> Generic type = reusable template.

✅ Clear.

---

### Q5 - Q6

```ts
T extends { name: string }
```

Nuvvu artham chesukunna vishayam:

> Constraint = rule.

> name property compulsory.

✅ Clear.

---

### Q7 - Q8

```ts
K extends keyof T
```

Nuvvu artham chesukunna vishayam:

> key object lo unte valid.

> lekapothe invalid.

✅ Clear.

---

### Q9 - Q10

```ts
Array<string>
Array<number>
```

Nuvvu artham chesukunna vishayam:

> Array generic already TypeScript create chesindi.

> Manam T ni fill chestunnam.

✅ Clear.

---

### Q11 - Q12

```ts
<T = string>
```

Nuvvu artham chesukunna vishayam:

> Type ivvakapothe default use avuthundi.

> Type isthe default override avuthundi.

✅ Clear.

---

# Small Interview Round 😄

Ee 3 questions answer cheyyagaligithe Generic fundamentals complete ani cheppochu.

### Q13

```ts
type Container<T> = {
  data: T;
};

const user: Container<string> = {
  data: "Naresh"
};
```

`T` enti?

---

### Q14

```ts
function getValue<T extends { id: number }>(
  item: T
) {
  return item.id;
}
```

Idi valid aa?

```ts
getValue({
  id: 1,
  name: "Naresh"
});
```

---

### Q15

```ts
type Response<T = string> = {
  data: T;
};

const result: Response = {
  data: "Hello"
};
```

`T` final value enti?

---

Ee 3 ki answer cheppu.

Correct ga cheppithe next chapter:

```ts
Partial<T>
Pick<T, K>
Omit<T, K>
Record<K, V>
```

Utility Types start cheddam. 🚀
