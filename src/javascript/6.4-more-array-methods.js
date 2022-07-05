/*Some arrays methods that are available to JavaScript developers include: 
.slice(*method returns a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.*),
.shift(*removes the first item from the array*), 
.unshift(*add an array to the beginning of the array*), and
Using these built-in methods make it easier to do some common tasks when working with arrays. */

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift()
console.log(groceryList)

groceryList.unshift('popcorn')
console.log(groceryList)

console.log(groceryList.slice(1, 4))
//will only print 1,2,3 because the end is not included(4)

