/* In programming, we often use code to perform a specific task multiple times. Instead of rewriting the 
same code, we can group a block of code together and associate it with one task, then we can reuse that 
block of code whenever we need to perform the task again. We achieve this by creating a function. A function 
is a reusable block of code that groups together a sequence of statements to perform a specific task. */


// A function declaration consists of:
// The function keyword.
// The name of the function, or its identifier, followed by parentheses.
// A function body, or the block of statements required to perform a specific task, enclosed in the function’s curly brackets, { }.

function greetWorld() {
    console.log('Hello World');
}

//   To call a function in your code, you type the function name followed by parentheses.
greetWorld();
// This function call executes the function body, or all of the statements between the curly braces in the function declaration.

/*---------------------------------------------------------------------------------------------------------*/

function sayThanks() {
    console.log('Thank you for your purchase! We appreciate your business.')
}

sayThanks();
sayThanks();
sayThanks();