/*Scope is the context in which our variables are declared. We think about scope in relation to blocks
 because variables can exist either outside of or within these blocks.

In global scope, variables are declared outside of blocks. These variables are called global variables. 
Because global variables are not bound inside a block, they can be accessed by any code in the program, 
including code in blocks. */

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

const callMyNightSky = () => {
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
};
console.log(callMyNightSky())

/*******************Another Example*********************/

const trainer = 'Orelso';
const pokemon = 'Sandshrew';
const pokeball = 'Masterball'

let myPokemonWorld = () => {
    return 'The trainer is ' + trainer + ' his pokemon is ' + pokemon + ' and he used a ' + pokeball + ' to catch him';
}
console.log(myPokemonWorld())