let isNightTime = true;

if (isNightTime) {
    console.log('Turn on the lights!');
} else {
    console.log('Turn off the lights!');
}

// We can use a ternary operator to perform the same functionality:
// We can use a ternary operator to simplify an if...else statement.

/*******************Continued Example*********************/

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

// The condition, isNightTime, is provided before the ?.
// Two expressions follow the ? and are separated by a colon :.
// If the condition evaluates to true, the first expression executes.
// If the condition evaluates to false, the second expression executes.

/*******************Another Example*********************/

let isLocked = false;

if (isLocked) {
    console.log('You will need a key to open the door.');
} else {
    console.log('You will not need a key to open the door.');
}

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

/*******************Another Example*********************/

let isCorrect = true;

if (isCorrect) {
    console.log('Correct!');
} else {
    console.log('Incorrect!');
}

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

/*******************Another Example*********************/

let favoritePhrase = 'Love That!';

if (favoritePhrase === 'Love That!') {
    console.log('I love that!');
} else {
    console.log("I don't love that!");
}

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!")