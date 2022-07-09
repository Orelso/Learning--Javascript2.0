/*.forEach() will execute the same code for each element of an array. */

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(fruits => console.log('I want to eat a ' + fruits))
/*----------------------------------------------------------------------------------- */

/* When .map() is called on an array, it takes an argument of a callback function and returns a new array! Take a look at an example of calling .map(): */

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animal => animal[0])

console.log(secretMessage.join('')); // Prints: HelloWorld

const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(bigNumber => bigNumber / 100)
console.log (smallNumbers) // Prints: [ 1, 2, 3, 4, 5 ]
/*----------------------------------------------------------------------------------- */

/*.filter() returns a new array. However, .filter() returns an array of elements after filtering out certain elements from the original array. The callback function for the .filter() method should return true or false depending on the element that is passed to it. The elements that cause the callback function to return true are added to the new array. */

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter(num => num < 250)


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


const longFavoriteWords = favoriteWords.filter(word => word.length > 7)
/*----------------------------------------------------------------------------------- */

/*We sometimes want to find the location of an element in an array. That’s where the .findIndex() method comes in! Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function. */

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
})
console.log(foundAnimal)

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
})
console.log(startsWithS)
/*----------------------------------------------------------------------------------- */

/*Another widely used iteration method is .reduce(). The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array. */

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) =>
{
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10)
console.log(newSum)
// The value of accumulator:  10
// The value of currentValue:  1
// The value of accumulator:  11
// The value of currentValue:  3
// The value of accumulator:  14
// The value of currentValue:  5
// The value of accumulator:  19
// The value of currentValue:  7
// 26
/*----------------------------------------------------------------------------------- */

/*******************Another Example*********************/

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some((word = word) => { // Prints: true
  return word.length < 6;
}));

const interestingWords = words.filter(word => word.length > 5)


console.log(interestingWords.every((word) => {  //Prints: true
  return word.length > 5
} ));

console.log(interestingWords) // Prints: [ 'unique', 'uncanny', 'oxymoron' ]
/*----------------------------------------------------------------------------------- */

/*******************Another Example*********************/


const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.findIndex((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);