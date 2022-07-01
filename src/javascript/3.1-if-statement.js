/* We often perform a task based on a condition. For example, if the weather is nice 
today, then we will go outside. If the alarm clock rings, then we’ll shut it off. 
If we’re tired, then we’ll go to sleep. */

// The if keyword followed by a set of parentheses () which is followed by a code block, or block statement, indicated by a set of curly braces {}.
// Inside the parentheses (), a condition is provided that evaluates to true or false.
// If the condition evaluates to true, the code inside the curly braces {} runs, or executes.
// If the condition evaluates to false, the block won’t execute.
/*-----------------------------------------------------------------------------------*/

let sale = true;

if (sale) {
    console.log('Time to buy!')
}
/*******************Another Example*********************/

let dog = true;
let cat = true;
let animals = dog + cat;

if (animals) {
    console.log('These are animals')
}
