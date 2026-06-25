👍 Direction correct undi Naresh, kani konchem fine-tuning kavali.

Nuvvu rasindi:

```ts
let user: Record<
  string,
  string | number | boolean | string[]
>
```

Idi valid.

Example:

```ts
const user: Record<
  string,
  string | number | boolean | string[]
> = {
  name: 'Naresh',
  age: 20,
  isAdult: true,
  friends: ['Pushpa', 'Papu']
}
```

✅ Works

---

## Kani Record yokka main purpose idi kaadu

Nuvvu ippudu `Record` ni:

> "Any object create cheyyadaniki"

ani alochistunnav.

Technically tappu kaadu, kani real-world lo ekkuva use case adi kaadu.

---

## Record yokka Real Meaning

```ts
Record<K, V>
```

ante:

> "Ee key type ki, ee value type mapping create cheyyi."

---

### Example 1 - Status Mapping

```ts
const statusLabels: Record<string, string> = {
  critical: 'Critical',
  low: 'Low',
  moderate: 'Moderate'
}
```

Ikkada:

```ts
K = string
V = string
```

---

### Example 2 - User Cache

```ts
type User = {
  id: number;
  name: string;
}

const users: Record<number, User> = {
  1: { id: 1, name: 'Naresh' },
  2: { id: 2, name: 'Ravi' }
}
```

Ikkada:

```ts
K = number
V = User
```

---

## Internal ga ela untundi?

```ts
Record<string, string>
```

almost equivalent to:

```ts
{
  [key: string]: string
}
```

---

```ts
Record<number, User>
```

almost equivalent to:

```ts
{
  [key: number]: User
}
```

---

# Real-Time Analogy

Dictionary imagine cheyyi.

```text
English -> Telugu
```

```text
good -> మంచిది
bad -> చెడు
```

Type:

```ts
Record<string, string>
```

---

Student Marks

```text
101 -> 95
102 -> 88
103 -> 76
```

Type:

```ts
Record<number, number>
```

---

# Interview Question

Given:

```ts
type Bulletin = {
  uuid: string;
  title: string;
}
```

Nuvvu API nundi bulletins tecchav.

Fast lookup kosam:

```ts
{
  'abc-123': {
    uuid: 'abc-123',
    title: 'RHSA-2026'
  },

  'xyz-456': {
    uuid: 'xyz-456',
    title: 'RHBA-2026'
  }
}
```

### Question

Ee object ki type rayi using `Record`.

Hint:

* key = uuid (`string`)
* value = `Bulletin`

Try cheyyi. 😊

---

### Gurthupettukune Formula

```ts
Partial<T>
```

👉 Update Form

---

```ts
Pick<T, K>
```

👉 SELECT specific columns

---

```ts
Omit<T, K>
```

👉 REMOVE specific columns

---

```ts
Record<K, V>
```

👉 LOOKUP TABLE / MAPPING OBJECT

Idi gurthupettukunte real projects lo ekkada use cheyyalo easy ga identify cheyyagalav. 🚀


###### ===============================================================================================================================

Manchi question Naresh. 👍

Nuvvu `Record` ni object tho connect chesav, kani array tho relation artham kaaledu. Adi clear cheddam.

---

# First: Record Array Kaadu

`Record<K, V>` **array create cheyyadu**.

Idi object create chestundi.

Example:

```ts id="6l04vh"
Record<string, string>
```

Means:

```ts id="3o6m13"
{
  [key: string]: string
}
```

Example object:

```ts id="aqtp6x"
const labels: Record<string, string> = {
  critical: "Critical",
  low: "Low"
}
```

---

# Array Example

```ts id="4fdo5i"
const users: User[] = [
  {
    id: 1,
    name: "Naresh"
  },
  {
    id: 2,
    name: "Ravi"
  }
]
```

Ikkada structure:

```text id="0s2vkq"
[
  User,
  User,
  User
]
```

Array lo data **index position** batti untundi.

```ts id="iihb1u"
users[0]
users[1]
```

---

# Record Example

Same data ni Record lo store chesthe:

```ts id="k1w89v"
const users: Record<number, User> = {
  1: {
    id: 1,
    name: "Naresh"
  },
  2: {
    id: 2,
    name: "Ravi"
  }
}
```

Ikkada structure:

```text id="8bmq4v"
{
  key: User,
  key: User
}
```

Access:

```ts id="n7f0k2"
users[1]
users[2]
```

---

# Real Difference

### Array

```ts id="n9v8rx"
const users = [
  { id: 1, name: "Naresh" },
  { id: 2, name: "Ravi" }
]
```

Naresh kavali.

Search cheyyali.

```ts id="o7ry4l"
users.find(user => user.id === 1)
```

Loop avuthundi.

---

### Record

```ts id="q2xqk8"
const users = {
  1: { id: 1, name: "Naresh" },
  2: { id: 2, name: "Ravi" }
}
```

Direct ga:

```ts id="i8n3v5"
users[1]
```

Vastundi.

Search avasaram ledu.

---

# Security Bulletin Example

API nundi:

```ts id="kz2k7y"
[
  {
    uuid: "abc",
    title: "RHSA-1"
  },
  {
    uuid: "xyz",
    title: "RHSA-2"
  }
]
```

Idi array.

Oka bulletin kavali ante:

```ts id="q1v3sl"
bulletins.find(
  bulletin => bulletin.uuid === "abc"
)
```

---

Record ga marchithe:

```ts id="c5q5hm"
{
  abc: {
    uuid: "abc",
    title: "RHSA-1"
  },

  xyz: {
    uuid: "xyz",
    title: "RHSA-2"
  }
}
```

Type:

```ts id="0jotzc"
Record<string, Bulletin>
```

Access:

```ts id="v1mrxv"
bulletins["abc"]
```

Direct ga vastundi.

---

# Easy Memory Trick

### Array

```text id="4z7jcz"
Index -> Value
```

```ts id="0i25pn"
[
  "Naresh",
  "Ravi"
]
```

```ts id="0j5jzc"
0 -> Naresh
1 -> Ravi
```

---

### Record

```text id="vfyzm8"
Custom Key -> Value
```

```ts id="h4j8r9"
{
  admin: "Naresh",
  user: "Ravi"
}
```

```ts id="z0ng88"
admin -> Naresh
user -> Ravi
```

---

# One-Line Summary

```ts id="upzn9s"
User[]
```

👉 Index-based collection

---

```ts id="cxr3r0"
Record<string, User>
```

👉 Key-based lookup collection

---

Interview lo evaraina adigithe:

> Array lo data ni position/index tho access chestam.
>
> Record lo custom key (id, uuid, status, code) tho direct ga access chestam.

Ani cheppagaligite chaalu. 💯

Ippudu cheppu:

```ts id="l68n4y"
type Bulletin = {
  uuid: string;
  title: string;
}
```

`Record<string, Bulletin>` use chesi 2 bulletins object rayi. Nuvvu code rayali. 😊
