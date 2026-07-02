Bagundi Naresh 👍. Nuvvu direction correct ga pattukunnaav, kani `Pick` syntax lo konchem miss ayyindi.

---

## Pick Syntax

```ts id="vkrq8r"
Pick<T, K>
```

Ikkada:

* `T` → Original Type
* `K` → Kavalsina keys

---

### User Type

```ts id="r9it98"
type User = {
    id:number;
    name:string;
    email:string;
}
```

---

### Name + Email matrame kavali

```ts id="vzmv17"
type UserProfile = Pick<User, 'name' | 'email'>
```

TypeScript internally ila chestundi:

```ts id="4wz40m"
type UserProfile = {
    name:string;
    email:string;
}
```

---

### Usage

```ts id="06byhj"
const profile: UserProfile = {
    name: "Naresh",
    email: "naresh@gmail.com"
}
```

✅ Valid

---

### Invalid

```ts id="j2zjlwm"
const profile: UserProfile = {
    id: 1,
    name: "Naresh",
    email: "naresh@gmail.com"
}
```

❌ Error

Endukante:

```ts id="l6dui9"
id
```

`UserProfile` lo ledu.

---

## Nee Code Enduku Work Avvaledu?

Nuvvu rasindi:

```ts id="ahmd1z"
type UserProfile = Pick<User>
```

❌ Error

Endukante `Pick` ki 2 arguments kavali.

```ts id="xj6ca6"
Pick<T, K>
```

Nuvvu `T` matrame ichav.

`K` miss ayyindi.

---

### Inko Mistake

```ts id="v3o2zl"
Pick<User, keyof User>
```

Idi technically valid.

Kani result:

```ts id="t0s6s0"
{
  id:number;
  name:string;
  email:string;
}
```

Endukante:

```ts id="g4a1av"
keyof User
```

equals:

```ts id="6fkjlwm"
'id' | 'name' | 'email'
```

Ante anni keys select chesav.

So final type:

```ts id="mvnqes"
User
```

to same.

---

# Practice

Nuvve try cheyyi.

```ts id="9zgzc7"
type User = {
    id:number;
    name:string;
    email:string;
    age:number;
}
```

### Q1

`UserContact`

Only:

```ts id="zivj44"
{
   name:string;
   email:string;
}
```

`Pick` use chesi rayi.

---

### Q2

`UserId`

Only:

```ts id="77ceyu"
{
   id:number;
}
```

`Pick` use chesi rayi.

---

### Q3

Ee type enti?

```ts id="8xhzl9"
Pick<User, 'name' | 'age'>
```

Final generated type ni nuvve rayi.

Options kaadu.

Direct code rayi. 🚀


🎯 Excellent Naresh!

All 3 correct.

---

## Q1

```ts
type UserContact = Pick<AnotherUser, 'name' | 'email'>
```

TypeScript internally:

```ts
type UserContact = {
    name: string;
    email: string;
}
```

✅ Correct

---

## Q2

```ts
type UserId = Pick<AnotherUser, 'id'>
```

TypeScript internally:

```ts
type UserId = {
    id: number;
}
```

✅ Correct

---

## Q3

```ts
type UserDetails = Pick<AnotherUser, 'name' | 'age'>
```

Generated type:

```ts
{
    name: string;
    age: number;
}
```

✅ Correct

---

# Pick<T, K> Summary

Generic definition approximately ila untundi:

```ts
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
}
```

Ippudu aa code ni artham chesukovalsina avasaram ledu.

Manaki currently gurthupettukovalsindi:

```ts
Pick<User, 'name' | 'email'>
```

ante:

> User nundi name, email properties matrame teesuko.

---

# Real Project Example

```ts
type SecurityBulletin = {
    uuid: string;
    title: string;
    description: string;
    publishedDate: string;
}
```

Table lo:

```ts
uuid
title
```

matrame kavali.

```ts
type BulletinTableRow = Pick<
    SecurityBulletin,
    'uuid' | 'title'
>
```

Idi real-world lo chala common.

---

## Practice Challenge (No Hints)

Ippudu `Omit<T, K>` ni nuvve guess cheyyi.

Given:

```ts
type User = {
    id: number;
    name: string;
    email: string;
    password: string;
}
```

Question:

Database nundi data vachindi.

API response lo:

```ts
password
```

field pampakudadhu.

`Omit` use chesi:

```ts
{
    id:number;
    name:string;
    email:string;
}
```

type create cheyyi.

Type name:

```ts
UserResponse
```

Mari `Pick` ki `Omit` ki difference enti ani kuda oka sentence lo rayi.

Code rayi. 🚀




#### ======================================================================================================

🎯 Excellent Naresh!

All 3 correct.

---

## Q1

```ts
type UserContact = Pick<AnotherUser, 'name' | 'email'>
```

TypeScript internally:

```ts
type UserContact = {
    name: string;
    email: string;
}
```

✅ Correct

---

## Q2

```ts
type UserId = Pick<AnotherUser, 'id'>
```

TypeScript internally:

```ts
type UserId = {
    id: number;
}
```

✅ Correct

---

## Q3

```ts
type UserDetails = Pick<AnotherUser, 'name' | 'age'>
```

Generated type:

```ts
{
    name: string;
    age: number;
}
```

✅ Correct

---

# Pick<T, K> Summary

Generic definition approximately ila untundi:

```ts
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
}
```

Ippudu aa code ni artham chesukovalsina avasaram ledu.

Manaki currently gurthupettukovalsindi:

```ts
Pick<User, 'name' | 'email'>
```

ante:

> User nundi name, email properties matrame teesuko.

---

# Real Project Example

```ts
type SecurityBulletin = {
    uuid: string;
    title: string;
    description: string;
    publishedDate: string;
}
```

Table lo:

```ts
uuid
title
```

matrame kavali.

```ts
type BulletinTableRow = Pick<
    SecurityBulletin,
    'uuid' | 'title'
>
```

Idi real-world lo chala common.

---

## Practice Challenge (No Hints)

Ippudu `Omit<T, K>` ni nuvve guess cheyyi.

Given:

```ts
type User = {
    id: number;
    name: string;
    email: string;
    password: string;
}
```

Question:

Database nundi data vachindi.

API response lo:

```ts
password
```

field pampakudadhu.

`Omit` use chesi:

```ts
{
    id:number;
    name:string;
    email:string;
}
```

type create cheyyi.

Type name:

```ts
UserResponse
```

Mari `Pick` ki `Omit` ki difference enti ani kuda oka sentence lo rayi.

Code rayi. 🚀
