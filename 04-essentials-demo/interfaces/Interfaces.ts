// 1️⃣ What is an Interface in TypeScript?
// 📌 Simple definition

// An interface describes the shape of an object.
//      Think of it as a contract:
//      “If you say you are this type, you MUST have these properties.”

interface User {
    id:number;
    name:string;
    email?:string
}

// What this means:
//     id → must exist and be a number
//     name → must exist and be a string
//     email? → optional

// Usage

let user:User = {
    id:3,
    name:"Naresh"
}

// 🧠 Why use Interface?
// ❌ Without interface

// function printUser(user: { id: number; name: string }) {} //.talks about the Type object here 


// Repetition
// Hard to maintain
// No reusability


// ✅ With interface

// function printUser(user: User) {}
// ✔ Clean
// ✔ Reusable
// ✔ Self-documenting

// 🔹 Interface vs Type (Quick but Important)

// | Interface                | Type                                  |
// | ------------------------ | ------------------------------------- |
// | Used for object shapes   | Can define primitives, unions, tuples |
// | Can be extended          | Can be combined with unions           |
// | Can be reopened (merged) | Cannot be reopened                    |



// 2️⃣ What is a Discriminated Union?

// This is a VERY IMPORTANT concept 🔥
// Used heavily in APIs, reducers, state machines, backend contracts.


// 🧠 Real-World Intuition

// Imagine an API response:

// Sometimes → success

// Sometimes → error

// Sometimes → loading

// Each response has different properties.

// ❌ Bad Approach (No Discrimination)

// interface ApiResponse {
//   status: string;
//   data?: { name: string };
//   message?: string;
// }

// Problem:

// TS does NOT know when data exists

// You’ll be forced to use:

// response.data?.name


// or unsafe checks

// ✅ Correct Approach — Discriminated Union

// Step 1: Create unique literal field

// This field is called the discriminator

interface ApiSuccess {
  status: "success";
  data: {
    id: number;
    name: string;
  };
}

interface ApiError {
  status: "error";
  message: string;
}

interface ApiLoading {
  status: "loading";
}

// Step 2: Create Union  

type ApiResponse = ApiSuccess | ApiError | ApiLoading;

// 🧠 How TS Understands This

// When you check:

// if (response.status === "success")


// TypeScript automatically knows:

// response is ApiSuccess


// So:

// response.data // ✅ safe

// ✅ Example with if
function handleApiResponse1(response: ApiResponse): string {
  if (response.status === "success") {
    return response.data.name;
  }

  if (response.status === "error") {
    return response.message;
  }

  return "Loading...";
}

handleApiResponse1({status:'loading'})


// ✔ No optional chaining
// ✔ No any
// ✔ Full type safety

// ✅ Example with switch (BEST PRACTICE)

function handleApiResponse(response: ApiResponse): string {
  switch (response.status) {
    case "success":
      return response.data.name;

    case "error":
      return response.message;

    case "loading":
      return "Loading...";
  }
}


// 🔥 This is industry standard.