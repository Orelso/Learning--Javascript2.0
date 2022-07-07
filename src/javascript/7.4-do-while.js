// In some cases, you want a piece of code to run at least once and then loop based on a specific condition after its initial run. This is where the do...while statement comes in.

// A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met.

let countString = '';
let i = 0;
 
do {
  countString = countString + i;
  i++;
} while (i < 5);
 
console.log(countString);

/*In this example, the code block makes changes to the countString variable by
appending the string form of the i variable to it. First, the code block after the do
keyword is executed once. Then the condition is evaluated. If the condition evaluates
to true, the block will execute again. The looping stops when the condition evaluates
to false. */

/*******************Another Example*********************/

let cupsOfSugarNeeded = 10;
let cupsAdded = 0;

do {
  cupsAdded = cupsAdded;
  cupsAdded++
} while (cupsAdded < cupsOfSugarNeeded)
console.log(cupsAdded)

/*******************Another Example*********************/

let gallonsOfWater = 100;
let gallonsAdded = 10;

do {
    gallonsAdded = gallonsAdded;
    gallonsAdded++;
} while ( gallonsAdded < gallonsOfWater)
console.log(gallonsAdded);

