🎯 Almost correct Naresh. Konchem wording improve cheddam.

`Exclude` mariyu `Extract` **fields meeda kaadu**, **union values meeda** work chestayi.

---

### Exclude

```ts
type Role =
  | 'admin'
  | 'manager'
  | 'user'
  | 'guest';

type Result = Exclude<Role, 'guest'>
```

Result:

```ts
'admin' | 'manager' | 'user'
```

🧠 Meaning:

> Union nunchi specified values ni remove chestundi.

---

### Extract

```ts
type Role =
  | 'admin'
  | 'manager'
  | 'user'
  | 'guest';

type Result = Extract<Role, 'admin' | 'manager'>
```

Result:

```ts
'admin' | 'manager'
```

🧠 Meaning:

> Union nunchi specified values ni matrame keep chestundi.

---

# Easy Memory Trick

### Exclude

```text
Full List
↓
Remove Some Values
```

Example:

```text
admin
manager
user
guest

remove guest
```

Result:

```text
admin
manager
user
```

---

### Extract

```text
Full List
↓
Keep Only Some Values
```

Example:

```text
admin
manager
user
guest

keep admin and manager
```

Result:

```text
admin
manager
```

---

# One-Line Interview Answer

```text
Exclude<T, U> removes matching union values from T.

Extract<T, U> keeps only matching union values from T.
```

---

# Current Progress

✅ Generic Functions
✅ Generic Types
✅ Constraints (`extends`)
✅ `keyof`
✅ Partial<T>
✅ Pick<T, K>
✅ Omit<T, K>
✅ Record<K, V>
✅ Readonly<T>
✅ Required<T>
✅ Exclude<T, U>
✅ Extract<T, U>

🔥 Nuvvu ippudu TypeScript Utility Types lo beginner stage cross chesav.

Next logical utility type:

```ts
NonNullable<T>
```

Real-world use case:

```ts
string | null | undefined
```

↓

```ts
string
```

Only valid values ni retain chestundi.

Idi React, Vue, Nuxt, GraphQL projects lo chala common.

Before moving to `NonNullable<T>`, oka small challenge:

```ts
type Status =
  | 'draft'
  | 'published'
  | 'archived';
```

1.

```ts
type A = Exclude<Status, 'draft'>
```

Final type enti?

2.

```ts
type B = Extract<Status, 'published' | 'archived'>
```

Final type enti?

3.

Real-world ga Security Bulletins page lo:

```ts
type Tab =
  | 'all'
  | 'critical'
  | 'important'
  | 'low';
```

Only:

```text
critical
important
```

tabs matrame kavali.

`Extract` vaadthava? `Exclude` vaadthava? Enduku?

Code rayi. 🚀
