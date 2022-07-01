// kelvin is equal to 293
const kelvin = 293;
// kelvin minus 273 equals celsius
const celsius = kelvin - 273;
//celsius * 9/5 + 32 equals fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
// will remove decimal from fahrenheit 
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);


// Convert to newton
let newton = celsius * (33 / 100);
// Round down
newton = Math.floor(newton);

console.log(`From celsius to newton its ${newton}`);