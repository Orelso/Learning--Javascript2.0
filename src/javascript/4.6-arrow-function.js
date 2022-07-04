/*Arrow functions remove the need to type out the keyword function every time you need to create a function.
 Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function 
 body surrounded in { } like this: */

const rectangleArea = (width, height) => {
    let area = width * height;
    return area;
};
/*******************Another Example*********************/

const pokemonMaster = (name, hometown) => {
    if (name === 'Orelso' && hometown === 'Miami') {
        return 'Orelso from Miami town'
    } else {
        return ' You are not a real trainer'
    }
}

let trainer = pokemonMaster('Orelso', 'Cuba')
console.log(pokemonMaster())