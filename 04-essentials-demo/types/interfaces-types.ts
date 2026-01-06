/*
    3️⃣ Objects: Interface vs Type (Side by Side)
*/

interface UserI {
    name:string;
    id:number;
}

type UserT = {
    id:number;
    name:string;
}

/*
    ✔ Both behave the same
    ✔ Both give same safety
    ❗ Difference is capability, not syntax


    UserI and UserT are just names :

    I = Interface
    T = Type

    They are naming conventions, not TypeScript keywords.

    TypeScript does NOT care about I or T
    They are only for human understanding


    2️⃣ Why do people add I and T?
        
    Reason 1: Readability 👀

        When you see this:

            function getUser(user: UserI) {}

                You instantly know:

                    “Ah, this is an interface”

        When you see this:

            function getUser(user: UserT) {}

                You instantly know:

                “Ah, this is a type alias”

    Reason 2: Large codebases (like Red Hat scale)

    In big projects:
    Many models
    Many developers
    Many files

    Naming helps quick mental context.
 */



/*
   4️⃣ EXTENDING vs COMBINING
    🔹 Interface → extends
*/

interface Person {
    name :string;
}

interface Employeee extends Person {
    employeeId:number;
}

let emp:Employeee = {
    employeeId:1,
    name:'Nani'
}

// 🧠 Very natural OOP-style inheritance.


/*
   4️⃣ EXTENDING vs COMBINING
    🔹 Type → & (Intersection)
*/

type Person1 = {
    name:string;
}

type Employe1 = Person1 & {
    employeId:number;
}

let emp2 :Employe1 = {
    employeId:1,
    name:"nani"
}

// 🧠 More flexible but less readable for objects.



/*
5️⃣ Why Interfaces Are Preferred for OBJECT MODELS
✅ Best use cases for interface

    API request/response objects
    Component props
    Domain models
    Public library contracts

*/

// Example:

interface ApiResponse {
  status: string;
  data: unknown;
}

/*
    Because:
    Extendable
    Mergeable
    Readable
    Tooling-friendly
 */


/*  6️⃣ Why Types Are Preferred for LOGIC
    ✅ Best use cases for type

        Union types
        Literal types
        Conditional types
        Utility types
        Complex compositions
 */

// Example:

type ApiStatus = "success" | "error" | "loading";

// Interfaces cannot do this.

// 7️⃣ Discriminated Unions NEED type

type Api =  { status: "success"; data: string } | { status: "error"; message: string };

// ✔ Clean
// ✔ Powerful
// ✔ Impossible with interface alone


// 8️⃣ Function Types: Only type Works Well
type Handler1 = (event: Event) => void;

// While interfaces can do:
interface Handler2 {
  (event: Event): void;
}
// 👎 Rarely used, less readable.

// 9️⃣ Advanced: interface CANNOT DO THIS
// ❌ Interface cannot create unions
// interface Status = "loading" | "success"; // ❌ impossible

// ❌ Interface cannot alias primitives
// interface ID = number; // ❌ impossible