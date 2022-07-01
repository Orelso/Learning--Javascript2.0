// Let’s consider how non-boolean data types, like strings or numbers, are evaluated when checked inside a condition.

// Sometimes, you’ll want to check if a variable exists and you won’t necessarily want it to equal a specific value — you’ll only check to see if the variable has been assigned a value

let myVariable = 'I Exist!';

if (myVariable) {
    console.log(myVariable)
} else {
    console.log('The variable does not exist.')
}

/*The code block in the if statement will run because myVariable has a truthy value; even though the value of myVariable is not explicitly the value true, when used in a boolean or conditional context, it evaluates to true because it has been assigned a non-falsy value. */
/*----------------------------------------------------------------------------------- */


// So which values are falsy— or evaluate to false when checked as a condition? The list of falsy values includes:

// 0
// Empty strings like "" or ''
// null which represent when there is no value at all
// undefined which represent when a declared variable lacks a value
// NaN, or Not a Number

let numberOfApples = 0;

if (numberOfApples) {
    console.log('Let us eat apples!');
} else {
    console.log('No apples left!');
}
