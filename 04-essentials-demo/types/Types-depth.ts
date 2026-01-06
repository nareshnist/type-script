/*

    2️⃣ What EXACTLY is a type?
    🧠 Mental Model

    A type is a label for ANY TypeScript type expression.

        It can represent:

        primitives
        objects
        unions
        intersections
        tuples
        functions
        literals



    This is one of the most misunderstood areas in TypeScript.

    Rule of thumb (remember this first):
    Interfaces describe OBJECTS
    Types describe EVERYTHING 


*/

//✅ Examples

type ID = number | string;
type Status = 'idle' | 'loading' | 'error';
type Point = [number,number];
type Callback = (input:string) => void; 

// 👉 Interfaces cannot do any of this above.

/* */




// ====================================================================================================

//  End of inter faces

// ====================================================================================================