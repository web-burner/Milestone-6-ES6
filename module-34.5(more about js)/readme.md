1. what actually js is? 
=> js is a dynamic typed just in time compiled language 

2. high abstraction ?
=> In JavaScript, high abstraction means using code that hides complex details and lets you work with simpler, more human-friendly concepts.
Abstraction = hiding complexity.
like array method 
create looping 
fetch 
async/await etc. 
like behind the scene we don't know. what happing but we understand what is going to happen 

3. garbage collection ? 
=> Garbage collection (GC) in JavaScript is the process where the JavaScript engine automatically removes unused memory so your program doesn’t run out of memory.

🔥 Simple idea

When you create variables, objects, arrays, etc., they take memory.

If something is no longer needed, JavaScript marks it as garbage and deletes it.


function demo() {
  let user = {
    name: "Shaon",
    age: 20
  };

  console.log(user.name);
}

demo();

After demo() finishes:

* user is no longer accessible
* JavaScript removes it from memory automatically

🧹 How GC decides what to remove

JavaScript mainly uses Reachability:

✔️ “Reachable” means still in use

* Global variables
* Variables inside running functions
* Objects referenced by other objects

❌ “Unreachable” means garbage

* No references pointing to it anymore


⚙️ How it works internally (simple view)

Modern JS engines (like V8 in Chrome) use:

* Mark-and-sweep algorithm
    * Mark: find all reachable objects
    * Sweep: delete unmarked ones


4. JWT compiled : Just In Time compiled 

5. 🧠 What is Call Stack Memory in JavaScript?

The call stack is a special memory structure that JavaScript uses to keep track of function execution.

It follows LIFO (Last In, First Out):

The last function that goes in is the first one to come out.

⸻

🧩 Simple idea

When a function runs, JavaScript:

1. Puts it into the call stack
2. Executes it
3. Removes it when finished

⚙️ Why call stack is important

It handles:

* Function execution order
* Nested function calls
* Recursion

6. 🧠 What does Multi-Paradigm mean in JavaScript?

A multi-paradigm language is a language that supports more than one programming style (paradigm).

👉 JavaScript is multi-paradigm because you can write it in different ways depending on the problem.
🧠 Simple definition

Multi-paradigm = you are not forced to use one coding style

JavaScript lets you choose:

* procedural
* object-oriented
* functional
* event-driven

7. 🧬 What does Prototype-based mean in JavaScript?

JavaScript is a prototype-based language, meaning:

Objects inherit directly from other objects (called prototypes), not from classes like in traditional OOP languages.

⸻

🧠 Simple idea

Instead of:

* “Class → create object → inherit”

JavaScript does:

* “Object → link to another object → reuse behavior”

8. 🧠 What does Dynamically Typed mean in JavaScript?

JavaScript is a dynamically typed language, which means:

The type of a variable is determined at runtime, not when you write the code.

You don’t need to declare types like int, string, etc.
9. ⚙️ What is the V8 Engine in JavaScript?

The V8 engine is the JavaScript engine developed by Google that runs JavaScript code very fast.

🔄 How V8 works (step-by-step)
When you run JavaScript:

1. Parsing

JS code is read and converted into an internal structure (AST).

2. Compilation (JIT)

V8 uses Just-In-Time (JIT) compilation:

* Converts JS into machine code
* Happens during runtime (not before execution)

3. Execution

Machine code is executed directly by the CPU.

10. 🧠 What is the Call Stack in JavaScript?

The call stack is a memory structure used by JavaScript to track function execution.

It follows LIFO (Last In, First Out) order.

11. 🧠 Is JavaScript single-threaded?

Yes — JavaScript is single-threaded, meaning:

It can execute only one piece of code at a time in a single call stack.

12. setTimeOut/clearTimeOut(parameter,parameter for time) it will run one time after the time but if compiler free . it return an timeout id

🔄 Key points (exam/interview ready)

* Runs code once after delay
* Is asynchronous
* Depends on event loop + call stack availability
* Returns a timeout ID
* Can be cancelled using clearTimeout(id)

13. 🧠 What is a Promise in JavaScript?

A Promise is an object that represents a value that will be available in the future.

It is used for handling asynchronous operations like API calls, file loading, timers, etc.
1. Promise.all()

Waits for ALL promises to succeed

14. 🧠 async / await

async and await are built on top of Promises and make asynchronous code look easier to read.

async

An async function always returns a Promise.

await
await pauses the execution inside that async function until the Promise settles.

15. 🧠 What is try...catch in JavaScript?

try...catch is used for error handling.

It allows your program to continue running instead of crashing when an error occurs.

Without try...catch, JavaScript would throw an error and stop executing the remaining code.

16. 🧠 What is Promise Hell?

Promise Hell happens when Promise code becomes difficult to read and maintain because of excessive chaining or nesting.


17. 🧠 Event Loop

The Event Loop is the mechanism that allows JavaScript to handle asynchronous tasks even though it is single-threaded.

18. 🧠 Concurrency

JavaScript is:

* Single-threaded
* But capable of concurrency

What is concurrency?

Handling multiple tasks during the same period of time.

Not necessarily executing them simultaneously.

19. 🧠 What is the Event Queue in JavaScript?

The Event Queue (often called the Callback Queue or Task Queue) is a queue that stores callbacks from asynchronous operations that are ready to run.

When an async task finishes, its callback is placed in the Event Queue and waits until the Call Stack is empty.
The Event Queue follows FIFO (First In, First Out).

The Event Queue is a FIFO queue that stores callbacks from completed asynchronous operations. The Event Loop moves callbacks from the Event Queue to the Call Stack when the stack becomes empty. It is mainly used for macrotasks such as setTimeout, setInterval, and DOM events.