// function greet(name) {
    
//     return function () {
//         //  returned function forms a closure and still has access to the name variable ('John') even after greet() is done executing.
        
//       console.log(`Hi ${name}`);
//     }
// }

// const greeting = greet('chai');

// greeting()


// // example 2 
// function setCount() {
//     let number = 0; 



//     // returns function which remebers number w=and here it forms closure
//     return function () {
//         console.log(number++);
        
//     }
// }

// const counter = setCount();
// counter()
// counter()


// Closure Example 3: For Loop Interview Question
/*
!  this is one of the most common closure traps in JavaScript interviews. Let’s explore why using var causes all the functions to return 4 instead of 1, 2, 3.

* because  :
 var → function-scoped
🔁 One i shared for all loop iterations → all closures point to the same i

This is because the closure remembers the reference to the variable, not the value at creation time.

let → block-scoped
🧱 A new i is created for each iteration → each closure gets its own copy

*/
function addNumber() {
  var number = []; // outside the loop
  console.log(number);

  //  for (let i = 1; i <= 3; i++
  for (var i = 1; i <= 3; i++) {
    // loopd 3 times
    // we are push function inside the nuber array so i value will be 1 2 3 3 fnctions

    number.push(function () {
      console.log(i);

      return i;
    });
  }

  return number;
}

const getNumbers = addNumber()
console.log(getNumbers[0]());
console.log(getNumbers[1]());
console.log(getNumbers[2]());


// Closure Example 6: Interview Question - setTimeout

/*
 💣 Why?
var is function-scoped, so only one i variable is shared across all loop iterations.

The setTimeout callbacks run after the loop is complete.

By the time the callbacks run, i has already become 4.

So all the arrow functions close over the same i, which is now 4.

That’s why all console.log(i) print 4.
*/

/*
 🤯 Why?
let is block-scoped.

Each iteration of the loop creates a new i.

So each setTimeout closes over a different copy of i.

Closures work correctly and print values 0, 1, 2, 3 one after the other.
*/

const craeteCallbacks = () => {
    for (let i = 0; i <= 3; i++){
        setTimeout(() => {
            console.log(i);
            
        }, i * 1000);
    }
}

craeteCallbacks()