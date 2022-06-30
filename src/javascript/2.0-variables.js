/*In programming, a variable is a container for a value. 
You can think of variables as little containers for information 
that live in a computer’s memory. Information stored in 
variables, such as a username, account number, 
or even personalized greeting can then be found in memory. */

/*----------------------------------------------------------------------------------- */
/* var, short for variable, is a JavaScript keyword that creates, or declares, 
a new variable. */

var favoriteNumber = 100;
var favoriteColor = "pink";
console.log(favoriteNumber);
console.log(favoriteColor);
/*----------------------------------------------------------------------------------- */
/* The let keyword signals that the variable can be reassigned a different value. */

let animal = 'cat';
console.log(animal); // cat
animal = 'cat-dog';
console.log(animal); // cat-dog
/*******************Another Example*********************/
let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350
/*----------------------------------------------------------------------------------- */
/* a const variable cannot be reassigned because it is constant. 
If you try to reassign a const variable, you’ll get a TypeError. */
/* Constant variables must be assigned a value when declared. If you try to declare 
a const variable without a value, you’ll get a SyntaxError. */

const entree = 'Enchiladas';
console.log(entree); // Enchiladas
entree = 'Tacos'; // Type Error

/* const testing; // Syntax Error */