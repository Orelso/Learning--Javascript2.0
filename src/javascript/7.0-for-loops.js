// The typical for loop includes an iterator variable that usually appears in all three expressions. The iterator variable is initialized, checked against the stopping condition, and assigned a new value on each loop iteration. Iterator variables can have any name, but it’s best practice to use a descriptive variable name.

// A for loop contains three expressions separated by ; inside the parentheses:

// an initialization starts the loop and can also be used to declare the iterator variable.
// a stopping condition is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
// an iteration statement is used to update the iterator variable on each loop.
// The for loop syntax looks like this:

for (let counter = 0; counter < 4; counter++) {
  console.log(counter); // Print: 0 1 2 3
}

// The initialization is let counter = 0, so the loop will start counting at 0.
// The stopping condition is counter < 4, meaning the loop will run as long as the iterator variable, counter, is less than 4.
// The iteration statement is counter++. This means after each loop, the value of counter will increase by 1. For the first iteration counter will equal 0, for the second iteration counter will equal 1, and so on.
// The code block is inside of the curly braces, console.log(counter), will execute until the condition evaluates to false. The condition will be false when counter is greater than or equal to 4 — the point that the condition becomes false is sometimes called the stop condition.
// This for loop makes it possible to write 0, 1, 2, and 3 programmatically.

for ( let counter = 5; counter < 11; counter++) {
    console.log(counter)
}

for ( let number = 5; number < 100; number++ ) {
    console.log(number)
}
      

/*-----------------------------------------------------------------------------------*/
// Looping in Reverse
// What if we want the for loop to log 3, 2, 1, and then 0? With simple modifications to the expressions, we can make our loop run backward!

// To run a backward for loop, we must:

// Set the iterator variable to the highest desired value in the initialization expression.
// Set the stopping condition for when the iterator variable is less than the desired amount.
// The iterator should decrease in intervals after each iteration.

for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
}

for (let number = 100; number >= 0; number--) {
  console.log(number);
}

    
