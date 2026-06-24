Naresh, **Generic** anedi TypeScript lo chala important concept. Generic nerchukunte taruvatha Constraints, Utility Types, Advanced Types anni easy ga artham avuthayi.

---

# 1. Generic ante emiti?

Simple ga cheppali ante:

**Generic = Type ni later decide cheyadam.**

Manam function create chesetappudu type fix cheyakunda, function call chesetappudu type decide cheyadaniki Generic use chestam.

---

## Generic lekunda

```ts
function getValue(value: string): string {
  return value;
}
```

Ikkada function only string accept chestundi.

```ts
getValue("Naresh"); // ✅
getValue(100);      // ❌ Error
```

---

## Number kosam malli function rayali

```ts
function getNumber(value: number): number {
  return value;
}
```

Ippudu same logic kosam rendu functions rasam.

---

# Problem enti?

Logic same undi.

```ts
return value;
```

kani type matram different.

Code duplicate avuthundi.

---

# 2. Generic introduce chesaru

```ts
function getValue<T>(value: T): T {
  return value;
}
```

Ikkada

```ts
<T>
```

ante

"Type ippudu cheppanu, later chepthanu"

---

## Usage

```ts
getValue<string>("Naresh");
```

Ikkada

```ts
T = string
```

---

```ts
getValue<number>(100);
```

Ikkada

```ts
T = number
```

---

```ts
getValue<boolean>(true);
```

Ikkada

```ts
T = boolean
```

---

# Visual Understanding

```ts
function getValue<T>(value: T): T
```

TypeScript internally ila anukuntundi:

### Call 1

```ts
getValue("Naresh")
```

↓

```ts
function getValue(value: string): string
```

---

### Call 2

```ts
getValue(100)
```

↓

```ts
function getValue(value: number): number
```

---

### Call 3

```ts
getValue(true)
```

↓

```ts
function getValue(value: boolean): boolean
```

---

# 3. T ante emiti?

T ante Type.

Idi convention.

```ts
<T>
```

---

Manam ila kuda rayochu.

```ts
function getValue<MyType>(value: MyType): MyType {
  return value;
}
```

kani industry lo mostly

```ts
T
```

use chestaru.

---

# 4. Generic enduku use chestam?

### Reusable code kosam

Without Generic

```ts
function getString(value: string) {
  return value;
}

function getNumber(value: number) {
  return value;
}

function getBoolean(value: boolean) {
  return value;
}
```

---

With Generic

```ts
function getValue<T>(value: T): T {
  return value;
}
```

Single function.

---

# 5. Real-time Example

Array lo first item kavali.

Without Generic

```ts
function getFirstItem(arr: string[]): string {
  return arr[0];
}
```

Only string arrays.

---

Generic use chesi

```ts
function getFirstItem<T>(arr: T[]): T {
  return arr[0];
}
```

---

### String Array

```ts
getFirstItem(["a", "b", "c"]);
```

T = string

Result

```ts
"a"
```

---

### Number Array

```ts
getFirstItem([10, 20, 30]);
```

T = number

Result

```ts
10
```

---

### Boolean Array

```ts
getFirstItem([true, false]);
```

T = boolean

Result

```ts
true
```

---

# 6. TypeScript type automatically guess chestundi

Manam ila rayakapoyina

```ts
getValue<string>("Naresh");
```

TypeScript guess chestundi.

```ts
getValue("Naresh");
```

Automatically

```ts
T = string
```

---

```ts
getValue(100);
```

Automatically

```ts
T = number
```

---

Idi **Type Inference** antaru.

---

# 7. Generic ni eppudu use chestam?

Type teliyani appudu.

Example:

### API Utility

```ts
function apiResponse<T>(data: T): T {
  return data;
}
```

---

### Array Utilities

```ts
function first<T>(items: T[]): T {
  return items[0];
}
```

---

### Custom Hooks

```ts
function useData<T>() {}
```

---

### Reusable Components

React lo

```ts
Table<User />
Table<Product />
Table<Order />
```

---

# Interview Definition

**Generic is a TypeScript feature that allows us to create reusable and type-safe components, functions, classes, and interfaces by keeping the type flexible and deciding it later when the code is used.**

---

### Generic Formula

```ts
function name<T>(value: T): T {
  return value;
}
```

Ikkada:

* `T` = Type Placeholder
* Generic = Type later decide chestam
* Reusable code kosam use chestam
* Type safety maintain chestam
* Duplicate code reduce chestam

---

Next step lo **"Generic Constraint (`extends`) ante emiti?"** ane concept nerchukundam. Adi Generic lo next important topic.



### ===============================================================================================


Error vasthundi endukante `T` ane type parameter ni declare cheyyaledu.

Nee code:

```ts
function getUser(user: T): T {
  return user;
}

getUser('Naresh');
```

TypeScript ila aduguthundi:

> "T ante enti? Ekkada declare chesavu?"

Kabatti error:

```ts
Cannot find name 'T'
```

---

## Correct Generic Syntax

```ts
function getUser<T>(user: T): T {
  return user;
}

getUser('Naresh');
```

Ikkada:

```ts
<T>
```

function ki chepthundi:

> "Nenu Generic Function. T ane type ni later receive chestanu."

---

### Execution

```ts
getUser('Naresh');
```

TypeScript infer chestundi:

```ts
T = string
```

Function ila maruthundi:

```ts
function getUser(user: string): string {
  return user;
}
```

---

### Inko Example

```ts
getUser(100);
```

TypeScript:

```ts
T = number
```

Function:

```ts
function getUser(user: number): number {
  return user;
}
```

---

## Explicit ga kuda ivvachu

```ts
getUser<string>('Naresh');
getUser<number>(100);
getUser<boolean>(true);
```

Kani mostly manam ila rayam:

```ts
getUser('Naresh');
getUser(100);
getUser(true);
```

Endukante TypeScript automatic ga type guess (infer) chestundi.

---

### Generic Formula

```ts
function functionName<T>(param: T): T {
  return param;
}
```

Gurtupettuko:

* `functionName<T>` → Generic declare chestundi
* `param: T` → parameter type
* `: T` → return type
* `T` ante "later decide cheyyabade type"

Idi Generic yokka basic structure. Tarvata `T[]`, `Promise<T>`, `interface Box<T>`, `T extends ...` concepts ki vellachu.
ˇ