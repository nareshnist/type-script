🎯 Correct Naresh!

Nuvvu code rayadam valla `Partial<T>` concept almost artham chesukunnaav.

Nee code:

```ts
type User =  {
    id:number;
    name:string;
    email:string;
}

const createUser:User = {
    id:1,
    name:"Naresh",
    email:"xyz@gmail.com"
}

const updateUser:Partial<User> ={
    name:"Naresh Yoyal"
}
```

✅ Perfect

---

## TypeScript internally em chestundi?

```ts
Partial<User>
```

ni ila marchestundi:

```ts
{
    id?: number;
    name?: string;
    email?: string;
}
```

Observe:

```ts
?
```

anni properties ki add ayyindi.

---

## Kabatti ivanni valid

```ts
const updateUser: Partial<User> = {
    name: "Naresh"
}
```

✅

---

```ts
const updateUser: Partial<User> = {
    email: "abc@gmail.com"
}
```

✅

---

```ts
const updateUser: Partial<User> = {
    id: 1,
    name: "Naresh"
}
```

✅

---

```ts
const updateUser: Partial<User> = {}
```

✅

---

## Real Project Example

Nuxt / React applications lo:

```ts
function updateUser(
    id: number,
    payload: Partial<User>
) {
    // API call
}
```

Usage:

```ts
updateUser(1, {
    name: "Updated Name"
})
```

Leda

```ts
updateUser(1, {
    email: "new@gmail.com"
})
```

Only changed fields pampachu.

---

## Small Challenge

Hint ivvanu.

Given:

```ts
type User = {
    id:number;
    name:string;
    email:string;
}
```

`Pick<T, K>` use chesi only:

```ts
{
    name:string;
    email:string;
}
```

unna type create cheyyi.

Type name:

```ts
UserProfile
```

Code rayi. 😊

Ikkada nunchi `Pick<T, K>` concept start avuthundi.
