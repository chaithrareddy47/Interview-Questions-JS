// closures in details


/*
 let primaryButton = buttonProps('1rem');
 🔹 Step 1: You call buttonProps('1rem')

This sets borderRadius = '1rem'

Inside buttonProps, it defines a function createVarientButtonProps(variant, color)

This inner function forms a closure over borderRadius (remembers its value)

Then it returns the inner function createVarientButtonProps

✅ Closure is already formed at this point.
Only one closure is created — the inner function (returned) has access to the outer variable (borderRadius).


let primaryButtonProps = primaryButton('primary', 'red');
🔹 Step 2: Now you call the returned function (createVarientButtonProps)

It uses the remembered borderRadius = '1rem' from the closure

And uses the arguments you passed now: 'primary' and 'red'

Returns the combined object

* We are calling the returned function and passing new values to it, while it already has a closure formed with the outer value (borderRadius).
*/
// buttonprops as parent function
let buttonProps = (borderRadius) => {

    // child function
    const createVarientButtonProps = (varirent, color) => {

        const newProps = {
          /*
            That inner function remembers borderRadius = '1rem' — this is closure.

You return that inner function.
             */
          borderRadius, // it forms closure from the parent function
          varirent,
          color,
        };
        return newProps;
    }
    return createVarientButtonProps;
}

let primaryButton = buttonProps('1rem')

let primaryButtonProps = primaryButton('primary', 'red')

console.log(primaryButton());
console.log(primaryButtonProps);



/*
 ✅ 1. Direct Conceptual Question
❓ "What is a closure in JavaScript? Can you give me a real-world example?"

You can answer using your example:

js
Copy code
function buttonProps(borderRadius) {
  return function (variant, color) {
    return {
      borderRadius,
      variant,
      color,
    };
  };
}
Then explain:

"The inner function remembers borderRadius from the outer scope, even after buttonProps has finished executing — that’s closure."

✅ 2. Code Tracing / Output Prediction
❓ "What will this log?"

js
Copy code
const getButton = buttonProps("8px");
console.log(getButton("primary", "blue"));
✅ You should be able to explain and say:

js
Copy code
// Output:
{ borderRadius: "8px", variant: "primary", color: "blue" }
✅ 3. Bug Detection
❓ "Why is variant and color coming out as undefined in this code?"

Then they might show a mistake like:

js
Copy code
let primary = buttonProps("1rem", "primary", "red");
console.log(primary());
Your answer:

"buttonProps only accepts one argument (borderRadius), and returns a function. So the variant and color values are being ignored. Instead, I should first call buttonProps('1rem'), then call the returned function with 'primary' and 'red'."

✅ 4. Create a Reusable Function (Factory Pattern)
❓ "Can you write a function that pre-configures a style value like borderRadius, and returns another function to generate a button config?"

This is exactly what you built. 💪


 */