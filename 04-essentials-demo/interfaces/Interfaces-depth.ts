// 🔥 TypeScript interface vs type — DEEP EXPLANATION

/* 

    This is one of the most misunderstood areas in TypeScript.

    Rule of thumb (remember this first):
    Interfaces describe OBJECTS
    Types describe EVERYTHING 

*/


/* 
    1️⃣ What EXACTLY is an interface?
    🧠 Mental Model

    An interface is a ``blueprint`` for an object.

    It answers:  “What properties MUST this object have?”
*/


//Example 

interface User {
    name:string;
    id:number;
}

/*
    This means:
        Any object of type User
        MUST have id and name
        Nothing more is guaranteed

        What does “Nothing more is guaranteed” mean?

        It means:

        TypeScript only promises that id and name exist.
        It does NOT promise that any other property exists.
*/





/*
    🔒 Interfaces are OPEN (Declaration Merging)

    This is something types cannot do.
*/


interface Person {
    name:string;
}

interface Person {
    address:string
}


/* 👉 TypeScript merges them: */

interface Person {
    id:number;
    name:string;
}

/* 
    🧠 Why this exists?
    Library authors (React, DOM, Express)
    Plugin-based systems
    Global augmentations
*/

// ====================================================================================================

//  End of inter faces

// ====================================================================================================

/*




*/

/* */




















// ====================================================================================================

//  End of inter faces

// ====================================================================================================