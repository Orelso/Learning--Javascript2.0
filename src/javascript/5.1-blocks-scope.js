/*We’ve seen blocks used before in functions and if statements. A block is the code found inside a set of 
curly braces {}. Blocks help us group one or more statements together and serve as an important structural 
marker for our code. */
/*---------------------------------------------------------------------------------------------------------*/

// A block of code could be a function, like this:

const logSkyColor = () => {
    let color = 'blue';
    console.log(color); // blue 
}

// Observe the block in an if statement:

if (dusk) {
    let color = 'pink';
    console.log(color); // pink
}
/*******************Another Example*********************/


const city = 'New York City'

function logCitySkyline() {
    let skyscraper = 'Empire State Building';
    return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline())
/*******************Another Example*********************/

let pokemon = 'sandshrew';

function pokemonWorld() {
    let evolution = 'sandslash';
    return pokemon + 'evolves into ' + evolution;
}
console.log(pokemonWorld())