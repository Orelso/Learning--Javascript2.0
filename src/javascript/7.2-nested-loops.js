/* When we have a loop running inside another loop, we call that a nested loop.
One use for a nested for loop is to compare the elements in two arrays. For each
round of the outer for loop, the inner for loop will run completely. */

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both arrays have the number: ' + yourArray[j]);
    }
  }
}

/* Let’s think about what’s happening in the nested loop in our example. For each element
in the outer loop array, myArray, the inner loop will run in its entirety comparing the
current element from the outer array, myArray[i], to each element in the inner array, 
yourArray[j]. When it finds a match, it prints a string to the console. */

/*******************Another Example*********************/

let bobsFollowers = ['Orelso', 'Aku', 'Wander', 'Seppo'];
let tinasFollowers = ['John', 'Seppo', 'Wander']
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j])
    }
  }
}
console.log(mutualFollowers)

/*******************Another Example*********************/


let trainerOrelso = ['Gengar', 'SandShrew', 'Alakazam', 'Lapras'];
let trainerWander = ['Pikachu', 'Beedrill', 'Gengar', 'Lapras'];
let mutualPokemon = []

for (let i = 0; i < trainerOrelso.length; i++) {
    for (let j = 0; j < trainerWander.length; i++) {
        if (trainerOrelso[i] === trainerWander[j]) {
            mutualPokemon.push(trainerWander[j])
        }
    }
}

console.log(mutualPokemon)




