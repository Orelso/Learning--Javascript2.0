// ZERO PARAMETERS
const functionName = () => { };
// ONE PARAMETER
const functionName = parameterOne => { };
// TWO OR MORE PARAMETERS
const functionName = (parameterOne, parameterTwo) => { };

/* A function body composed of a single-line block does not need curly braces. Without the curly braces,
 whatever that line evaluates will be automatically returned. The contents of the block should immediately 
 follow the arrow => and the return keyword can be removed. This is referred to as implicit return.
 */

// SINGLE-LINE BLOCK
const sumNum = number => number + number;
// MULTI-LINE BLOCK 
const sumNum = number => {
  const sum = number + number;
  return sum;
}


// So if we have a function:
const squareNum = (num) => {
  return num * num;
};
// We can refactor the function to:
const squareNum = num => num * num;

/*******************Another Example*********************/


const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
};

const plantNeedsWater = day => day === 'Wednesday' ? true : false;