Perfect 👍 Manam **TypeScript revision + practical practice** mode lo velladam better.

Nuvvu already cover chesina topics:

* Primitive types: `string`, `number`, `boolean`, `any`
* Reference types: `array`, `object`
* `type`
* Union types
* Literal types
* Optional properties
* Optional chaining `?.`
* Nullish coalescing `??`

Nenu **answers/code ivvanu**. Oka practical question ista → nuvvu code raasi pampu → nenu **review + mistakes + why** explain chestha.

### 🧪 Question 1 — User Profile

Suppose manaki application lo user data ila untundi:

```text
name       → required
age        → required
email      → required
role       → only "admin" or "user"
phone      → optional
address    → optional
```

`address` lo:

```text
city   → required
state  → required
zipcode → optional
```

### Your Task

TypeScript lo:

1. `User` ane **type** create cheyyi.
2. `Address` kosam separate type create cheyyi.
3. `role` ki **literal type** use cheyyi.
4. `phone` and `address` ni optional ga define cheyyi.
5. Oka valid `user` object create cheyyi.
6. `user.address?.zipcode` use chesi zipcode ni access cheyyi.
7. Zipcode lekapothe `"Not provided"` return ayyela `??` use cheyyi.

**Bonus:** `role` ki `"admin"` / `"user"` kakunda `"manager"` assign chesthe TypeScript em chestundo observe cheyyi.

👉 **Nuvvu code raasi pampu.** Nenu line-by-line review chestha.

----

Excellent 👍 **Concepts correct ga apply chesav.** Overall code correct.

### Review

```ts
type Roels = 'admin' | 'user';
```

✅ Correct. Idi **union of literal types**.

Small naming improvement:

```ts
type Roles = 'admin' | 'user';
```

`Roels` → typo only, concept issue kaadu.

---

```ts
type Address = {
    city: string;
    state: string;
    zipcode?: number;
}
```

✅ Correct.

`zipcode?: number` means:

> zipcode property **undachu / undakapovachu**.

---

```ts
type User = {
    name: string;
    age: number;
    email: string;
    role: Roles;
    phone?: number;
    address?: Address;
}
```

✅ Very good.

Especially:

```ts
role: Roles;
```

This means `role` can only be:

```ts
'admin'
'user'
```

And:

```ts
address?: Address;
```

means entire address object itself is optional.

---

Your object:

```ts
const normalUser: User = {
    name: "Naresh",
    age: 25,
    email: "naresh@gmail.com",
    role: 'user',
    address: {
        city: "knl",
        state: "AP"
    }
}
```

✅ Correct.

Notice `zipcode` and `phone` rendu ivvaledu. Still valid because both are optional.

---

### ⭐ Most important part

```ts
console.log(normalUser.address?.zipcode ?? 'Not provided')
```

Excellent. Here you're actually combining **two concepts**:

#### `?.` Optional chaining

```ts
normalUser.address?.zipcode
```

Meaning:

> `address` unte → zipcode access cheyyi
> `address` lekapothe → `undefined`

#### `??` Nullish coalescing

```ts
value ?? 'Not provided'
```

Meaning:

> `value` `null` or `undefined` ayithe → `'Not provided'`

So your flow:

```text
normalUser.address
       ↓
   address exists?
      ↓
     yes
      ↓
address.zipcode
      ↓
   undefined
      ↓
?? "Not provided"
      ↓
"Not provided"
```

### Score: **10/10** 🎯

Syntax lo semicolons/missing semicolon laanti minor style issues aside, **concept understanding correct**.

---

## 🧪 Question 2 — Slightly harder

Ippudu `User` type ni use chesi **update operation** simulate cheddam.

```ts
type User = {
    name: string;
    age: number;
    email: string;
    role: 'admin' | 'user';
}
```

Suppose:

```ts
const user: User = {
    name: "Naresh",
    age: 25,
    email: "naresh@gmail.com",
    role: "user"
}
```

Create a function:

```ts
updateUser(...)
```

Requirements:

1. Function ki existing `user` object pass cheyyali.
2. Second argument lo **name or age or email or role — edaina one/more properties** update cheyyagalali.
3. User existing properties lose avvakudadhu.
4. Function updated user ni return cheyyali.

Example expected behavior:

```ts
updateUser(user, {
    age: 26
})
```

should produce something like:

```ts
{
    name: "Naresh",
    age: 26,
    email: "naresh@gmail.com",
    role: "user"
}
```

**Hint:** Ee question solve cheyyadaniki manam next-level TypeScript concept ki touch avutham, but first nuvvu **nee own approach** try cheyyi.

👉 Code pampu. Nenu direct answer ivvakunda review chestha.

---

Good attempt 👍 **logic correct**, but TypeScript side lo oka important improvement undi.

Nee code:

```ts
function udateUser(user: User, properties: Object): User {
    return {
        ...user,
        ...properties
    }
}
```

### ✅ What you got right

`...user` + `...properties` correct.

```ts
{
    ...user,
    ...properties
}
```

Existing properties ni preserve chestundi, and new properties overwrite chestayi.

So:

```ts
udateUser(normalUser, { age: 30 })
```

→ `age` 30 avutundi, migatha properties remain avutayi.

---

### ❌ Main issue: `Object`

```ts
properties: Object
```

Ila `Object` use cheyyadam **too broad**.

Manam actually cheppali:

> `properties` lo `User` ki sambandhinchina properties matrame undali, and avi optional.

For example, this should be valid:

```ts
{ age: 30 }
{ name: "Ravi" }
{ email: "ravi@gmail.com", age: 30 }
```

But this should **NOT** be valid:

```ts
{ salary: 50000 }
```

because `salary` is not a `User` property.

### 🎯 Your next challenge

`Object` badulu **TypeScript utility type** use chesi function ni correct cheyyi.

Think about this:

> "Existing `User` type lo unna properties anni optional ga kavali."

For example:

```ts
User
↓
name?
age?
email?
role?
```

**Ee concept ki already TypeScript lo built-in utility type undi.**

Try cheyyi. Don't search yet 😄

Hint: **`Partial`** ane word gurthu unda?



----

Exactly! 🔥 **`Partial<User>` correct ga use chesav.**

```ts
function udateUser(user: User, properties: Partial<User>): User {
    return {
        ...user,
        ...properties
    }
}
```

### First call ✅

```ts
udateUser(normalUser, { age: 30 })
```

Valid because `age` is a `User` property.

`Partial<User>` internally conceptually ila chestundi:

```ts
type PartialUser = {
    name?: string;
    age?: number;
    email?: string;
    role?: 'admin' | 'user';
}
```

So **all properties optional**, but **property names and their types remain restricted**.

### Second call ❌

```ts
udateUser(normalUser, { salary: 3000 })
```

TypeScript error వస్తుంది because:

```text
salary ❌
```

`User` type lo `salary` ledu.

So `Partial` means:

> **"User properties are optional"**, NOT **"any property is allowed."**

---

### One small naming correction

```ts
udateUser
```

instead of:

```ts
updateUser
```

Just typo; functionality correct.

---

## 🧪 Question 3 — Union + Literal + Optional chaining

Ippudu oka real-world API response assume cheddam:

```ts
type Product = {
    id: number;
    name: string;
    price: number;
    status: 'available' | 'out-of-stock';
    discount?: number;
}
```

Create:

```ts
const product: Product = {
    // ...
}
```

Then:

1. Product status `"available"` ga pettu.
2. `discount` ivvakunda product create cheyyi.
3. `discount` ni access cheyyi.
4. Discount lekapothe `"No discount"` print cheyyi using `??`.
5. `"sold-out"` status assign cheyyadaniki try cheyyi and TypeScript error observe cheyyi.

**Nuvvu code matrame pampu.** నేను review చేస్తా. 😄


---

Excellent 🔥 **Almost 10/10.** Nee concepts correct ga apply chesav.

### 1. `Product` type ✅

```ts
type Product = {
    id: number;
    name: string;
    price: number;
    status: 'available' | 'out-of-stock';
    discount?: number;
}
```

Perfect.

* `status` → literal union type
* `discount?` → optional property

---

### 2. Product object ✅

```ts
const product: Product = {
    id: 1,
    name: "mobile",
    price: 100.0,
    status: 'available'
}
```

Correct. `discount` optional kabatti ivvakapoyina problem ledu.

---

### 3. `??` usage ✅

```ts
console.log(product.discount ?? 'No discount')
```

Exactly correct.

Since:

```ts
product.discount
// undefined
```

`??` fallback value:

```text
undefined
   ↓
??
   ↓
"No discount"
```

So output:

```text
No discount
```

Your comment:

```ts
// discount undifined
```

also correct. Better spelling `undefined`.

---

### 4. Status change ❌ — intentionally wrong

```ts
product.status = 'sold-out'
```

Correctly identified as an error.

Because:

```ts
status: 'available' | 'out-of-stock'
```

Allowed values only:

```text
available
out-of-stock
```

`'sold-out'` is not part of the union.

### 🎯 Score: **10/10**

You are getting the basic types + union + literal + optional + `??` concepts nicely.

---

## 🧪 Question 4 — `any` vs proper typing

Now let's test whether you really understand **`any`**.

Imagine API nunchi data vastundi:

```ts
const apiUser: any = {
    name: "Naresh",
    age: 25
}
```

You can do:

```ts
apiUser.name
apiUser.age
apiUser.salary
apiUser.foo.bar
```

TypeScript mostly won't complain because it's `any`.

### Your task:

Create a `User` type and rewrite this **without using `any`**.

Requirements:

```text
name  → string
age   → number
email → string
```

Then create an object from it.

And answer this in a comment:

```ts
// Why is User better than any here?
```

👉 **Code + one/two-line explanation** pampu.


----


Very good 👍 **Concept almost correct**, especially `any` explanation. But code lo **2 corrections** unnayi.

### 1. `age` type ❌

Question lo `age → number` ani cheppam.

Nuvvu:

```ts
age: string
```

ichav.

Correct:

```ts
age: number
```

and:

```ts
age: 23
```

not:

```ts
age: "23"
```

---

### 2. `anotherUser.salary` ❌ — this is actually the point of the question

Nuvvu:

```ts
console.log(anotherUser.salary)
```

raasav.

TypeScript error istundi:

```text
Property 'salary' does not exist on type 'User'.
```

Because `anotherUser` ki:

```ts
User
```

type assign chesam.

`User` lo only:

```text
name
age
email
```

unnayi.

So TypeScript cheptundi:

> "Nuvvu `User` type ani declare chesav. `salary` ane property `User` lo ledu, so access cheyyaku."

Exactly **type safety** idi. ✅

---

### `any` explanation — mostly correct ✅

Nuvvu cheppindi:

> "`any` type checking ni disable chestundi"

Correct.

For example:

```ts
const user: any = {
    name: "Naresh"
}

user.salary
user.foo.bar
```

TypeScript compile time lo usually complaint cheyyadu.

But runtime lo:

```ts
user.foo.bar
```

`foo` undefined ayithe error ravachu.

So small correction:

**`any` runtime errors prevent cheyyadu; TypeScript compile-time checking ni bypass chestundi.**

---

### Your understanding

```text
any
 ↓
"Whatever you do, TypeScript don't strongly check it"

User
 ↓
"Only properties/types defined by User are allowed"
```

🔥 **This is the important difference.**

---

## 🧪 Question 5 — Optional property + `?.` vs `??`

Ippudu konchem tricky.

```ts
type User = {
    name: string;
    age: number;
    address?: {
        city: string;
    };
}

const user: User = {
    name: "Naresh",
    age: 25
};
```

### Task:

Create **3 console statements**:

1. User address city ni safely access cheyyi using `?.`
2. City lekapothe `"Unknown city"` print cheyyi using `??`
3. `user.address.city` direct ga access chesthe TypeScript enduku error istundo **comment lo explain cheyyi**.

👉 Ee question lo important: **`?.` and `??` difference ni own words lo explain cheyyali.**


---


console.log(user.address?.city ?? 'Unknown city')

---

