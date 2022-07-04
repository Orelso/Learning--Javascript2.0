/*These functions being called within another function are often referred to as helper functions. 
Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary. */

function multiplyByNineFifths(number) {
    return number * (9 / 5);
};

function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
};

getFahrenheit(15); // Returns 59

// getFahrenheit() is called and 15 is passed as an argument.
// The code block inside of getFahrenheit() calls multiplyByNineFifths() and passes 15 as an argument.
// multiplyByNineFifths() takes the argument of 15 for the number parameter.
// The code block inside of multiplyByNineFifths() function multiplies 15 by (9/5), which evaluates to 27.
// 27 is returned back to the function call in getFahrenheit().
// getFahrenheit() continues to execute. It adds 32 to 27, which evaluates to 59.
// Finally, 59 is returned back to the function call getFahrenheit(15).

function monitorCount(rows, columns) {
    return rows * columns;
}

function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);
