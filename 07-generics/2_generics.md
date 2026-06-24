Super 👍. Deep concepts ki vellakunda mundu **Generic enduku vachindi? Real project lo ekkada use chestam?** ane mindset build cheskundam.

## Real Time Example 1 - Employee Search

Suppose company lo employees unnaru.

```ts
const employees = [
  { id: 1, name: 'Naresh' },
  { id: 2, name: 'Ravi' },
];
```

First employee kavali.

### Generic lekunda

```ts
function getFirstEmployee(
  employees: { id: number; name: string }[]
) {
  return employees[0];
}
```

Problem:

* Employee kosame panichestundi.
* Products kosam malli function rayali.
* Users kosam malli function rayali.

---

### Generic tho

```ts
function getFirstItem<T>(items: T[]): T {
  return items[0];
}
```

Employees:

```ts
const employee = getFirstItem(employees);
```

Products:

```ts
const products = [
  { id: 1, title: 'Laptop' },
  { id: 2, title: 'Mobile' }
];

const product = getFirstItem(products);
```

Same function.

---

# Real Time Example 2 - API Response

Nuxt/React/Vue projects lo chala common.

Suppose API response:

```ts
{
  data: {
    id: 1,
    name: 'Naresh'
  }
}
```

Inkoka API:

```ts
{
  data: {
    id: 101,
    title: 'Nuxt Course'
  }
}
```

Response structure same.

Data matram maruthundi.

---

### Generic use

```ts
type ApiResponse<T> = {
  data: T;
}
```

User API:

```ts
type User = {
  id: number;
  name: string;
}

const user: ApiResponse<User> = {
  data: {
    id: 1,
    name: 'Naresh'
  }
}
```

---

Product API:

```ts
type Product = {
  id: number;
  title: string;
}

const product: ApiResponse<Product> = {
  data: {
    id: 101,
    title: 'Laptop'
  }
}
```

Same type reuse chestunnam.

---

# Real Time Example 3 - Table Component

Nuvvu RHDS table, PatternFly table work chestunnav kada.

Suppose reusable table create chesam.

### Wrong way

```ts
UserTable
ProductTable
OrderTable
EmployeeTable
```

4 components.

---

### Generic way

```ts
Table<T>
```

Usage:

```ts
Table<User>
Table<Product>
Table<Order>
```

Oka component andariki panichestundi.

---

# Generic ni simple ga gurtupettuko

Normal Function:

```ts
function greet(name: string) {}
```

Only string.

---

Generic Function:

```ts
function greet<T>(value: T) {}
```

Any type.

Type later decide avuthundi.

---

## Real Project lo ekkada ekkuva kanipistayi?

1. API Responses ✅
2. Reusable Tables ✅
3. Dropdown Components ✅
4. Form Utilities ✅
5. Custom Hooks / Composables ✅
6. Arrays Utilities ✅
7. Promise Types ✅

---

Ippudu next basic step:

```ts
function getFirstItem<T>(items: T[]): T
```

Ikkada:

* `T[]` ante enti?
* `: T` return type ela decide avuthundi?
* TypeScript ela infer chestundi?

Veetini visual ga step-by-step chuddam. Idi Generic lo next important basic concept.
