Exactly Naresh 👍. Nuvvu Generic yokka main purpose ni catch chestunnav.

Mundhu Generic lekunda ela untundo chuddam.

## Generic Lekunda

User response kosam:

```ts
type UserResponse = {
  data: {
    id: number;
    name: string;
  };
};
```

Product response kosam:

```ts
type ProductResponse = {
  data: {
    id: number;
    title: string;
  };
};
```

Observe cheyyi:

```ts
{
  data: ...
}
```

structure rendu places lo same.

Only `data` lopala type maruthundi.

Kabatti duplicate code rasthunnam.

---

## Generic Tho

```ts
type ApiResponse<T> = {
  data: T;
};
```

Ippudu `data` lo em type undalo later cheptham.

---

### User kosam

```ts
type User = {
  id: number;
  name: string;
};

const userData: ApiResponse<User> = {
  data: {
    id: 1,
    name: "Naresh"
  }
};
```

Ikkada TypeScript internally ila replace chestundi:

```ts
type ApiResponse<User> = {
  data: User;
};
```

↓

```ts
{
  data: {
    id: number;
    name: string;
  }
}
```

---

### Product kosam

```ts
type Product = {
  id: number;
  title: string;
};

const productData: ApiResponse<Product> = {
  data: {
    id: 101,
    title: "Laptop"
  }
};
```

Ikkada TypeScript internally:

```ts
type ApiResponse<Product> = {
  data: Product;
};
```

↓

```ts
{
  data: {
    id: number;
    title: string;
  }
}
```

---

## Nuvvu Adigina Main Point

> manam edi reuse chestunnama kada?

✅ Yes.

Manam reuse chestunnadi:

```ts
type ApiResponse<T> = {
  data: T;
}
```

Idi oka **template** la untundi.

---

### Analogy

Suppose bottle undi.

```ts
Bottle<T>
```

Water bottle:

```ts
Bottle<Water>
```

Milk bottle:

```ts
Bottle<Milk>
```

Juice bottle:

```ts
Bottle<Juice>
```

Bottle shape same.

Lopala content matram maruthundi.

Alage:

```ts
ApiResponse<User>
ApiResponse<Product>
ApiResponse<Order>
ApiResponse<Employee>
```

Response structure same.

Lopala data type matram maruthundi.

---

## Real Project Example

GraphQL/Nuxt lo chala common:

```ts
type ApiResponse<T> = {
  data: T;
  loading: boolean;
  error: string | null;
};
```

User:

```ts
ApiResponse<User>
```

Product:

```ts
ApiResponse<Product>
```

Security Bulletin:

```ts
ApiResponse<SecurityBulletin>
```

Oka type ni 100 places lo reuse cheyyachu.

---

### Generic ni oka sentence lo cheppali ante

```ts
type ApiResponse<T> = {
  data: T;
}
```

Ikkada `T` ante:

> "Data type ippudu telidu. Ee type ni use chese vadu later chepthadu."

Anduke Generic ni **"Type Placeholder"** ani antaru.

Ippudu niku `function getUser<T>(user:T):T` artham ayyindi, `type ApiResponse<T>` artham ayyindi.

Next natural question:

```ts
function getFirstItem<T>(items: T[]): T
```

Ikkada `T[]` enduku?
`return type T` ela vastundi?

Idi Generic ni 80% clear chese concept.
