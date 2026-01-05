# TypeScript Compiler (`tsc`) & `tsconfig.json` — Complete Overview (తెలుగు)

ఈ README లో:

* TypeScript Compiler (`tsc`) ఏమిటి
* అది ఎలా పనిచేస్తుంది
* `tsconfig.json` అంటే ఏమిటి
* ముఖ్యమైన configuration options

అన్నీ **సింపుల్ తెలుగు explanation** తో ఉన్నాయి.

---

## 1️⃣ TypeScript Compiler (`tsc`) అంటే ఏమిటి?

TypeScript Compiler (`tsc`) అనేది
**TypeScript (.ts)** ఫైళ్లను **JavaScript (.js)** ఫైళ్లుగా మార్చే tool.

👉 Browser కి TypeScript అర్థం కాదు
👉 Browser కి JavaScript మాత్రమే అర్థం
👉 కాబట్టి `.ts → .js` conversion తప్పనిసరి

```
TypeScript (.ts)
       ↓  tsc
JavaScript (.js)
```

### Simple Example

TypeScript:

```ts
let age: number = 25;
```

Compile అయిన తర్వాత JavaScript:

```js
var age = 25;
```

---

## 2️⃣ `tsc` ఎలా ఉపయోగిస్తాం?

### ▶ Single file compile

```bash
tsc index.ts
```

👉 `index.js` file generate అవుతుంది

---

### ▶ Project level compile (Recommended)

```bash
tsc
```

👉 ఈ command:

* `tsconfig.json` file ను చదువుతుంది
* Project లోని అన్ని `.ts` files ని compile చేస్తుంది

---

## 3️⃣ `tsconfig.json` అంటే ఏమిటి?

`tsconfig.json` అనేది
TypeScript compiler కి instructions ఇచ్చే **configuration file**.

అంటే:

> “నా project ని ఎలా compile చేయాలి?”
> “ఏ rules follow అవ్వాలి?”

అని `tsc` కి చెప్పే file.

---

## 4️⃣ `tsconfig.json` ఎందుకు అవసరం?

* Compile rules define చేయడానికి
* Type checking strict గా enforce చేయడానికి
* Output files ఎక్కడ generate అవ్వాలో చెప్పడానికి
* Source files location define చేయడానికి
* Unwanted files (node_modules) ignore చేయడానికి

👉 Medium / Large projects లో ఇది **mandatory**.

---

## 5️⃣ `tsconfig.json` create చేయడం

Automatically create చేయడానికి:

```bash
tsc --init
```

👉 ఇది default settings తో `tsconfig.json` create చేస్తుంది
👉 తరువాత project requirement ప్రకారం modify చేసుకోవచ్చు

---

## 6️⃣ Basic `tsconfig.json` structure

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "module": "ESNext",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

---

## 7️⃣ Important `compilerOptions` (Overview)

### 🔹 `target`

👉 JavaScript version ఏదిగా compile చేయాలి

```json
"target": "ES6"
```

Common values:

* `ES5` → Old browsers
* `ES6 / ES2015` → Modern JS
* `ESNext` → Latest JS

---

### 🔹 `module`

👉 Module system ఏది ఉపయోగించాలి

```json
"module": "ESNext"
```

Common values:

* `CommonJS` → Node.js
* `ESNext` → Frontend (Vue, React, Vite)

---

### 🔹 `rootDir`

👉 TypeScript source files ఉన్న folder

```json
"rootDir": "src"
```

---

### 🔹 `outDir`

👉 Compiled JavaScript files వెళ్లే folder

```json
"outDir": "dist"
```

---

### 🔹 `strict`

👉 Strong type checking enable చేస్తుంది

```json
"strict": true
```

✔ Errors early గా catch అవుతాయి
✔ Code quality improve అవుతుంది

---

## 8️⃣ Simple real-world understanding

* **TypeScript** → Rules ఉన్న language (strict)
* **JavaScript** → Browser అర్థం చేసుకునే language
* **tsc** → Translator
* **tsconfig.json** → Translator కి ఇచ్చే instructions

---

## 🔚 Summary

* `tsc` → TypeScript ని JavaScript గా convert చేస్తుంది
* `tsconfig.json` → Compile rules & project settings
* `strict: true` → Best practice
* Real projects లో ఈ రెండు కలిసి పని చేస్తాయి

---

✅ Beginner-friendly
✅ README-ready
✅ One document — easy copy / edit



# TypeScript Compiler (`tsc`) & `tsconfig.json` — Full Options README (తెలుగు)

ఈ README లో మీరు **TypeScript official docs** లో ఉన్న ముఖ్యమైన `tsconfig.json` options అన్నింటినీ
**easy Telugu explanation + examples** తో చూడవచ్చు.

👉 Beginner → Intermediate → Real‑world ready
👉 One‑shot copy / edit friendly

---

## 1️⃣ TypeScript Compiler (`tsc`) అంటే ఏమిటి?

TypeScript Compiler (`tsc`) అనేది:

* `.ts` (TypeScript) files ను
* `.js` (JavaScript) files గా

convert చేసే tool.

👉 Browser కి TypeScript అర్థం కాదు
👉 Browser కి JavaScript మాత్రమే అర్థం

```
TypeScript (.ts)
       ↓  tsc
JavaScript (.js)
```

---

## 2️⃣ `tsconfig.json` అంటే ఏమిటి?

`tsconfig.json` అనేది:

* TypeScript compiler కి rules & settings ఇచ్చే file

అంటే:

> “నా project ని ఎలా compile చేయాలి?”
> “ఏ checks enforce చేయాలి?”

అని `tsc` కి చెప్పే instruction book 📘

---

## 3️⃣ `tsconfig.json` create చేయడం

```bash
tsc --init
```

👉 Default configuration తో file generate అవుతుంది

---

## 4️⃣ Complete `tsconfig.json` Example (Most Used Options)

```json
{
  "compilerOptions": {
    /* Language & Environment */
    "target": "ES2020",
    "lib": ["ES2020", "DOM"],

    /* Module System */
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,

    /* Project Structure */
    "rootDir": "src",
    "outDir": "dist",

    /* JavaScript Support */
    "allowJs": true,
    "checkJs": false,

    /* Strict Type Checking */
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "alwaysStrict": true,

    /* Interop & Compatibility */
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,

    /* Output & Debugging */
    "sourceMap": true,
    "declaration": true,

    /* Type Definitions */
    "types": ["node", "jest"],
    "typeRoots": ["./node_modules/@types"]
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

---

## 5️⃣ Important Options — Telugu Explanation

### 🔹 `target`

👉 JavaScript version ఏదిగా compile చేయాలి

```json
"target": "ES6"
```

---

### 🔹 `lib`

👉 JavaScript environment APIs enable చేస్తుంది

```json
"lib": ["DOM", "ES2020"]
```

* `DOM` → browser APIs (`document`, `window`)
* `ES2020` → modern JS features

---

### 🔹 `module`

👉 Module system define చేస్తుంది

```json
"module": "ESNext"
```

* `CommonJS` → Node.js
* `ESNext` → Frontend (Vue / React / Vite)

---

### 🔹 `rootDir` & `outDir`

```json
"rootDir": "src"
"outDir": "dist"
```

👉 `.ts` → `src`
👉 `.js` → `dist`

---

### 🔹 `allowJs`

👉 JavaScript files కూడా project లో allow చేయడానికి

```json
"allowJs": true
```

---

### 🔹 `checkJs`

👉 `.js` files లో కూడా type errors చూపిస్తుంది

```json
"checkJs": true
```

---

### 🔹 `strict`

👉 అన్ని strict checks enable చేస్తుంది

```json
"strict": true
```

✔ Best practice

---

### 🔹 `noImplicitAny`

👉 type లేకుండా variable declare చేస్తే error

```json
"noImplicitAny": true
```

---

### 🔹 `strictNullChecks`

👉 `null` / `undefined` unsafe usage block చేస్తుంది

---

### 🔹 `alwaysStrict`

👉 output JS లో automatically `"use strict"`

---

### 🔹 `esModuleInterop`

👉 CommonJS ↔ ESModule compatibility fix

```json
"esModuleInterop": true
```

---

### 🔹 `allowSyntheticDefaultImports`

👉 default export లేకపోయినా import allow

---

### 🔹 `forceConsistentCasingInFileNames`

👉 file name case mismatch errors avoid చేస్తుంది

---

### 🔹 `skipLibCheck`

👉 `node_modules` type checking skip

✔ Faster builds

---

### 🔹 `sourceMap`

👉 Debugging కోసం `.map` files generate

---

### 🔹 `declaration`

👉 `.d.ts` files generate (library use case)

---

### 🔹 `types`

👉 Specific global types only include

```json
"types": ["node", "jest"]
```

---

### 🔹 `typeRoots`

👉 Type definitions search directories

---

## 6️⃣ `include` & `exclude`

```json
"include": ["src"]
"exclude": ["node_modules", "dist"]
```

---

## 7️⃣ Simple Real‑World Understanding

* **TypeScript** → Rules ఉన్న language
* **JavaScript** → Browser language
* **tsc** → Translator
* **tsconfig.json** → Translator instructions

---

## 🔚 Summary

* `tsc` converts TS → JS
* `tsconfig.json` controls how compilation happens
* `strict: true` is recommended
* These options cover **90% real projects**

---

✅ Beginner friendly
✅ Real‑world ready
✅ One README — full reference



###### Multi files `tsc` , continue to watch for changes `tsc --watch`

### creating tsconfig file `tsc --init `.

### creating package.json file `npm init -y `.



# =======================================================================================================

# TypeScript Node Types (`@types/node`)

## Overview

When working with **TypeScript** in a Node.js project, TypeScript needs **type definitions** for the modules you use. Node.js provides built-in modules like:

- `fs`
- `path`
- `http`
- `process`
- `Buffer`
- And more…

TypeScript **does not include these types by default**, so we need to install them separately.

---

## Why install `@types/node`

Consider the following TypeScript code:

```ts
import fs from "fs";

const data = fs.readFileSync("file.txt", "utf-8");
console.log(data);
```

Without `@types/node`, TypeScript will throw an error:

```
Cannot find module 'fs' or its corresponding type declarations.
```

`@types/node` provides the necessary **type definitions** so TypeScript can:

- Compile Node.js code correctly.
- Provide **type safety**.
- Enable **autocompletion** in IDEs like VSCode.

---

## Installation

Install the type definitions as a **dev dependency** because they are only needed during development:

```bash
npm install @types/node --save-dev
```

or with Yarn:

```bash
yarn add @types/node --dev
```

---

## When do you need it?

Install `@types/node` if your TypeScript project:

1. Uses Node.js built-in modules (`fs`, `path`, `http`, etc.).
2. Runs in a Node.js environment (backend, server-side scripts, CLI tools).
3. Needs proper TypeScript type checking and IDE autocompletion.

> 💡 Note: If your project is purely frontend (React, Vue, Angular) and does not use Node APIs, you usually **don’t need** `@types/node`.

---

## Summary

- TypeScript needs type information for Node modules.
- `@types/node` provides that type info.
- Install it as a dev dependency.
- Ensures type safety, correct compilation, and better developer experience.

---

## References

- [TypeScript Handbook - Modules](https://www.typescriptlang.org/docs/handbook/modules.html)
- [DefinitelyTyped - @types/node](https://www.npmjs.com/package/@types/node)
