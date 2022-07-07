// Imagine we’re looking to adopt a dog. We plan to go to the shelter every day for a year and then give up. But what if we meet our dream dog on day 65? We don’t want to keep going to the shelter for the next 300 days just because our original plan was to go for a whole year. In our code, when we want to stop a loop from continuing to execute even though the original stopping condition we wrote for our loop hasn’t been met, we can use the keyword break.

// The break keyword allows programs to “break” out of the loop from within the loop’s block.

for (let i = 0; i < 99; i++) {
    if (i > 2 ) {
       break;
    }
    console.log('Banana.');
  }
   
  console.log('Orange you glad I broke out the loop!'); // Prints: Banana. Banana. Banana. Orange you glad I broke out the loop!

  /*******************Another Example*********************/

  const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.') {
  break;
  }
}
  console.log("And if you don't know, now you know.")

  /*******************Another Example*********************/

let musicians = ['Drake', 'Sean Paul', 'DMX', 'Wu-tang Clan', 'Slick Rick', 'Tupcac', '2pac']

for(let i = 0; i < musicians.length; i++) {
    console.log(musicians[i]);
    if(musicians[i] === 'Sean Paul') {
        break;
    }
}
console.log('The other musicians are too good to mention')