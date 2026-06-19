TypeScript lo **Utility Types** ante already predefined ga unna **ready-made helper types**.
Manam existing types ni **modify / transform / reuse** cheyadaniki use chestam.

---

## 🔹 Simple ga artham:

👉 Utility Types = **“Type ni manipulate cheyadaniki shortcuts”**

---

## 🔹 Yenduku use chestaru?

Manam malli malli same type ni create cheyakunda:

* code duplication tagginchadaniki
* readability improve cheyadaniki
* maintainability easy cheyadaniki
* dynamic ga types create cheyadaniki

---

## 🔹 Example without Utility Type ❌

```ts
type User = {
  id: number;
  name: string;
  email: string;
}

// Partial update kosam malli type rayali
type UpdateUser = {
  id?: number;
  name?: string;
  email?: string;
}
```

👉 Ila manual ga rayadam repetitive 😓

---

## 🔹 With Utility Type ✅

```ts
type User = {
  id: number;
  name: string;
  email: string;
}

type UpdateUser = Partial<User>
```

👉 Same pani easy ga chesam 😎

---

## 🔹 Common Utility Types (Important)

### 1. `Partial<T>`

👉 All properties optional chestundi

```ts
type User = {
  name: string;
  age: number;
}

type OptionalUser = Partial<User>
```

👉 Output:

```ts
{
  name?: string;
  age?: number;
}
```

---

### 2. `Required<T>`

👉 All properties compulsory chestundi

```ts
type User = {
  name?: string;
  age?: number;
}

type FullUser = Required<User>
```

---

### 3. `Readonly<T>`

👉 Properties ni read-only chestundi

```ts
type User = {
  name: string;
}

const user: Readonly<User> = {
  name: "Naresh"
}

// user.name = "Ravi" ❌ error
```

---

### 4. `Pick<T, K>`

👉 Konni properties matrame select chestundi

```ts
type User = {
  id: number;
  name: string;
  email: string;
}

type UserName = Pick<User, "name">
```

---

### 5. `Omit<T, K>`

👉 Konni properties remove chestundi

```ts
type UserWithoutEmail = Omit<User, "email">
```

---

### 6. `Record<K, T>`

👉 Key-value structure create chestundi

```ts
type Roles = "admin" | "user"

const users: Record<Roles, string> = {
  admin: "Naresh",
  user: "Ravi"
}
```

👉 Idi neeku mundu cheppina roles example ki perfect 👍

---

## 🔹 Real-world understanding 🔥

Suppose:

* API nundi full user vastundi
* update time lo konni fields matrame pampali

👉 appudu:

* `Partial` use chestam
* `Pick` use chestam
* `Omit` use chestam

---

## 🔹 Short Summary

| Utility Type | Use               |
| ------------ | ----------------- |
| Partial      | Optional fields   |
| Required     | Mandatory fields  |
| Readonly     | Immutable data    |
| Pick         | Select fields     |
| Omit         | Remove fields     |
| Record       | Object map create |

---

## 🔹 Final line (easy ga gurthupettuko)

👉 **Utility Types = Existing types ni modify cheyadaniki shortcuts**

---

Nee current level ki next step:

👉 “Custom Utility Types (Generics tho create cheyadam)” nerchukunte next level ki velthav 🔥

---

Nuvvu next em kavali?

* real project examples aa?
* leka okka okka utility type deep ga explain cheyala?
