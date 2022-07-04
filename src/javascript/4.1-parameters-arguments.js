/*some functions can take inputs and use the inputs to perform a task. When declaring a function, 
we can specify its parameters. Parameters allow functions to accept input(s) and perform a task using 
the input(s). We use parameters as placeholders for information that will be passed to the function when 
it is called. */

function calculateArea(width, height) {
    console.log(width * height)
}

/* When calling a function that has parameters, we specify the values in the parentheses that follow the 
function name. The values that are passed to the function when it is called are called arguments. Arguments
can be passed to the function as values or variables */

calculateArea(10, 6);
/*---------------------------------------------------------------------------------------------------------*/


function sayThanks(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}
sayThanks('Cole')
