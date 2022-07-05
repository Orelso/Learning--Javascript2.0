const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
    arr.push('lily');
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

// The flowers array that has 3 elements.
// The function addFlower() has a parameter of arr uses .push() to add a 'lily' element into arr.
// We call addFlower() with an argument of flowers which will execute the code inside addFlower.
// We check the value of flowers and it now includes the 'lily' element! The array was mutated!

/* So when you pass an array into a function, if the array is mutated inside the function, that change will
be maintained outside the function as well. You might also see this concept explained as pass-by-reference
since what we’re actually passing to the function is a reference to where the variable memory is stored 
and changing the memory. */

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr) {
    arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept) // Prints: [ 'arrays', 'can', 'be', 'MUTATED' ]

function removeElement(newArr) {
    newArr.pop()
}
removeElement(concept)
console.log(concept) // Prints: [ 'arrays', 'can', 'be' ]

/*******************Another Example*********************/

let pokemon = ['pikachu', 'mew', 'muk', 'grimer', 'charizard', 'metapod']

function changePokemon(arr) {
    arr[0] = 'PIKACHU';
    arr[5] = 'METAPOD';
}

changePokemon(pokemon);
console.log(pokemon); // Prints: [ 'PIKACHU', 'mew', 'muk', 'grimer', 'charizard', 'METAPOD' ]

function removeElement(newArr) {
    newArr.pop()
}

removeElement(pokemon);
console.log(pokemon); // Prints: [ 'PIKACHU', 'mew', 'muk', 'grimer', 'charizard' ]



