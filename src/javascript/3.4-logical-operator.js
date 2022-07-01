// Working with conditionals means that we will be using booleans, true or false values. 
// In JavaScript, there are operators that work with boolean values known as 
// logical operators. We can use logical operators to add more sophisticated logic to
//  our conditionals. There are three logical operators:

// the and operator (&&) - When we use the && operator, we are checking that two things are true:
// the or operator (||) - If we only care about either condition being true, we can use the || operator:
// the not operator, otherwise known as the bang operator (!) - Essentially, the ! operator will either take a true value and pass back false, or it will take a false value and pass back true.
/*----------------------------------------------------------------------------------- */

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
    console.log('time to sleep')
} else {
    console.log('not bed time yet')
}

let myMood = 'grumpy';
let moodLevel = 10;

if (myMood === 'mad' || moodLevel <= 10) {
    console.log('You have the grumps')
} else {
    console.log(`You're not grumpy at all`)
}