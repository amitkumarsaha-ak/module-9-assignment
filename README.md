JavaScript Asynchronous Programming & DOM Project Assignment

PART A: THEORY QUESTIONS

1. Execution Context
What is Execution Context in JavaScript?
Execution Context is the space in which the JavaScript code is run. It includes information on variables, functions and the scope chain.

Global Execution Context
The Global Execution Context (GEC) is the Execution Context that is created when a program is written in the JavaScript programming language and begins execution. There is only one Global Execution Context in a program. It defines the global object and sets the value of this.

Function Execution Context
Every time a function is called, a new Function Execution Context is set up. Each function call will have its own execution context.

Creation Phase
Players will complete the Creation Phase by completing the following steps:
•	Variables and functions are allocated memory.
•	All variables are set to `undefined`.
•	Function declarations will be loaded into memory.
•	The value of the object being used is determined.

Execution Phase
In the Execution Phase:
•	Each line of code runs sequentially.
•	The values are entered into variables.
•	Functions are invoked.

2. Event Loop
What is the JavaScript Event Loop?
The Event Loop is a mechanism, which is constantly monitoring Call Stack and Callback Queue. As the Call Stack is empty, the Call Back Queue transfers the Call Back Functions to the Call Stack.

Why is JavaScript called Single Threaded?
JavaScript has one single Call Stack and its code executes one task at a time. Thus, it is known as a single threaded language.

Relationship between Call Stack, Web APIs, Callback Queue and Event Loop
•	Call Stack runs JavaScript programs.
•	Web APIs are used for asynchronous API operations like setTimeout and DOM events.
•	Completed callback functions are stored in the Callback Queue.
•	Event Loop will push callbacks to the Callback Queue to the Call Stack when the Callback Queue is empty.

3. setTimeout() and setInterval()
What is setTimeout()?
The function is called after a delay of time using setTimeout.

What is setInterval()?
setInterval() calls a function at regular time intervals.

Difference Between setTimeout() and setInterval()
setTimeout()	setInterval()
Executes once	Executes repeatedly
Runs after a delay	Runs continuously at intervals
Used for one-time tasks	Used for recurring tasks

Program to Print "Hello World" After 3 Seconds
setTimeout(() => { 
         console.log("Hello World");
 }, 3000);

Digital Clock Using setInterval()
setInterval(() => { 
             const now = new Date(); 
             console.log(now.toLocaleTimeString()); 
}, 1000);

4. Callback Functions
What is a Callback Function?
Callback functions are functions passed as arguments to other functions and called at a later time.

Why Are Callbacks Used?
•	To support asynchronous operations.
•	To run code when another process completes.
•	To make the code more reusable.
Example
function greet(name, callback) { 
               console.log("Hello " + name); 
               callback();
 } 
function sayBye() { 
             console.log("Goodbye!"); 
} 
greet("Amit", sayBye);

5. Promise
What is a Promise?
A Promise is an object that represents either the success or failure of an asynchronous operation.

Promise States
Pending
Original condition prior to finishing.

Fulfilled
The operation was successful.

Rejected
The operation failed.

Promise That Resolves After 2 Seconds
const myPromise = new Promise((resolve) => {
        setTimeout(() => { 
               resolve("Promise Resolved");
        }, 2000); 
});

Handling Success and Error
myPromise 
.then(result => { 
          console.log(result); 
}) 
.catch(error => { 
            console.log(error);
 });

6. Async/Await
What is async?
Use the async keyword to return a Promise from a function.

What is await?
The await keyword waits for a Promise to be fulfilled.

How Does async/await Improve Readability?
It enables asynchronous code to be written in a synchronous fashion, hence more readable and maintainable.

Promise-Based Example
fetchData()
 .then(data => console.log(data));

Async/Await Version
async function getData() {
            const data = await fetchData(); 
            console.log(data); 
}
 getData();
