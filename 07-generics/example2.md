🔥 Excellent Naresh!

Idi interview lo rasina answer laga undi. Review cheddam.

---

## Q1 - UserPreview<T>

```ts
type UserPreview<T> = {
    value:T;
}
```

✅ Correct

Usage 1:

```ts
const userPreview:UserPreview<string> = {
    value:"Naresh"
}
```

✅ Correct

Usage 2:

```ts
const preview:UserPreview<User> = {
    value:{
        id:1,
        name:"Naresh",
        email:"exy@gmail.com"
    }
}
```

✅ Correct

Nuvvu extra example kuda ichav. Adi manchi practice.

---

## Q2 - Constraint

```ts
function getName<T extends{name:string}>(object:T){
    return object.name;
}
```

✅ Correct

Valid:

```ts
getName({name:"Naresh"});
```

✅

Invalid:

```ts
getName({age:"12"})
```

❌ Correct ga invalid ani identify chesav.

Reason:

```ts
{name:string}
```

constraint satisfy avvali.

---

## Q3 - Multiple Generics

```ts
function getProperty<T, K extends keyof T>(
    object:T,
    key:K
){
    return object[key]
}
```

✅ Perfect

Valid:

```ts
getProperty({name:"Naresh"},"name");
```

✅

Invalid:

```ts
getProperty({name:"naresh"},"age");
```

❌ Correct

Reason:

```ts
keyof {name:string}
```

equals

```ts
"name"
```

Only.

---

# Score

```text
Q1 ✅
Q2 ✅
Q3 ✅
```

🎯 3/3

---

# Assessment

Nuvvu ippudu generics lo:

* ✅ Generic Functions
* ✅ Generic Types
* ✅ Constraints (`extends`)
* ✅ Multiple Generics
* ✅ `keyof`
* ✅ Default Generic Types
* ✅ Type Inference

anni comfortable ga use chestunnav.

Ippudu Utility Types start cheyyadaniki ready.

Kani next chapter ki direct vellakunda, nenu utility types concept ki bridge ayye real-world question adugutha:

```ts
type User = {
    id:number;
    name:string;
    email:string;
}
```

Suppose create user API ki:

```ts
{
    id:1,
    name:"Naresh",
    email:"test@gmail.com"
}
```

Update user API ki:

```ts
{
    name:"Updated Naresh"
}
```

matrame pampali.

Question:

**Update API kosam manam malli kottha type create cheyyala?**

leda

**Existing `User` type nundi automatic ga "anni properties optional" ga cheyyacha?**

Ee problem solve cheyyadanike first utility type:

```ts
Partial<T>
```

vachindi.

Try cheyyi:

```ts
type User = {
    id:number;
    name:string;
    email:string;
}
```

`Partial<User>` ela untundo nuvve rayi. 😊
