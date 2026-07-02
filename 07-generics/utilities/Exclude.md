Bagundi Naresh. 🚀

Ippudu Utility Types lo next important chapter:

# Exclude<T, U>

Idi previous utility types laga object properties meeda work cheyyadu.

Idi **Union Types** meeda work chestundi.

---

## Real-Time Scenario

Application lo user roles unnayi.

```ts
type Role =
  | 'admin'
  | 'manager'
  | 'user'
  | 'guest';
```

Oka page lo:

> guest allow cheyyakudadhu

Appudu kotha type create cheyyachu.

```ts
type AllowedRoles =
  Exclude<Role, 'guest'>
```

Result:

```ts
type AllowedRoles =
  | 'admin'
  | 'manager'
  | 'user';
```

---

## Meaning

```ts
Exclude<T, U>
```

Ante:

> T lo unna values nunchi U values remove cheyyi.

---

## Example 1

```ts
type Status =
  | 'pending'
  | 'success'
  | 'failed';
```

```ts
type FinalStatus =
  Exclude<Status, 'pending'>
```

Result:

```ts
type FinalStatus =
  | 'success'
  | 'failed';
```

---

## Example 2

```ts
type Numbers =
  1 | 2 | 3 | 4;
```

```ts
type Result =
  Exclude<Numbers, 4>
```

Result:

```ts
type Result =
  1 | 2 | 3;
```

---

# Easy Memory Trick

Suppose attendance list:

```text
Naresh
Ravi
Kiran
Pavan
```

Ravi leave lo unnadu.

```ts
Exclude<
  'Naresh' | 'Ravi' | 'Kiran' | 'Pavan',
  'Ravi'
>
```

Result:

```text
Naresh
Kiran
Pavan
```

---

# Difference Between Omit and Exclude

## Omit

Object properties remove chestundi.

```ts
Omit<User, 'password'>
```

↓

```ts
{
  id:number;
  name:string;
}
```

---

## Exclude

Union values remove chestundi.

```ts
Exclude<
  'admin' | 'user' | 'guest',
  'guest'
>
```

↓

```ts
'admin' | 'user'
```

---

# Practice 1

Predict.

```ts
type Color =
  | 'red'
  | 'green'
  | 'blue';
```

```ts
type Result =
  Exclude<Color, 'blue'>
```

Final type enti?

---

# Practice 2

Predict.

```ts
type Role =
  | 'admin'
  | 'manager'
  | 'user';
```

```ts
type Result =
  Exclude<Role, 'user'>
```

Final type enti?

---

# Practice 3

Real-world answer ivvu.

```ts
type Status =
  | 'draft'
  | 'published'
  | 'archived';
```

Suppose:

> UI lo archived allow cheyyakudadhu.

Which utility type use chestav?

And why?

Code rayi. 😊

 ###### ==================================================================================================================================


 🔥 Excellent Naresh!

3/3 correct.

---

## Q1

```ts id="4vl4fw"
type Color =
  | 'red'
  | 'green'
  | 'blue';

type Result =
  Exclude<Color, 'blue'>
```

Nee answer:

```ts id="1xblpa"
'red' | 'green'
```

✅ Correct

---

## Q2

```ts id="hkc93v"
type Role =
  | 'admin'
  | 'manager'
  | 'user';

type Result =
  Exclude<Role, 'user'>
```

Nee answer:

```ts id="6uivzb"
'manager' | 'admin'
```

✅ Correct

Order important kaadu.

```ts id="z78tkf"
'admin' | 'manager'
```

kuda same.

---

## Q3

```ts id="x3h6vz"
type Status =
  | 'draft'
  | 'published'
  | 'archived';
```

Nee answer:

```ts id="w6ll95"
type FinalStatus =
  Exclude<Status,'archived'>
```

✅ Perfect

Reason:

> archived status ni remove cheyyali.

Kabatti:

```ts id="6o2hgs"
Exclude<T, U>
```

use chestam.

---

# Real-Time Memory

## Pick

```text id="3plspu"
Naaku kavalsina vi select cheyyi
```

↓

```ts id="g9l6a9"
Pick<T, K>
```

---

## Omit

```text id="gk77j0"
Ee property remove cheyyi
```

↓

```ts id="gslcpr"
Omit<T, K>
```

---

## Exclude

```text id="b2hyn9"
Ee union value remove cheyyi
```

↓

```ts id="kcnmva"
Exclude<T, U>
```

---

# Next Utility Type

## Extract<T, U>

`Exclude` ki opposite.

---

Example:

```ts id="wl9c50"
type Status =
  | 'draft'
  | 'published'
  | 'archived';
```

Only:

```text id="2dnn8w"
published
archived
```

kavali.

```ts id="nnc2x3"
type FinalStatus =
  Extract<
    Status,
    'published' | 'archived'
  >
```

Result:

```ts id="n9xj0j"
'published' | 'archived'
```

---

# Easy Memory Trick

## Exclude

```text id="bgsah5"
Remove these
```

↓

```ts id="z7pxq5"
Exclude<T, U>
```

---

## Extract

```text id="f7z85m"
Keep only these
```

↓

```ts id="6iqd70"
Extract<T, U>
```

---

# Practice

```ts id="iq4c9j"
type Role =
  | 'admin'
  | 'manager'
  | 'user'
  | 'guest';
```

### Q1

Only:

```text id="mxzxjf"
admin
manager
```

kavali.

`Extract` use chesi type rayi.

---

### Q2

Predict result.

```ts id="j8rn4n"
type Result =
  Extract<
    Role,
    'user' | 'guest'
  >
```

Final type enti?

---

### Q3

One sentence lo cheppu:

Difference between

```ts id="5w3zt8"
Exclude
```

and

```ts id="kzq17l"
Extract
```

😊

Ikkada nunchi utility types interesting avuthayi, endukante union types tho chala powerful filtering cheyyachu.

