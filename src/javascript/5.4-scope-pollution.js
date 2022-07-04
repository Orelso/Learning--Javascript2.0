/* Scope pollution is when we have too many global variables that exist in the global namespace, or when 
we reuse variables across different scopes. Scope pollution makes it difficult to keep track of our different
 variables and sets us up for potential accidents. For example, globally scoped variables can collide with 
 other variables that are more locally scoped, causing unexpected behavior in our code. */

let num = 50;

const logNum = () => {
    num = 100; // Take note of this line of code
    console.log(num);
};

logNum(); // Prints 100
console.log(num); // Prints 100

// We have a variable num.
// Inside the function body of logNum(), we want to declare a new variable but forgot to use the let keyword.
// When we call logNum(), num gets reassigned to 100.
// The reassignment inside logNum() affects the global variable num.
// Even though the reassignment is allowed and we won’t get an error, if we decided to use num later, we’ll unknowingly use the new value of num.


// Practice Good Scoping

let lightWaves = 'Papa'
const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';
    if (region === 'The Arctic') {
        let lightWaves = 'Northern Lights';
        console.log(lightWaves); // Northern Lights
    }
    console.log(lightWaves); // Moonlight
};

logVisibleLightWaves();
console.log(lightWaves); // Papa